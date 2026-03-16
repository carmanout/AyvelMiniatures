# Ayvel Miniatures - Portfolio

Portfolio profesional de pintura de miniaturas para wargames, desarrollado con HTML, CSS y JavaScript puro.

## 🎨 Características

- **Diseño Moderno y Visual**: Interfaz oscura con acentos en violeta y dorado que resalta las miniaturas
- **Galería Interactiva**: Con filtros por categorías (Warhammer, Marvel, Otros Wargames)
- **Lightbox**: Visualización ampliada de imágenes con navegación por teclado
- **Totalmente Responsive**: Adaptable a todos los dispositivos
- **Animaciones Suaves**: Efectos de scroll, hover y transiciones
- **Formulario de Contacto**: Listo para integrar con servicios de backend
- **Optimizado para GitHub Pages**: Fácil despliegue

## 📁 Estructura del Proyecto

```
ayvel-miniatures/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos completos
├── js/
│   └── main.js             # Funcionalidad interactiva
├── images/
│   └── miniatures/         # Imágenes del portfolio
│       ├── warhammer-1.jpg
│       ├── warhammer-2.jpg
│       ├── warhammer-3.jpg
│       ├── warhammer-4.jpg
│       ├── warhammer-5.jpg
│       ├── warhammer-6.jpg
│       ├── marvel-1.jpg
│       ├── marvel-2.jpg
│       ├── marvel-3.jpg
│       ├── marvel-4.jpg
│       ├── wargame-1.jpg
│       └── wargame-2.jpg
└── README.md               # Este archivo
```

## 🚀 Cómo Usar

### Visualización Local

1. Descarga o clona el repositorio
2. Abre el archivo `index.html` en tu navegador

```bash
cd ayvel-miniatures
open index.html  # En macOS
# o
start index.html # En Windows
```

### Subir a GitHub

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Activa GitHub Pages en la configuración del repositorio
4. Selecciona la rama `main` y carpeta `/ (root)`

## 📝 Personalización

### Añadir Nuevas Miniaturas

Edita el archivo `js/main.js` y añade nuevas entradas al array `miniaturesData`:

```javascript
{
    id: 13,
    title: "Nombre de la Miniatura",
    category: "warhammer", // o "marvel", "wargames"
    categoryName: "Warhammer 40K",
    image: "images/miniatures/tu-imagen.jpg"
}
```

### Modificar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-primary: #8b5cf6;      /* Violeta principal */
    --color-secondary: #f59e0b;     /* Dorado */
    --color-accent: #ec4899;        /* Rosa acento */
    --color-bg: #0a0a0f;            /* Fondo oscuro */
    /* ... */
}
```

### Configurar Formulario de Contacto

El formulario está preparado para integrarse con:
- **Formspree**: Solo cambia el action del formulario
- **Netlify Forms**: Añade `netlify` al form
- **EmailJS**: Configura tu cuenta y añade el SDK

Ejemplo con Formspree:
```html
<form action="https://formspree.io/f/TU_ID" method="POST">
```

## 🛠 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Variables, Flexbox, Grid, Animaciones
- **JavaScript (ES6+)** - Funcionalidad interactiva
- **Google Fonts** - Tipografías Cinzel e Inter

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ♿ Accesibilidad

- Navegación por teclado completa
- ARIA labels en elementos interactivos
- Contraste de colores WCAG AA
- Soporte para preferencias de movimiento reducido

## 📄 Licencia

Este proyecto está disponible para uso personal y comercial.

---

**Ayvel Miniatures** - Pintura profesional de miniaturas con pasión y dedicación. 🎨
