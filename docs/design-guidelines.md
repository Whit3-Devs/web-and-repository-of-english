# Design guidelines

Esta app tiene que sentirse como un cuaderno de estudio moderno: clara, editorial y enfocada. La UI no compite con el contenido; lo ordena para que estudiar inglés sea más fácil.

## Principios

- **Claridad primero**: cada pantalla debe responder rápido qué estoy estudiando, por qué importa y qué hago después.
- **Jerarquía fuerte**: títulos grandes, etiquetas cortas, bloques visuales bien separados.
- **Semántica antes que decoración**: usar componentes con intención (`PageHeader`, `SectionCard`, `EmptyState`) antes que repetir `div` con clases largas.
- **Consistencia > creatividad aislada**: si aparece un patrón dos veces, debe vivir como componente o variante explícita.
- **Dark mode real**: todo componente base debe definir estados light y dark desde el inicio.

## Paleta

- **Base**: `slate` para fondos, bordes y texto.
- **Primary**: `blue` para navegación, links, foco y acciones principales.
- **Success**: `emerald` para contenido disponible, respuestas correctas y estados positivos.
- **Warning**: `amber` para “coming soon”, memoria rápida o advertencias suaves.
- **Danger**: `rose` para errores comunes, respuestas incorrectas o estados destructivos.
- **Info**: `sky`/`indigo` para ayudas, práctica y contenido complementario.

## Tipografía

- **Eyebrow**: `text-sm font-semibold uppercase tracking-[0.3em]`.
- **Page title**: `text-3xl` en mobile, `text-4xl` cuando haya espacio, `font-black`.
- **Section title**: `text-xl font-black`.
- **Body**: `text-base text-slate-600 dark:text-slate-400` sobre superficies principales `dark:bg-slate-900`.
- **Body de lectura sobre `dark:bg-slate-800`**: usar `dark:text-slate-200`; `dark:text-slate-400` queda reservado para metadata/labels y `dark:text-slate-50` para títulos.
- **Metadata**: `text-sm font-semibold text-slate-500 dark:text-slate-400`.

## Espaciado y superficies

- **Page spacing**: usar `space-y-6` o `space-y-8` entre regiones grandes.
- **Cards**: `rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900`.
- **Inner blocks**: `rounded-2xl` o `rounded-3xl` con fondos suaves (`slate-50`, `blue-50`, `amber-50`, etc.).
- **Padding**: `p-6` por defecto, `p-8` para artículos o regiones principales.

## Interacciones y movimiento

- Usar hover solo en elementos navegables, clickeables o claramente interactivos.
- No animar bloques puramente informativos: si no invita a una acción, no debería moverse.
- Preferir micro-interacciones sutiles: elevación leve, sombra más marcada, cambio de borde o transición de color.
- Respetar `motion-reduce` en cualquier movimiento o transición.
- Todo estado interactivo debe tener `focus-visible` o `focus-within` para navegación por teclado.
- Para superficies interactivas, usar APIs semánticas como `Card interactive` antes que repetir clases de hover en páginas.
- Links y chips navegables pueden usar transición de color, borde, sombra leve y desplazamiento mínimo.
- Los CTAs tipo botón pueden elevarse suavemente; los links textuales deben limitarse a color/subrayado para no afectar la lectura.
- Tabs, inputs y selects deben tener hover/focus claros pero quietos: borde, sombra y ring; no desplazar wrappers ni controles de lectura.
- Los estados activos de tabs deben ser más fuertes que el hover, con `aria-selected` y contraste evidente en light/dark.
- Navegación principal y links inline usan color, subrayado y focus ring; CTAs, chips y cards navegables pueden sumar sombra/elevación.
- Filas tabulares pueden usar hover de fondo para seguimiento visual: más oscuro en light mode, más claro en dark mode, sin desplazamiento.
- La etapa de hover/dinamismo se considera cerrada cuando Storybook y rutas principales pasan smoke visual sin animar contenido informativo.

## Componentes base

- `PageHeader`: encabezado de página con `eyebrow`, `title`, `description` y acciones opcionales.
- `Card`: superficie neutra para agrupar contenido; usar `interactive` solo cuando la card contenga una acción o navegación.
- `SectionCard`: bloque de contenido con título, descripción opcional y variante semántica.
- `Badge`: estado compacto con variantes semánticas.
- `BackLink`: navegación secundaria para volver a listados.
- `ActionLink`: CTA semántico para acciones de navegación importantes (`primary`, `soft`, `text`).
- `PillLink`: chip navegable para topics, related topics y directorios.
- `EmptyState`: estado vacío/not found con acción opcional.

## Reglas Tailwind

- Evitar repetir cadenas largas de clases en páginas.
- Evitar utilities contradictorias en el mismo nodo, por ejemplo `dark:text-slate-400 dark:text-slate-500`; la última gana y puede romper contraste sin que se note en review.
- Si una combinación representa una idea visual estable, convertirla en componente.
- Mantener variantes limitadas y semánticas: `default`, `primary`, `success`, `warning`, `danger`, `info`, `neutral`.
- No introducir librerías UI externas hasta que una necesidad concreta supere lo que el sistema propio puede resolver.
