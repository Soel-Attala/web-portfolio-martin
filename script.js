// ============================================
// FUNCIONALIDAD DE NAVEGACIÓN
// ============================================

/**
 * HAMBURGER MENU
 * Maneja la apertura y cierre del menú móvil mediante el ícono hamburguesa.
 * 
 * Funcionamiento:
 * 1. Selecciona el elemento hamburger y el menú de navegación
 * 2. Al hacer click en hamburger, agrega/quita la clase 'active' al menú
 * 3. La clase 'active' hace que el menú se deslice desde la izquierda (ver CSS)
 */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/**
 * CERRAR MENÚ AL HACER CLICK EN UN LINK
 * Mejora la UX cerrando automáticamente el menú móvil cuando
 * el usuario selecciona una opción.
 */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL Y NAVEGACIÓN ACTIVA
// ============================================

/**
 * HIGHLIGHT DEL LINK ACTIVO EN LA NAVEGACIÓN
 * Actualiza el estado "activo" del link de navegación basado en
 * la sección visible en el viewport.
 * 
 * Cómo funciona:
 * 1. Obtiene todas las secciones y links de navegación
 * 2. En cada scroll, verifica qué sección está visible
 * 3. Marca como activo el link correspondiente a esa sección
 */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// ANIMACIONES DE SCROLL
// ============================================

/**
 * INTERSECTION OBSERVER PARA ANIMACIONES
 * Detecta cuando los elementos entran en el viewport y les aplica animaciones.
 * 
 * ¿Qué es Intersection Observer?
 * Es una API moderna del navegador que permite observar cambios en la 
 * intersección de un elemento con el viewport de manera eficiente.
 * 
 * Ventajas sobre scroll events:
 * - Mejor rendimiento (no se ejecuta en cada scroll)
 * - Funciona de forma asíncrona
 * - Menos consumo de recursos
 * 
 * Parámetros:
 * - threshold: 0.1 significa que se activa cuando el 10% del elemento es visible
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

/**
 * ELEMENTOS A OBSERVAR
 * Selecciona todos los elementos que queremos animar cuando
 * aparecen en pantalla y los registra con el observer.
 */
const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .contact-item, .about-text'
);

animatedElements.forEach(element => {
    observer.observe(element);
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

/**
 * CAMBIO DE ESTILO DE NAVBAR AL HACER SCROLL
 * Añade una clase cuando el usuario hace scroll hacia abajo,
 * permitiendo cambiar el estilo del navbar (ej: fondo más sólido).
 * 
 * Uso común:
 * - Hacer el navbar más visible cuando se desplaza del hero
 * - Reducir el tamaño del navbar al hacer scroll
 * - Cambiar opacidad o color de fondo
 */
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ============================================
// TYPING EFFECT (OPCIONAL)
// ============================================

/**
 * EFECTO DE ESCRITURA EN EL HERO
 * Simula el efecto de una máquina de escribir en el subtítulo.
 * 
 * Parámetros:
 * - text: El texto completo a escribir
 * - speed: Velocidad de escritura en milisegundos
 * 
 * Funcionamiento:
 * 1. Toma el texto original del elemento
 * 2. Lo borra
 * 3. Lo va escribiendo letra por letra usando setInterval
 */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// Descomentar para activar el efecto de escritura en el subtítulo
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     typeWriter(heroSubtitle, originalText, 80);
// }

// ============================================
// SMOOTH SCROLL POLYFILL
// ============================================

/**
 * POLYFILL PARA NAVEGADORES ANTIGUOS
 * Asegura que el smooth scroll funcione incluso en navegadores
 * que no soportan scroll-behavior: smooth en CSS.
 * 
 * Nota: Los navegadores modernos ya soportan smooth scroll nativamente,
 * este código es principalmente para compatibilidad con navegadores antiguos.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // 70px para compensar el navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// LOADER (OPCIONAL)
// ============================================

/**
 * PRELOADER DE PÁGINA
 * Muestra un loader mientras la página carga completamente.
 * 
 * Funcionamiento:
 * 1. Al cargar completamente el DOM, espera 500ms adicionales
 * 2. Oculta el loader con un fade out
 * 
 * Para implementar:
 * 1. Agregar en HTML: <div class="loader"></div>
 * 2. Estilizar en CSS con posición fixed y z-index alto
 */
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    }
});

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * DEBOUNCE UTILITY
 * Limita la frecuencia con la que se ejecuta una función.
 * Útil para optimizar eventos que se disparan muchas veces (scroll, resize).
 * 
 * Explicación:
 * - Espera a que pasen 'delay' milisegundos sin que se llame la función
 * - Solo entonces ejecuta la función
 * - Si se vuelve a llamar antes del delay, reinicia el temporizador
 * 
 * Ejemplo de uso:
 * window.addEventListener('resize', debounce(() => {
 *     console.log('Resize finalizado');
 * }, 250));
 */
function debounce(func, delay = 250) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * THROTTLE UTILITY
 * Asegura que una función se ejecute como máximo una vez cada X milisegundos.
 * Diferente de debounce: se ejecuta periódicamente mientras el evento ocurre.
 * 
 * Uso común:
 * - Scroll events que necesitan feedback continuo pero controlado
 * - Tracking de posición del mouse
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// CONSOLE MESSAGE
// ============================================

/**
 * MENSAJE EN CONSOLA
 * Pequeño easter egg para desarrolladores que inspeccionan el sitio.
 */
console.log('%c Portfolio diseñado para Bernard Martin Lawan ', 
    'background: #1a5f5f; color: #fff; padding: 10px; font-size: 14px; font-weight: bold;');
console.log('%c Arquitecto especializado en diseño urbano y sostenible ', 
    'background: #d4654a; color: #fff; padding: 8px; font-size: 12px;');

// ============================================
// VALIDACIÓN Y ERROR HANDLING
// ============================================

/**
 * ERROR HANDLING GLOBAL
 * Captura errores no manejados y los reporta de forma amigable.
 * En producción, aquí se podría integrar un servicio de error tracking.
 */
window.addEventListener('error', (event) => {
    console.error('Error capturado:', event.error);
    // Aquí podrías enviar el error a un servicio de logging
});

/**
 * VERIFICACIÓN DE ELEMENTOS CRÍTICOS
 * Verifica que los elementos necesarios existan en el DOM.
 * Útil para debugging durante el desarrollo.
 */
function checkCriticalElements() {
    const critical = [
        '.navbar',
        '.hero',
        '.projects',
        '.contact'
    ];
    
    critical.forEach(selector => {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Elemento crítico no encontrado: ${selector}`);
        }
    });
}

// Ejecutar verificación en desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    checkCriticalElements();
}
