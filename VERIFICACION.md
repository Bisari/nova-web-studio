# Verificación — 8 de septiembre de 2026

- JavaScript: `node --check`, correcto.
- 58 referencias locales (páginas, recursos y anclas): todos los destinos existen.
- Cuatro páginas revisadas a 360, 768 y 1440 píxeles de ancho: sin desbordamiento horizontal, con un H1 por página y sin anclas inexistentes.
- Inspección visual de las cuatro cabeceras en escritorio y móvil de 390 píxeles.
- Menú móvil NOVA: abre, actualiza aria-expanded y se cierra al navegar a Proyectos.
- Contacto NOVA: el botón abre el aviso provisional; Entendido lo cierra.
- Atlas: formulario probado con datos ficticios; muestra confirmación explícita de que no se envía ni guarda información y vacía los campos.
- Tras la mejora del modo sin JavaScript: comprobado que el botón del formulario se habilita al cargar JavaScript; en el HTML original está deshabilitado.
- Las fotografías de cabecera se cargaron durante la revisión. Las imágenes remotas y Google Fonts dependen de sus proveedores y de una conexión a internet.
- Animaciones mediante IntersectionObserver y alternativa para prefers-reduced-motion; contenido visible sin JavaScript.
- Sin formularios conectados, WhatsApp real, correo activo, mapas con seguimiento, métricas, backend ni almacenamiento.

Pruebas realizadas en Chromium. No se ha hecho una auditoría WCAG completa, una prueba en dispositivos físicos ni una medición Lighthouse. El despliegue público y su comprobación quedan pendientes de que el propietario publique los archivos.
