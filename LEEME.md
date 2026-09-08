# NOVA Web Studio

Portfolio estático con tres páginas conceptuales. HTML, CSS y JavaScript sin backend, compilación, instalación ni dependencias de JavaScript externas.

## Abrir en tu ordenador

1. Extrae el ZIP completo.
2. Abre `index.html` con Chrome, Edge o Firefox mediante doble clic.
3. Mantén las carpetas `css`, `js`, `projects` y `assets` junto a `index.html`.

Las imágenes de Unsplash y las fuentes de Google necesitan conexión. Sin conexión, siguen funcionando el contenido, los enlaces y la tipografía de respaldo, pero no se descargan las imágenes remotas.

## Archivos

- `index.html`: portada, servicios, proyectos, proceso, planes, FAQ y contacto de NOVA.
- `css/style.css`: estilos compartidos, temas particulares y ajustes responsive.
- `js/main.js`: menú móvil, animaciones, avisos y formulario demo.
- `projects/distrito-barber.html`: barbería conceptual.
- `projects/kuro-ramen.html`: restaurante conceptual.
- `projects/atlas-performance.html`: entrenador conceptual.
- `assets/favicon.svg`: icono de NOVA.
- `assets/og-cover.png`: imagen para compartir en redes.
- `.nojekyll`: permite publicar los archivos estáticos directamente en GitHub Pages.

## Publicar gratis en GitHub Pages

1. Crea una cuenta en GitHub si no tienes una.
2. Crea un repositorio **público**, por ejemplo `nova-web-studio`. Los repositorios públicos pueden usar Pages con GitHub Free.
3. En el repositorio, usa **Add file → Upload files**. Sube el contenido de esta carpeta, no el ZIP ni una carpeta contenedora adicional. `index.html` debe quedar en la raíz.
4. Guarda con **Commit changes**. Comprueba que las carpetas también se han subido.
5. Abre **Settings → Pages**.
6. En **Build and deployment → Source**, elige **Deploy from a branch**.
7. Selecciona **main** y **/(root)**, y pulsa **Save**.
8. Espera a que GitHub termine el despliegue. La dirección aparecerá en Pages, normalmente `https://TU_USUARIO.github.io/nova-web-studio/`.
9. Abre esa dirección y comprueba las tres demos. Las rutas relativas ya permiten alojarlo en una subcarpeta.

No hay que configurar Node, npm ni un comando de build.

Fuente oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Cloudflare Pages

Los mismos archivos son aptos para un despliegue estático. Sube la carpeta como recursos estáticos de Pages o conecta el repositorio. No necesita backend ni compilación. El directorio publicado debe contener `index.html` y sus carpetas. No se ha desplegado automáticamente en ninguna plataforma.

## Qué cambiar antes de publicar comercialmente

### 1. Marca

Busca `NOVA` y `NOVA Web Studio` en los cuatro HTML y sustituye si cambias de nombre. Actualiza el favicon y la imagen social si cambia la identidad. Los nombres de las demos pueden mantenerse.

### 2. Contacto de NOVA

En `index.html`, cambia `hola@novawebstudio.es` por un correo tuyo que hayas creado. Ahora aparece como texto, sin enlace y sin envío. No uses ese correo provisional como si fuera una cuenta real.

Para activar WhatsApp SOLO en NOVA, sustituye el botón de la sección `id="contacto"` por:

```html
<a class="btn" href="https://wa.me/34TUNUMERO?text=Hola%2C%20quiero%20presupuesto%20para%20una%20web" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp ↗</a>
```

Sustituye `34TUNUMERO` por tu número internacional, solo dígitos, sin + ni espacios. Cuando el canal funcione, elimina el texto `Contacto provisional · WhatsApp y correo todavía no habilitados.`. El diálogo provisional puede quedar como respaldo o eliminarse del HTML de NOVA si ya no hay botones `data-demo` en esa página.

### 3. Precios y alcance

En `index.html`, confirma `60 €`, `120 €`, `Webs desde 60 €`, `Precios de lanzamiento para primeros proyectos.`, una y dos revisiones y hasta cinco secciones. Define cómo presentar los impuestos aplicables y tu precio final antes de contratar. No se ha añadido una afirmación sobre impuestos sin conocer tu situación.

### 4. Plazos y condiciones

En la FAQ de `index.html`, confirma que puedes cumplir `3–7 días laborables`. Ajusta esa frase y los detalles de revisiones, alojamiento y entrega de archivos según el servicio que realmente ofrezcas. La web ofrecida no incluye un panel de administración.

### 5. Ciudad e idiomas

Confirma `Barcelona` en la portada, descripción y footer. El contenido comercial está en español. No afirma clientes, años de experiencia, certificaciones ni resultados que no hayas acreditado.

### 6. SEO y vista al compartir

En el `<head>` de cada HTML, revisa `<title>`, `description`, `og:title` y `og:description`. Una vez sepas la URL pública, añade `og:url` con la dirección absoluta de esa página y cambia `og:image` de su ruta relativa a la URL absoluta de `assets/og-cover.png`. Puedes añadir también un enlace canonical con la URL definitiva. No se ha inventado un dominio en uso.

Ejemplo para la portada (sustituye TU_USUARIO):

```html
<meta property="og:url" content="https://TU_USUARIO.github.io/nova-web-studio/">
<meta property="og:image" content="https://TU_USUARIO.github.io/nova-web-studio/assets/og-cover.png">
<link rel="canonical" href="https://TU_USUARIO.github.io/nova-web-studio/">
```

### 7. Fotografías

Cada imagen tiene un comentario indicando dónde sustituir su URL de Unsplash. Usa fotografías propias o autorizadas, guarda versiones optimizadas en `assets` y actualiza `src` y `alt`. Las fotografías actuales son referencias; no presentan locales ni personas como clientes reales. Su disponibilidad depende de Unsplash. Google Fonts también se descarga externamente; puedes alojar fuentes localmente si prefieres eliminar esa dependencia.

### 8. Mantén la transparencia de las demos

Conserva las etiquetas `Concept Project`, `Demo`, los avisos de negocio ficticio y la transformación ficticia de Atlas. Los perfiles del equipo de Distrito, horarios, platos, planes y precios son ejemplos. No actives reservas o redes que apunten a negocios reales con nombres coincidentes.

### 9. Formularios y mapas

El formulario de Atlas valida campos en el navegador, muestra un aviso, borra el contenido y NO envía ni guarda datos. Los mapas son placeholders sin iframes. Para un cliente real, configura su proveedor de formulario y su ubicación, y adapta la información de privacidad al tratamiento efectivo. Esto requiere una configuración adicional; un HTML estático por sí solo no entrega correos.

## Accesibilidad y comportamiento

Enlace para saltar al contenido, un H1 por página, foco visible, labels de formulario, menú con `aria-expanded`, Escape para cerrar el menú y diálogos nativos, FAQ con `details/summary`, textos alternativos y respeto a `prefers-reduced-motion`. Sin JavaScript, el contenido sigue visible; el formulario de demo permanece inactivo.

## Comprobaciones realizadas

Se incluyen resultados concretos en `VERIFICACION.md`. Son comprobaciones en un navegador Chromium, no una certificación de accesibilidad ni una garantía de comportamiento idéntico en todos los dispositivos.
