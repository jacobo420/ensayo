# El Lado Extracultural — Blog

Blog oficial del canal de TikTok **El Lado Extracultural**. Sitio estático (HTML, CSS y JavaScript puro, sin frameworks ni build step).

## Contenido

- `index.html` — Página principal: hero, categorías, artículos destacados, sección "Sobre el canal", newsletter, testimonios y contacto.
- `blog.html` — Listado completo de artículos con filtro por categoría y buscador.
- `post.html` — Plantilla de artículo individual (recibe el post por `?id=`), con relacionados y compartir.
- `css/style.css` — Estilos globales (tema oscuro con gradientes, totalmente responsive).
- `js/posts.js` — Datos de ejemplo de los artículos y categorías.
- `js/auth.js` — Sistema de inicio de sesión / registro simulado con `localStorage` (modal, sin backend).
- `js/main.js` — Lógica de interfaz: menú móvil, animaciones al hacer scroll, render de posts, filtros, formularios demo.

## Cómo verlo

Al ser un sitio 100% estático, basta con abrir `index.html` en el navegador, o servirlo localmente:

```bash
python3 -m http.server 8000
```

y visitar `http://localhost:8000`.

## Notas

- El login/registro es una simulación en el navegador (`localStorage`), pensada para mostrar la interfaz. Para producción real se necesita conectar un backend con autenticación segura (contraseñas hasheadas, sesiones, etc.).
- Las imágenes usan `picsum.photos` como placeholders y los iconos vienen de Font Awesome (CDN). Reemplázalos por tus propias fotos y capturas del canal cuando quieras personalizar el sitio.
- Actualiza el enlace de TikTok (`@ellladoextracultural`) y las redes sociales en el footer/contacto con tus URLs reales.
