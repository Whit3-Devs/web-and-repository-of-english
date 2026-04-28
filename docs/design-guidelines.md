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
- **Body**: `text-base text-slate-600 dark:text-slate-400`.
- **Body sobre `dark:bg-slate-800`**: usar `dark:text-slate-300`; `dark:text-slate-500` queda demasiado bajo para contenido de lectura.
- **Metadata**: `text-sm font-semibold`.

## Espaciado y superficies

- **Page spacing**: usar `space-y-6` o `space-y-8` entre regiones grandes.
- **Cards**: `rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900`.
- **Inner blocks**: `rounded-2xl` o `rounded-3xl` con fondos suaves (`slate-50`, `blue-50`, `amber-50`, etc.).
- **Padding**: `p-6` por defecto, `p-8` para artículos o regiones principales.

## Componentes base

- `PageHeader`: encabezado de página con `eyebrow`, `title`, `description` y acciones opcionales.
- `Card`: superficie neutra para agrupar contenido.
- `SectionCard`: bloque de contenido con título, descripción opcional y variante semántica.
- `Badge`: estado compacto con variantes semánticas.
- `BackLink`: navegación secundaria para volver a listados.
- `EmptyState`: estado vacío/not found con acción opcional.

## Reglas Tailwind

- Evitar repetir cadenas largas de clases en páginas.
- Evitar utilities contradictorias en el mismo nodo, por ejemplo `dark:text-slate-400 dark:text-slate-500`; la última gana y puede romper contraste sin que se note en review.
- Si una combinación representa una idea visual estable, convertirla en componente.
- Mantener variantes limitadas y semánticas: `default`, `primary`, `success`, `warning`, `danger`, `info`, `neutral`.
- No introducir librerías UI externas hasta que una necesidad concreta supere lo que el sistema propio puede resolver.
