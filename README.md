# Tienda Vida y Tecnología — Sitio web de ventas (afiliados)

Sitio estático, sin backend ni base de datos, del proyecto **Vida Cristiana y Tecnología**.
Nombre del sitio: **Tienda Vida y Tecnología**. Es un nombre profesional, sin apellido
personal, coherente con la Página de Facebook “Vida Cristiana y Tecnología”.

## Importante sobre el dominio: pendiente, no es un ejemplo final

- **El dominio real todavía está pendiente de decidir por el usuario.**
- `ventasflores.com` fue **solo un ejemplo** mencionado en la conversación. **No es la
  marca, no es el nombre del sitio y no es el dominio elegido ni definitivo.**
  No se debe usar como marca del sitio.
- La carpeta `~/workspace/ventasflores/` es **solo una carpeta de trabajo interna**.
  Puede renombrarse después sin cambiar el contenido del sitio.
- **No se ha registrado, comprado ni publicado ningún dominio.** El registro y el
  pago de un dominio, cuando el usuario elija uno, los hace el usuario en su cuenta.

## Qué contiene este sitio

- `index.html` — Página principal: encabezado, aviso de afiliado, catálogo por
  categorías, ficha completa del producto destacado, cómo comprar en Hotmart en
  3 pasos, preguntas frecuentes y aviso de afiliado al final.
- `styles.css` — Estilos. Solo fuentes del sistema, sin fuentes externas y sin
  imágenes externas que puedan romperse. La ilustración del encabezado son formas
  CSS simples.
- `script.js` — Solo el filtro del catálogo por categoría. No carga datos externos
  ni crea enlaces nuevos.

## Contenido actual (verificado, sin inventar datos)

### Disponible, con botón real de compra

- **DESCUBRE TU TALENTO** — Hotmart ID 172697
  - Tipo: curso online / área de miembros / servicio de suscripción
  - Valoración: 5.0 (3 reseñas)
  - Precio máximo indicado: 538.92 € — en la página siempre se dice
    “ver precio actual en el enlace”, porque los precios pueden cambiar.
  - Correo de soporte del productor: soporte@autorrealizarte.com
  - Frase de su portada, citada tal cual: “¿Te gustaría librarte de tu trabajo
    para vivir con más plenitud pero no tienes claro a qué dedicar tu vida?”
  - Botón, exactamente: `https://go.hotmart.com/B108280816O`
    con `rel="sponsored nofollow"`. Aparece en la tarjeta del catálogo, en la
    ficha completa y en la sección de preguntas frecuentes.

### Próximamente, SIN botón y SIN enlace de afiliado

Estos productos todavía no están afiliados, por eso no tienen botón de compra.
Solo se publican los datos verificados que se indican. No se publican comisiones.

1. **7 PASOS PARA ATRAER LO QUE QUIERES A TU VIDA** — ID 376102,
   Desarrollo Personal, 5.0 (10 reseñas), precio máximo 217.36 US$
2. **ADIÓS MIEDO ESCÉNICO** — ID 78282, Desarrollo Personal, 5.0 (2 reseñas),
   precio máximo 204.00 €
3. **APRENDE COREANO CON KIKI** — ID 2372371, Educación, 5.0 (2 reseñas),
   precio máximo 60.00 US$
4. **CURSO REPARACIÓN DE COMPUTADORAS NIVEL 2** — ID 347503,
   Electrónica / Tecnología, 5.0 (1 reseña), precio máximo 397.00 US$
5. **MÉTODO RENACE PARA EMPODERAR TU NIÑO INTERIOR** — ID 3570538,
   Desarrollo Personal, 5.0 (1 reseña), precio máximo 79.99 US$

## Reglas de honestidad que cumple la página

- Aviso de afiliado arriba y abajo, en español claro: algunos enlaces son de
  afiliado, quien recomienda puede ganar una comisión sin costo extra para
  quien compra, la comisión varía según el producto.
- No se publican montos de comisión por producto en la página pública.
- No se prometen resultados garantizados, trabajo ni ingresos.
- No se afirma que el vendedor haya probado los productos.
- No se inventan reseñas, precios, características, módulos, duraciones, bonos
  ni testimonios. Lo que no está verificado en la ficha del productor no se
  publica; la página remite a la página del productor para el precio final,
  el contenido y las condiciones.

## Cómo agregar un producto nuevo

Cuando un producto candidato ya esté afiliado y tengas su enlace real de
Página de Ventas de Hotmart, haz esto en `index.html`:

1. Busca su tarjeta en la sección de su categoría. Está marcada como
   `Próximamente`.
2. Cambia el distintivo `Próximamente` por `Disponible`.
3. Quita el párrafo “Próximamente: aún no está afiliado, por eso no hay botón
   de compra.”
4. Agrega un botón con su enlace real, copiado tal cual desde Hotmart, sin
   reescribirlo a mano (un 0 y una O se confunden fácil):
   ```html
   <p><a class="btn" href="PEGAR_AQUI_EL_ENLACE_REAL" rel="sponsored nofollow">Ver en Hotmart</a></p>
   ```
5. Si el producto merece ficha completa, copia la estructura de la sección
   `#destacado` y cambia solo los datos verificados de su ficha (ID, tipo,
   valoración con número de reseñas, precio máximo y correo de soporte, si lo
   tiene). No copies comisiones a la página pública.
6. Revisa que el precio diga “Precio máximo: … · Ver precio actual en el enlace”.
7. Guarda y vuelve a publicar el sitio (ver despliegue abajo). Si el sitio ya
   estaba compartido, hay que volver a publicar para que los visitantes vean
   la versión nueva.

Para un producto totalmente nuevo (no está en la lista de Próximamente):

1. Copia una tarjeta `Próximamente` completa dentro de la sección de su
   categoría, o crea una sección nueva si la categoría no existe.
2. Cambia título, categoría (`data-category`), ID, valoración, precio máximo
   y tipo, solo con datos verificados de su ficha.
3. Si ya está afiliado, ponlo como `Disponible` con su botón real; si no,
   déjalo como `Próximamente` sin botón ni enlace.

## Cómo verlo en local

No hace falta instalar nada. Abre `index.html` en el navegador, o sirve la
carpeta con un servidor estático local. Los tres archivos deben quedar juntos
en la misma carpeta para que `styles.css` y `script.js` carguen.

## Cómo publicarlo gratis — Opción A: Render Static Site

1. Sube esta carpeta a un repositorio en GitHub (el usuario crea su cuenta
   de GitHub y de Render; no se crean cuentas por él).
2. En Render, crea un nuevo **Static Site** y conecta ese repositorio.
3. Configura:
   - **Build Command:** dejar vacío (es un sitio estático, no hay que compilar).
   - **Publish Directory:** la carpeta del repositorio que contiene `index.html`
     (si el repositorio es solo este sitio, usa `.` o la raíz).
4. Publica. Render te dará una dirección gratuita tipo `*.onrender.com`.
5. Comprueba en el móvil y en la computadora que el catálogo se ve sin
   desbordamiento horizontal y que el botón de DESCUBRE TU TALENTO abre la
   página de Hotmart.

## Cómo publicarlo gratis — Opción B: GitHub Pages

1. Sube esta carpeta a un repositorio en GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment → Source**, elige **Deploy from a branch**.
4. Elige la rama principal y la carpeta raíz (`/ (root)`), y guarda.
5. GitHub Pages te dará una dirección gratuita tipo `*.github.io`.
6. Comprueba igual que en Render: sin desbordamiento, botón de DESCUBRE TU
   TALENTO funcionando y tarjetas Próximamente sin botón.

## Cómo conectar un dominio propio después (lo hace el usuario)

Esto es solo para cuando el usuario ya haya elegido el dominio real.
El ejemplo mencionado antes no es el dominio elegido; no se usa aquí como tal.

1. El usuario elige y registra el dominio en el registrador que prefiera,
   con su cuenta y su pago. Nadie más lo registra por él.
2. En Render o en GitHub Pages, abre la configuración de **Custom Domain**
   del sitio publicado y escribe el dominio elegido, sin `https://` inicial.
3. El servicio mostrará los registros DNS que hay que crear (normalmente un
   registro `A` o `CNAME`, según el servicio). Copia esos valores tal cual.
4. En el panel del registrador del dominio, crea esos registros DNS.
5. Espera a que el DNS se propague (puede tardar minutos u horas) y verifica
   que el sitio abre con el dominio nuevo. Si el servicio lo ofrece, activa
   el certificado HTTPS que él mismo gestiona.
6. Si el dominio no abre, revisa primero que los registros DNS sean exactamente
   los que mostró Render o GitHub Pages, y que no queden registros viejos en
   conflicto.

## Qué NO se hizo aquí

- No se desplegó, publicó ni compartió públicamente este código.
- No se registró, compró ni pagó ningún dominio.
- No se creó ninguna cuenta en nombre del usuario.
- No se afiliaron productos nuevos ni se crearon enlaces de afiliado nuevos.
