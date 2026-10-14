# Íconos — EasyMD App

## Sistema principal: Phosphor Icons Duotone (moderno)
- Librería: **Phosphor Icons v2.1.1**, peso **Duotone** (trazo + relleno al 20 % del mismo color). https://phosphoricons.com
- Paquetes: `phosphor-react-native` (RN), `@phosphor-icons/react` (web), `phosphor_flutter` (Flutter), o exportar SVG para iOS/Android nativo.
- Uso: `<Stethoscope weight="duotone" size={22} color="#112843" />`
- Licencia MIT.
- Nota para diseño: el design system documenta Lucide; el rediseño usa Phosphor Duotone porque da el look "moderno con volumen" pedido sin mezclar estilos 3D. Mantener **un solo estilo** en toda la UI.

### Tamaños
| Contexto | Tamaño | Contenedor |
|---|---|---|
| Tab bar | 24 | pastilla 56×32 |
| Botón circular encabezado | 20 | círculo 44 |
| Hero de consulta | 26 | cuadro 48, radio 16 |
| Tile de servicio / fila | 20–22 | cuadro 40, radio 12 |
| Inline en texto / chevron | 14–18 | — |
| Estado vacío / error | 32–40 | círculo 72 |
| Éxito | 48 | círculo 96 |

### Colores
- Default: `navy-800` #112843
- Secundario / chevron: `muted` #76756B o `subtle` #A6A59A
- Médico / éxito: `mint-600` #1F9A72 sobre `mint-50`
- Psicología: `serene-600` #5F68B0 sobre `serene-50`
- Sobre navy: `mint-300` #77E0BB o blanco
- Error: `danger` #E0533D · Advertencia: `warning-700` #92560A

## Inventario completo
| Ícono (Phosphor) | Dónde se usa |
|---|---|
| `house` | Tab Inicio · Dirección "Casa" |
| `stethoscope` | Tab Consultas · Consulta médica · Historial médico · chat médico · beneficio |
| `squares-four` | Tab Servicios |
| `clipboard-text` | Tab Expediente |
| `receipt` | Tab Órdenes · Factura |
| `chat-circle-dots` | Botón Mensajes (encabezado) |
| `shopping-cart-simple` | Botón Carrito · carrito vacío |
| `magnifying-glass` | Búsquedas |
| `arrow-left` | Regresar |
| `arrow-right` / `arrow-up-right` | CTA "Empezar" / enlaces |
| `caret-right` | Filas navegables |
| `brain` | Consulta psicológica · Historial psico · beneficio |
| `smiley` `smiley-meh` `smiley-nervous` `smiley-sad` `smiley-angry` | Estado de ánimo |
| `sparkle` | Asistente EasyMD · "Nuevo" |
| `seal-check` | Qué incluye tu plan · descuento del plan |
| `file-text` | Última consulta · documento |
| `first-aid` | Especialistas |
| `hospital` | Clínicas |
| `pill` | Farmacias · medicamentos · recetas · órdenes |
| `flask` | Easylab · resultados · órdenes de laboratorio |
| `package` | Paquetes de chequeo |
| `person-simple-walk` | Fisioterapia |
| `tooth` | Odontología |
| `flower-lotus` | Wellness |
| `wind` | Medita / ejercicios |
| `storefront` | Comercios Wellness |
| `ticket` | Cupón |
| `scan` | Imagen (beneficio) |
| `heart` | Favoritos |
| `map-pin` | Distancia · Direcciones |
| `star` | Rating |
| `calendar-check` | Cita agendada · asistente |
| `calendar-blank` | Sin citas |
| `clock` | Horarios · tiempos |
| `video-camera` | Método videollamada |
| `chat-text` | Método chat |
| `camera` `microphone` `wifi-high` | Checklist Conectando |
| `warning-circle` | Error de campo |
| `warning` | Alergias · avisos |
| `info` | Avisos informativos |
| `check` / `check-circle` | Confirmaciones · checklist |
| `siren` | Urgencias |
| `phone` | Llamar · contacto de emergencia |
| `drop` | Tipo de sangre |
| `heartbeat` | Condiciones |
| `ruler` | Estatura y peso |
| `lock-simple` | Pago seguro |
| `credit-card` | Métodos de pago |
| `briefcase` | Dirección "Trabajo" |
| `truck` | Envío |
| `user` | Datos personales |
| `question` | Preguntas frecuentes |
| `lifebuoy` | Ayuda y soporte |
| `bell` / `bell-ringing` | Recordatorios · avísame |
| `minus` / `plus` | Stepper · agregar |
| `download-simple` | Descargar PDF |
| `paper-plane-right` | Enviar mensaje |
| `chart-line-up` | Ánimo semanal |
| `cloud-slash` | Error de carga |
| `arrow-clockwise` | Reintentar |
| `tray` | Lista vacía |
| `device-mobile` / `device-tablet` | Solo en el prototipo |

## Opcional: íconos 3D (ilustraciones)
El 3D funciona bien como **ilustración grande**, no como ícono de UI: a 20–24 px se pierde el detalle y la auditoría detectó que la app actual mezclaba estilos 3D distintos. Regla: **3D solo en estos lugares**, de **una sola familia**, a 96–160 px:

| Lugar | Concepto sugerido |
|---|---|
| Onboarding (3–4 pantallas) | médico/estetoscopio, cerebro/corazón, píldora, calendario |
| Hero de Consulta médica / psicológica (opcional, 72 px a la derecha) | estetoscopio · cerebro |
| Estados vacíos (carrito, órdenes, favoritos, mensajes) | carrito, caja, corazón, burbuja de chat |
| Éxito (cita, pedido) | check, calendario, caja |
| Asistente EasyMD | destello / chispa |

Fuentes recomendadas (una sola):
- **3dicons** (https://3dicons.co) — open source, CC0, incluye variantes de color; recolorear a navy/mint/serene.
- **Microsoft Fluent UI 3D** (repositorio fluentui-emoji, estilo 3D) — MIT; evitar las caras/emoji en flujos clínicos.
- Encargo a ilustrador con la paleta EasyMD (ideal a mediano plazo para consistencia de marca).

Entregar en PNG @1x/@2x/@3x o WebP con fondo transparente; nombrarlos `3d-{concepto}.png`.
