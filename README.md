# Portfolio de Bernard Martin Lawan - Arquitecto

Portfolio profesional diseñado para mostrar proyectos de arquitectura y diseño urbano.

## 📁 Estructura de Archivos

```
martin-portfolio/
│
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS (modo oscuro)
├── script.js           # Funcionalidades JavaScript
├── profile-photo.jpg   # Foto de perfil (REEMPLAZAR)
├── README.md          # Este archivo
│
└── projects/          # Carpeta con los PDFs de proyectos
    ├── ARCHITECTURAL_PORTFOLIO-SKETCHES.pdf
    ├── ARCHITECTURAL_PORTFOLIO-ADAPTIVE_REUSE.pdf
    ├── ARCHITECTURAL_PORTFOLIO_BROWFIELD_PROJECT.pdf
    ├── ARCHITECTURAL_PORTFOLIO_COMPLEX_SPECIALIZATION_1.pdf
    ├── ARCHITECTURAL_PORTFOLIO_SHOPING_MALLL.pdf
    ├── ARCHITECTURAL_PORTFOLIO_EVENT_CENTER.pdf
    └── ARCHITECTURAL_PORTFOLIO_PHOTOVOLTAIC_CELLS.pdf
```

## ✏️ Personalización Necesaria

### 1. FOTO DE PERFIL
**Ubicación en código:** `index.html` línea ~67
```html
<img src="profile-photo.jpg" alt="Bernard Martin Lawan">
```
**Acción:** 
- Reemplaza el archivo `profile-photo.jpg` con la foto de Martin
- O cambia el nombre del archivo en el código

---

### 2. ABOUT ME SECTION
**Ubicación en código:** `index.html` líneas ~76-85
```html
<p class="about-text">
    [Edit this text - Add Martin's professional background...]
</p>
```
**Acción:**
- Reemplaza el texto con la biografía profesional de Martin
- Puedes agregar más párrafos `<p class="about-text">` si es necesario

---

### 3. ENLACES DE REDES SOCIALES

#### Header Social Links
**Ubicación en código:** `index.html` líneas ~43-58
```html
<a href="#" class="social-link" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
```
**Acción:**
- Reemplaza `href="#"` con los enlaces reales:
  - LinkedIn: `href="https://linkedin.com/in/..."`
  - Behance: `href="https://behance.net/..."`
  - Instagram: `href="https://instagram.com/..."`
  - Email: `href="mailto:email@example.com"`

#### Footer Social Links
**Ubicación en código:** `index.html` líneas ~221-231
- Mismo proceso que arriba

---

### 4. INFORMACIÓN DE CONTACTO
**Ubicación en código:** `index.html` líneas ~200-205
```html
<p>[Add email here]</p>
```
**Acción:**
- Agrega el email de Martin

---

## 🎨 Paleta de Colores Actual

El portfolio usa un esquema de colores oscuro profesional:

- **Primary Color:** `#1a5f5f` (Verde azulado oscuro)
- **Accent Color:** `#d4654a` (Terracota/naranja)
- **Background:** `#0d1117` (Negro azulado)
- **Cards:** `#1c2128` (Gris oscuro)

### Cambiar Colores
**Ubicación:** `styles.css` líneas ~8-14
```css
:root {
    --primary-color: #1a5f5f;
    --accent-color: #d4654a;
    /* ... */
}
```

---

## 🚀 Deployment (Subir a Internet)

### Opción 1: GitHub Pages (GRATIS)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main` como source
5. Tu sitio estará en: `https://username.github.io/repo-name`

### Opción 2: Netlify (GRATIS)
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta completa a Netlify Drop
3. Tu sitio estará en línea en segundos
4. Puedes usar un dominio personalizado

### Opción 3: Vercel (GRATIS)
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Importa el proyecto desde GitHub
3. Deploy automático

---

## 🔧 Testing Local

### Opción 1: Extensión Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 2: Python Simple Server
```bash
# En la carpeta del proyecto:
python -m http.server 8000
# Abre: http://localhost:8000
```

### Opción 3: Node.js http-server
```bash
npx http-server
```

---

## 📱 Responsive Design

El portfolio es completamente responsive y se adapta a:
- 📱 Móviles (< 480px)
- 📱 Tablets (< 768px)
- 💻 Laptops (< 1024px)
- 🖥️ Desktops (> 1024px)

---

## ✨ Características

✅ Diseño oscuro profesional
✅ Animaciones suaves al hacer scroll
✅ Navegación sticky con highlight activo
✅ Menú hamburguesa responsive
✅ Enlaces a PDFs que se abren en nueva pestaña
✅ Grid de proyectos adaptable
✅ Sección de habilidades con íconos
✅ Smooth scroll nativo

---

## 🐛 Troubleshooting

### Los PDFs no se abren
- Verifica que la carpeta `projects/` esté en el mismo nivel que `index.html`
- Verifica los nombres de archivo en el HTML

### La foto no aparece
- Verifica que el archivo `profile-photo.jpg` exista
- O cambia el nombre en el código HTML

### El sitio no se ve bien en móvil
- Asegúrate de tener la etiqueta viewport en el HTML (ya está incluida)
- Prueba en diferentes dispositivos

---

## 📞 Soporte

Si necesitas ayuda con personalización adicional:
- Revisa los comentarios en el código
- Todos los archivos están bien documentados
- Los cambios principales están marcados con `[Edit this]`

---

## 📄 Licencia

Este portfolio fue creado específicamente para Bernard Martin Lawan.

---

**Desarrollado por:** Soel
**Para:** Bernard Martin Lawan
**Fecha:** Diciembre 2024
