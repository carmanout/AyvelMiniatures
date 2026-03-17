/**
 * AYVEL MINIATURES - Main JavaScript
 * Portfolio interactivo con galería, lightbox y efectos
 */

// ========================================
// DATOS DE LAS MINIATURAS
// ========================================
const miniaturesData = [
    {
        id: 1,
        title: "Nombre",
        category: "warhammer",
        categoryName: "Warhammer 40K",
        image: "images/miniatures/grandes-1.jpg"
    },

    {
        id: 2,
        title: "Nombre",
        category: "warhammer",
        categoryName: "Warhammer 40K",
        image: "images/miniatures/grandes-2.jpg"
    },

    {
        id: 3,
        title: "Adepta Sororitas",
        category: "warhammer",
        categoryName: "Warhammer 40K",
        image: "images/miniatures/grandes-3.jpg"
    },

    {
        id: 4,
        title: "Necron Overlord",
        category: "warhammer",
        categoryName: "Warhammer 40K",
        image: "images/miniatures/Ejercito-1.jpeg"
    },
 
    {
        id: 5,
        title: "Ork Warboss",
        category: "warhammer",
        categoryName: "Warhammer 40K",
        image: "images/miniatures/Ejercito-2.jpeg"
    },

    {
        id: 6,
        title: "Tyranid Hive Tyrant",
        category: "warhammer",
        categoryName: "Warhammer 40K",
        image: "images/miniatures/Ejercito-3.jpeg"
    },
        {
        id: 7,
        title: "Tyranid Hive Tyrant",
        category: "warhammer",
        categoryName: "Warhammer 40K",
        image: "images/miniatures/Ejercito-4.jpeg"
    },
    {
        id: 8,
        title: "Mandaloriano",
        category: "wargames",
        categoryName: "Star Wars Legion",
        image: "images/miniatures/wargame-2.jpg"
    },
    {
        id: 9,
        title: "Mandaloriano",
        category: "bustos",
        categoryName: "Star Wars Legion",
        image: "images/miniatures/warhammer-1.jpg"
    },
    {
        id: 10,
        title: "Mandaloriano",
        category: "modelado",
        categoryName: "Star Wars Legion",
        image: "images/miniatures/warhammer-2.jpg"
    }
];

// ========================================
// VARIABLES GLOBALES
// ========================================
let currentImageIndex = 0;
let filteredImages = [...miniaturesData];

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initParticles();
    initGallery();
    initFilters();
    initLightbox();
    initContactForm();
    initScrollReveal();
    initSmoothScroll();
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================
function initHeader() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========================================
// PARTICLES ANIMATION
// ========================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and animation
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        const size = 2 + Math.random() * 4;
        
        particle.style.left = `${left}%`;
        particle.style.bottom = '-10px';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// ========================================
// GALLERY
// ========================================
function initGallery() {
    renderGallery(miniaturesData);
}

function renderGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    images.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3 class="gallery-title">${item.title}</h3>
                <span class="gallery-category">${item.categoryName}</span>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(galleryItem);
    });
}

// ========================================
// FILTERS
// ========================================
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter images
            const filter = btn.dataset.filter;
            
            if (filter === 'all') {
                filteredImages = [...miniaturesData];
            } else {
                filteredImages = miniaturesData.filter(item => item.category === filter);
            }
            
            // Animate transition
            const gallery = document.getElementById('gallery');
            gallery.style.opacity = '0';
            
            setTimeout(() => {
                renderGallery(filteredImages);
                gallery.style.opacity = '1';
            }, 300);
        });
    });
}

// ========================================
// LIGHTBOX
// ========================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                navigateLightbox(1);
                break;
        }
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    currentImageIndex = index;
    const item = filteredImages[index];
    
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxCaption.textContent = `${item.title} - ${item.categoryName}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = filteredImages.length - 1;
    } else if (currentImageIndex >= filteredImages.length) {
        currentImageIndex = 0;
    }
    
    const item = filteredImages[currentImageIndex];
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    // Fade effect
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxCaption.textContent = `${item.title} - ${item.categoryName}`;
        lightboxImage.style.opacity = '1';
    }, 200);
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        showToast('Mensaje enviado correctamente. Te contactaré pronto!');
        
        // Reset form
        form.reset();
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.service-card, .gallery-item, .contact-card, .about-content');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                setTimeout(() => {
                    element.classList.add('reveal');
                    element.classList.add('active');
                }, index * 100);
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// PERFORMANCE: Debounce function
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Scroll-based animations here
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);
