# Handoff: EasyMD App del paciente (Rediseño v2)

## Resumen
Rediseño completo de la app móvil del paciente de EasyMD (iOS/Android, también tablet). Corrige 16 problemas de jerarquía, contraste, navegación y comunicación de beneficios detectados en la auditoría (`EasyMD Auditoría UX v2.dc.html`). Cubre: consulta médica 24/7 y psicológica ilimitada, especialistas y agenda, farmacia, laboratorio (Easylab), servicios con descuento, expediente clínico, órdenes y facturas, mensajes, estado de ánimo, Mi cuenta y familia.

Idioma de la UI: **español LATAM neutro, tuteo**. Moneda: **US$**.

## Sobre los archivos
Los archivos de este paquete son **referencias de diseño hechas en HTML**: prototipos que muestran el aspecto y comportamiento esperado, **no código de producción**. La tarea es **recrear estas pantallas en el stack real** (React Native / Expo, Flutter, SwiftUI + Compose, o el que use el equipo) con sus patrones y librerías. Si aún no hay stack, recomendamos **React Native + Expo + TypeScript** (un código para iOS/Android, reutiliza tokens en JS).

Para ver el prototipo: abre `prototype/EasyMD Redesign v2.dc.html` en un navegador (necesita conexión para fuentes e íconos por CDN). Arriba hay un selector Móvil / Tablet; la propiedad `demoState` (normal / cargando / vacío / error) cambia los estados de listas.

## Fidelidad
**Alta fidelidad (hi-fi).** Colores, tipografía, espaciado, radios, copy e interacciones son finales. Recrear pixel-perfect. Los **datos** (médicos, precios, farmacias, fechas) son de ejemplo y deben venir del backend.

## Archivos del paquete
- `README.md` — este documento (pantallas, flujos, estados, reglas).
- `tokens.json` — todos los tokens de diseño en formato Style Dictionary / Tokens Studio.
- `tokens.css` — los mismos tokens como variables CSS (web / referencia).
- `icons.md` — inventario completo de íconos (nombre, uso, tamaño, color) + guía de íconos 3D.
- `data-models.ts` — tipos TypeScript de todas las entidades + datos de ejemplo del prototipo.
- `api-contract.md` — endpoints que necesita la app, con payloads.
- `copy.json` — todos los textos de la UI por pantalla (para i18n).
- `prototype/` — prototipo navegable + design system necesario para abrirlo.

---

## Arquitectura de navegación

**Tab bar de 5 pestañas** (siempre visible en pantallas raíz, oculta en subpantallas):

| # | ID | Etiqueta | Ícono (Phosphor duotone) |
|---|----|----------|------|
| 1 | `inicio` | Inicio | `house` |
| 2 | `consultas` | Consultas | `stethoscope` |
| 3 | `servicios` | Servicios | `squares-four` |
| 4 | `expediente` | Expediente | `clipboard-text` |
| 5 | `ordenes` | Órdenes | `receipt` |

- Tab activa: ícono + label `--color-primary` (#0B1F3A), peso 700, pastilla `--mint-100` (#D0F5E7) detrás del ícono, animación `emdNav` (scale .6→1, opacity 0→1, 250 ms ease-out). Inactiva: `--muted-foreground` (#76756B), peso 500.
- Alto de la barra: 72 px + safe area. Cada tab ≥ 44×44 px.
- **Mensajes** y **Carrito**: botones circulares 44 px en el encabezado de Inicio (badge numérico en carrito).
- **Mi cuenta**: tocando el avatar en Inicio.
- **Favoritos**: pestaña dentro de Servicios.
- Subpantallas: encabezado con botón Regresar (44 px circular, borde 1 px) + título 18/700 + subtítulo 13 muted. Stack de navegación: `go(ruta)` empuja, `back()` hace pop, cambiar de tab limpia el stack.
- Al cambiar de ruta, scroll vuelve a 0.

### Mapa de migración (app actual → nueva)
| Antes | Ahora |
|---|---|
| Menú hamburguesa | Avatar en Inicio → Mi cuenta |
| Carrito | Encabezado de Inicio, Servicios y producto |
| Búsqueda | Inicio, Especialistas y Farmacias |
| Consulta médica 24/7 | Inicio (principal) y Consultas |
| Consultas psicológicas ilimitadas | Inicio y Consultas |
| Directorio de especialistas | Consultas y Servicios |
| Estado de ánimo | Tarjeta en Inicio |
| Servicios EasyMD (9) | Pestaña Servicios |
| Pestaña Favoritos | Servicios → Favoritos |
| Pestaña Mensajes | Ícono en encabezado de Inicio |
| Actualiza tu ficha médica | Expediente → Ficha |
| Detalle de consulta y recetas | Expediente → Historial y Recetas |
| Facturas | Órdenes → Ver factura |
| **Nuevo** | Expediente, plan visible, familia, urgencias, Asistente (muy pronto) |

---

## Pantallas

Viewport de diseño: **390 × 844** (móvil) y **744 × 980** (tablet). Fondo de app `--app-bg` #F1F4F7. Padding lateral 16 px (24 px en tablet). Separación entre bloques 16–20 px. Layout fluido: grids con `minmax(0,1fr)`, en tablet las grillas de 2 pasan a `auto-fit, minmax(150px,1fr)`.

### 1. Inicio (`inicio`)
**Propósito:** iniciar una consulta en ≤ 2 toques y ver qué incluye el plan.
1. **Encabezado**: avatar 44 px (iniciales, abre Mi cuenta) + "Hola, Nicolás" (Plus Jakarta 22/700) + badge "Plan activo" (12/600, fondo `--mint-50`, texto `--mint-700`, radio full). A la derecha: Mensajes (`chat-circle-dots`) y Carrito (`shopping-cart-simple`, badge rojo con conteo).
2. **Búsqueda**: alto 48, radio 14, borde 1 px `--border`, ícono `magnifying-glass` 18. Placeholder: "Busca un médico, examen o medicamento". Font 15.
3. **Hero doble (mismo peso visual)** — grid 2 col, gap 12, min-height 196, radio 24, padding 16:
   - **Consulta médica**: degradado navy (`--navy-deep` #003970 → `--navy-900` #0B1F3A, 150°), texto blanco. Ícono `stethoscope` en cuadro 48 px radio 16, fondo blanco 14 %, color `--mint-300`. Título 18/700 "Consulta médica", sub 12 "24/7 · menos de 5 min". CTA pastilla blanca 40 px "Empezar" + flecha.
   - **Consulta psicológica**: degradado serene (`--serene-500` #767FC7 → `--serene-700` #4D568F). Ícono `brain`. Sub "Ilimitada en tu plan".
   - Press: `scale(0.97)`.
4. **¿Cómo te sientes hoy?** — tarjeta degradado horizontal `--mint-50` → `--serene-50`, radio 20, ícono `smiley-meh` en cuadro blanco 40. Sub dinámico: "Registra cómo te sientes" o "Hoy: {estado}". → Estado de ánimo.
5. **Asistente EasyMD** — tarjeta blanca, ícono `sparkle` en cuadro navy degradado, badge "Muy pronto" (`--mint-100`/`--mint-700`). → Concierge.
6. **Qué incluye tu plan** — banda navy degradado (120°), ícono `seal-check` `--mint-300`, "Médico 24/7, psicología y descuentos". Abre bottom sheet Beneficios.
7. **Servicios** — título + "Ver todos" → tab Servicios. Grid 4 col: Farmacias (`pill`), Easylab (`flask`), Especialistas (`first-aid`), Clínicas (`hospital`). Tile radio 18, ícono 22 `--navy-800`, label 12/600.
8. **Última consulta** — fila: `file-text`, "Última consulta · 24 sep", "Dr. Emanuel Flores · Receta disponible", caret. → Detalle.

### 2. Consultas (`consultas`)
- Grid 2: **Médico 24/7** (ícono `stethoscope` en `--mint-50`/`--mint-600`, "Espera menor a 5 min") y **Psicología** (`brain` en `--color-wellness-soft`/`--color-wellness`, "Ilimitada").
- Fila "Agenda con un especialista" (`first-aid`) — "Presencial, con descuento".
- Tarjeta Asistente EasyMD (igual que Inicio).
- **Próxima cita**: si existe muestra nombre + fecha/hora; si no, estado vacío con `calendar-blank`.
- Acceso a **Historial** → Expediente/Historial.

### 3. Formulario de consulta (`form`, `kind: medico | psico`)
Un solo paso. Título: "Consulta médica" / "Consulta psicológica"; sub: "Médico general 24/7" / "Con un psicólogo certificado".
1. Badge: "Incluida en tu plan · menos de 5 min" / "Ilimitada en tu plan".
2. **¿Para quién?** — select (Yo / familiares del plan). Va primero para que no quede bajo el teclado.
3. **Motivo** — textarea con label visible. Placeholder: médico "Ej.: dolor de cabeza y fiebre desde ayer"; psico "Ej.: me siento ansioso y no duermo bien". Borde 1 px `--border-strong`; en error 1.5 px `--danger`.
4. **Método** — control segmentado: Videollamada (`video-camera`) / Chat (`chat-text`). Segmento activo: fondo blanco + `--shadow-sm`.
5. Psico: aviso "Completa tu ficha médica" con enlace a Expediente/Ficha (legible, 13 px).
6. **CTA fijo abajo** (52 px, radio 16, navy): "Iniciar consulta médica" / "Iniciar consulta psicológica". Al enviar: spinner dentro del botón + "Preparando tu consulta…", opacidad 0.7, deshabilitado.
7. Enlace de **Urgencias** (`siren`) → bottom sheet urgencias.
- **Validación**: motivo vacío → "Cuéntanos brevemente qué sientes para asignarte al profesional adecuado." (ícono `warning-circle`, `--danger`). Se limpia al escribir.

### 4. Conectando (`conectando`)
- Ícono grande del método (`video-camera` / `chat-text`) con anillo pulsante (`pulse-soft`).
- "Buscando un {médico|psicólogo} disponible", tiempo estimado "menos de 5 min".
- Checklist: Cámara (`camera`), Micrófono (`microphone`), Conexión estable (`wifi-high`) con check verde.
- Botón secundario "Cancelar consulta" → bottom sheet de confirmación ("¿Cancelar la consulta?" — Sí, cancelar / Seguir esperando). Al confirmar: vuelve a Inicio + toast "Consulta cancelada".

### 5. Especialistas (`especialistas`)
- Búsqueda + chips horizontales scroll: Todos, Medicina interna, Ginecología, Dermatología, Pediatría, Cardiología, Fisioterapia, Odontología. Chip activo: fondo `--color-primary`, texto blanco; inactivo blanco + borde.
- Tarjeta de médico: avatar con iniciales, nombre 15/700, especialidad, lugar + distancia (`map-pin`), rating (`star`), precio "US$33.00" + tachado "US$40.00" + "Ahorras US$7.00" (mint). CTA "Ver horarios".
- Estado vacío por especialidad: "Aún no hay especialistas en {categoría}".

### 6. Agenda (`agenda`)
- Fila de 7 días (chip 56 px: día corto + número). Activo navy.
- Horarios agrupados **Mañana** / **Tarde** en grid de chips 44 px. Seleccionado: borde 2 px navy + fondo `--blue-50`.
- Domingo: estado vacío "No hay horarios este día".
- CTA fijo: deshabilitado "Elige un horario" (`--gray-200`), habilitado "Confirmar · mié 14 oct, 9:00 AM". → Éxito `cita`.

### 7. Farmacias (`farmacia`)
Búsqueda + lista: nombre, distancia, badge "Descuento". → Producto (ibuprofeno). Carrito en encabezado.

### 8. Producto (`producto`) — Easylab o farmacia
- Ícono grande (`flask`/`pill`/`package`) en tarjeta.
- Nombre, descripción, precio + tachado + "Ahorras X % con tu plan".
- Stepper `minus`/`plus` de 44 px (rango 1–10).
- **Un CTA principal** "Comprar ahora" (navy) + secundario "Agregar al carrito" (outline). Agregar → toast "Agregado al carrito".

### 9. Carrito (`carrito`)
Lista de ítems (ícono, nombre, cantidad, total), total, CTA "Pagar {total}". Vacío: `shopping-cart-simple` + "Tu carrito está vacío" + "Ir a Servicios". Pagar → Éxito `pedido`, vacía el carrito.

### 10. Servicios (`servicios`)
- Segmentado Todos / Favoritos.
- Lista de 9 servicios (ícono 40 px en cuadro, nombre, beneficio, corazón favorito 44 px): Farmacias, Easylab, Especialistas, Clínicas, Fisioterapia (`person-simple-walk`), Odontología (`tooth`), Wellness (`flower-lotus`), Medita (`wind`), Paquetes (`package`).
- Favorito activo: `heart` color `--danger`; inactivo `--subtle-foreground`. aria-label "Agregar a / Quitar de favoritos".
- Favoritos vacío: "Aún no tienes favoritos. Toca el corazón en un servicio."

### 11. Estado de ánimo (`animo`)
- Segmentado Hoy / Esta semana.
- 5 opciones con ícono + label: Feliz (`smiley`), Normal (`smiley-meh`), Estresado (`smiley-nervous`), Triste (`smiley-sad`), Enojado (`smiley-angry`). Seleccionado: borde 2 px navy + `--blue-50`.
- CTA "Guardar" (deshabilitado sin selección). Tras guardar, si es estresado/triste/enojado → tarjeta sugerencia "¿Quieres hablar con un psicólogo?" → form psico.
- Esta semana sin datos: estado vacío con `chart-line-up` + "Registra tu ánimo para ver tu semana" + botón a Hoy.

### 12. Expediente (`expediente`)
Segmentado de 4: **Ficha · Historial · Recetas · Resultados**.
- **Ficha**: filas ícono + clave + valor — Tipo de sangre (`drop`) O+, Alergias (`warning`) Penicilina, Condiciones (`heartbeat`), Medicamentos actuales (`pill`), Estatura y peso (`ruler`), Contacto de emergencia (`phone`). CTA "Actualizar ficha" → Éxito `ficha`.
- **Historial**: tarjetas por consulta con ícono por tipo (médico mint, psico serene), profesional, fecha. → Detalle.
- **Recetas**: medicamento + médico + fecha → Documento (receta).
- **Resultados**: examen + laboratorio + fecha → Documento (resultado).

### 13. Detalle de consulta (`detalle`)
Resumen (Fecha, Hora, Canal, Duración), diagnóstico/notas, receta con botón "Ver receta". Registro de tiempos **plegado** ("Ver/Ocultar registro de tiempos"). Un solo botón "Descargar resumen en PDF" (`download-simple`).

### 14. Documento (`pantalla/documento`)
Receta o resultado: encabezado con emisor, fila del ítem, nota, CTA "Descargar PDF" + secundario ("Pedir a domicilio" para receta, "Consultar con un médico" para resultado).

### 15. Órdenes (`ordenes`)
- Segmentado En curso / Completadas.
- Tarjeta: ícono por tipo (`pill`/`flask`), tipo, proveedor, fecha "18 ene 2025", badge estado (En curso = info `--blue-50`/`--navy-800`; Completada = `--mint-50`/`--mint-700`), "Ver factura" secundario. → Factura.
- **Estados**: cargando (3 skeletons), error (`cloud-slash` + "No pudimos cargar tus órdenes" + "Reintentar" `arrow-clockwise`), vacío (`tray` + "No tienes órdenes en curso" / "Aún no tienes órdenes completadas").

### 16. Factura (`pantalla/factura`)
Proveedor, tipo · fecha · N.º, líneas (producto, envío, descuento del plan), total pagado con tarjeta, CTA "Descargar factura en PDF" → toast.

### 17. Mensajes (`mensajes`) y Chat (`chat`)
- Lista: Soporte EasyMD (`lifebuoy`), Dr. Emanuel Flores (`stethoscope`), último mensaje, fecha.
- Chat: burbujas (mías navy, radio 18 18 6 18; recibidas blancas con borde, 18 18 18 6). Input + botón enviar `paper-plane-right` 44 px; Enter envía. Respuesta automática simulada a 1.2 s (reemplazar por realtime).

### 18. Mi cuenta (`cuenta`)
- Tarjeta de plan (Plan Plus, US$14.95/mes) + "Ver qué incluye".
- **Mi familia**: avatares (Nicolás, Ana, Mateo) + "Agregar" → form familiar.
- Ajustes: Favoritos, Datos personales, Métodos de pago, Direcciones, Preguntas frecuentes, Ayuda y soporte, Urgencias.
- "Cerrar sesión" (texto `--danger`) → bottom sheet confirmación → Login.

### 19. Formularios genéricos (`pantalla/*`)
Datos personales, Agregar tarjeta, Nueva dirección, Agregar familiar. Inputs 48 px, radio 12, label visible arriba (13/600), placeholder de ejemplo. CTA navy fijo → pantalla Éxito.

### 20. Wellness, Cupón, Medita, Paquetes, FAQ
- **Wellness**: lista de comercios con % de descuento → Cupón (código "EMD-XXXX" grande, mono, "Muestra este código al pagar").
- **Medita**: círculo de respiración 170 px (degradado radial `--mint-300` → `--serene-500`), animación `emdBreath` 8 s infinite (scale .75 → 1.05). Lista de ejercicios. CTA Empezar/Terminar.
- **Paquetes**: chequeos → Producto.
- **FAQ**: preguntas con respuesta + "Escribir a soporte".

### 21. Asistente EasyMD (`concierge`) — Muy pronto
Hero navy, lista de lo que hará (receta, resultados, agenda, recordatorios), switch "Avísame cuando esté listo" → toast.

### 22. Éxito (`exito`)
Check grande mint animado, título y cuerpo según tipo (cita, pedido, datos, tarjeta, dirección, familiar, ficha), CTA "Volver al inicio". Limpia el stack.

### 23. Login (`login`)
Tras cerrar sesión. Logo, teléfono, CTA "Entrar" → Inicio + toast "Sesión iniciada". Enlace "¿Eres nuevo? Crea tu cuenta" → Onboarding.

### 24. Onboarding (`onb`, `onbStep` 0–7)
Primera apertura de la app. En el prototipo: botón **Onboarding** sobre el teléfono o desde Login. Pasos 1–6 llevan encabezado con Regresar (44 px) + "Paso X de 6" (12/600 muted) + barra de progreso 6 px (fondo `--gray-200`, relleno degradado `--mint-400` → `--mint-600`, transición de ancho 400 ms).
0. **Bienvenida (carrusel de 3)** — logo 40 px + "Omitir". Panel ilustrado (min 300 px, radio 28) con degradado por slide y un ícono de 68 px dentro de un "vidrio" de 132 px con radio 40 (aquí entra la ilustración 3D si se adopta). Título 26/700, cuerpo 15 muted. Indicadores: punto 8 px, el activo pasa a 24 px de ancho (navy). CTA "Siguiente" → en el último slide "Crea tu cuenta". Secundario "Ya tengo cuenta" → Login.
   - Slide 1: `stethoscope` · "Un médico en menos de 5 minutos" · "Consulta por video o chat, las 24 horas, desde donde estés." · degradado navy.
   - Slide 2: `brain` · "Psicología ilimitada" · "Habla con un psicólogo certificado cuando lo necesites, sin límite de sesiones." · degradado serene.
   - Slide 3: `seal-check` · "Descuentos para ti y tu familia" · "Ahorra en farmacia, laboratorio y especialistas con tu plan." · degradado mint.
1. **Crea tu cuenta** — prefijo de país (+505) + teléfono. Ayuda: "Te enviaremos un código por SMS o WhatsApp." CTA "Enviar código". Error: menos de 8 dígitos → "Escribe un número de 8 dígitos."
2. **Escribe el código** — input OTP de 60 px, 28/700, `letter-spacing .4em`, `autocomplete="one-time-code"`, solo números (máx. 6). "Reenviar código" (toast). CTA "Verificar". Error → "El código tiene 6 dígitos. Revisa tu SMS o WhatsApp."
3. **Cuéntanos de ti** — Nombre completo (obligatorio), Fecha de nacimiento, Sexo (segmentado Femenino / Masculino / Otro), checkbox 24 px de Términos y Aviso de privacidad (obligatorio). CTA "Continuar".
4. **Activa tu plan** — dos tarjetas radio: "Mi empresa me dio EasyMD" (`buildings`) muestra campo "Código de tu empresa"; "Quiero contratar un plan" (`user-circle`) muestra tarjeta navy Plan Plus US$14.95/mes con 3 beneficios. CTA "Activar plan" / "Contratar Plan Plus".
5. **Tu ficha médica** — chips multiselección para Alergias y Condiciones (Ninguna, Penicilina, Aspirina, Mariscos, Otra / Ninguna, Diabetes, Hipertensión, Asma, Otra). "Ninguna" es excluyente. CTA "Guardar y continuar" + "Completar después".
6. **Prepara tu teléfono** — switches de Notificaciones (`bell-ringing`), Cámara y micrófono (`video-camera`) y Ubicación (`map-pin`), cada uno con su motivo. Al activarlo se dispara el permiso nativo del sistema. CTA "Continuar" + "Ahora no".
7. **Todo listo, {nombre}** — sello mint 104 px (animación de escala), "Tu plan está activo…". CTA principal "Pide tu primera consulta" → formulario médico; secundario "Ir al inicio".

Reglas: guardar el progreso por paso (si cierra la app, retoma donde quedó). Los pasos 5 y 6 son opcionales. Pedir permisos nativos solo después de que el usuario lea el motivo en la app.

### Overlays
- **Bottom sheets** (radio 28 arriba, handle 36×4, scrim navy 40 %, slide-up 300 ms ease-out): Beneficios del plan, Urgencias (llamar 911 / línea EasyMD, `phone`), Cancelar consulta, Cerrar sesión.
- **Toast**: navy, texto blanco 14/600, radio full, abajo sobre la tab bar, 2.2 s.

---

## Estados obligatorios por lista
Expediente, Órdenes, Mensajes, Especialistas, Servicios/Favoritos, Carrito:
- **Cargando**: skeleton (bloques `--gray-100` con shimmer), nunca spinner a pantalla completa.
- **Vacío**: ícono 40 px en círculo, título 15/700, explicación 13 muted, acción.
- **Error**: `cloud-slash`, "Algo salió mal de nuestro lado. Intenta de nuevo en un momento.", botón Reintentar.
- **Éxito**: pantalla Éxito o toast.

## Interacciones y motion
| Elemento | Efecto | Duración / easing |
|---|---|---|
| Entrada de pantalla | fadeInUp (translateY 8 → 0, opacity 0 → 1) | 300 ms `cubic-bezier(.16,1,.3,1)` |
| Tarjetas / botones (press) | `scale(0.97–0.98)` | 150 ms |
| Tab activa | `emdNav` scale .6 → 1 | 250 ms |
| Bottom sheet | slide-up + fade scrim | 300 ms |
| Spinner en botón | rotate 360° | 800 ms linear infinite |
| Respiración | scale .75 → 1.05 → .75 | 8 s ease-in-out infinite |
| Conectando | pulse-soft en anillo | 2 s infinite |
Respetar `prefers-reduced-motion` / "Reducir movimiento" del sistema: desactivar todo.

## Accesibilidad (WCAG 2.1 AA)
- Texto ≥ 4.5:1. **Nunca** texto blanco sobre menta (≈2:1). CTA principal = navy #0B1F3A.
- Objetivos táctiles ≥ 44 × 44 px.
- Todo input con label visible; errores con texto, no solo color.
- Botones de solo ícono con `aria-label` / `accessibilityLabel` ("Regresar", "Carrito", "Mensajes", "Agregar a favoritos").
- Foco visible: `0 0 0 3px rgba(14,165,233,.35)`.
- Tab bar: `aria-current="page"` en la activa.
- Soportar Dynamic Type / escala de fuente hasta 130 % sin cortes.

## Estado (state management)
Ver `data-models.ts`. Global: sesión/usuario, plan, familia, carrito, favoritos, chats. Por pantalla: formulario de consulta (`who`, `motivo`, `metodo`, `kind`, `submitting`, `error`), agenda (`dayIdx`, `slot`), ánimo (`mood`, `moodSaved`), tabs segmentados (`expTab`, `ordTab`, `srvTab`, `moodTab`), overlays (`sheet`, `toast`).
Recomendado: React Query/TanStack para datos remotos + Zustand para carrito/favoritos/sesión.

## Tokens
Ver `tokens.json` / `tokens.css`. Resumen:
- **Colores**: navy-900 #0B1F3A (primario), navy-deep #003970 (logo/degradados), navy-800 #112843 (íconos), mint-400 #4FD1A1 (marca), mint-600 #1F9A72 / mint-700 #197A5B (texto éxito), serene-600 #5F68B0 (psicología), cta-blue #0EA5E9 (enlaces/foco), app-bg #F1F4F7, border #E2E1D9, border-strong #CDCCC2, muted #76756B, subtle #A6A59A, warning #F59E0B, danger #E0533D.
- **Tipografía**: Plus Jakarta Sans 600/700 (títulos, tracking −0.02em), Inter 400/500/600 (cuerpo, line-height 1.5–1.6). Escala app: 28 / 22 / 18 / 16 / 15 / 14 / 13 / 12 / 11.
- **Espaciado**: grid de 4 px (4, 8, 12, 16, 20, 24, 32, 40, 48).
- **Radios**: 8, 12 (inputs), 14 (búsqueda), 16 (botones), 18–20 (filas/tiles), 24 (tarjetas hero), 28 (sheets), full (pills/avatares).
- **Sombras**: xs → xl navy-tintadas (ver tokens). Superficies en reposo `sm`.

## Íconos
Ver `icons.md`. Sistema: **Phosphor Icons v2.1.1, estilo Duotone** (moderno, dos tonos). Opcional 3D solo para ilustraciones (vacíos, éxito, onboarding).

## Assets
- Logo: `assets/easymd-logo.png`, ícono app `assets/easymd-icon.png` (en el design system).
- Avatares: iniciales sobre color; reemplazar con fotos reales del backend.
- Fuentes: Google Fonts (Plus Jakarta Sans, Inter) — empaquetar en la app.

## Pendientes para producto
1. Revisar descripciones clínicas de exámenes (p. ej. CA 19-9) con el equipo médico.
2. Confirmar precios, planes y cuántos familiares incluye cada plan.
3. Definir número de urgencias por país.
4. Proveedor de videollamada (Twilio, Agora, Daily) y chat realtime.
5. Pasarela de pago (tarjetas guardadas tokenizadas).
