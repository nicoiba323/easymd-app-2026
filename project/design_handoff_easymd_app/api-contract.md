# Contrato de API — lo que la app necesita

Propuesta REST (adaptar a GraphQL si aplica). Auth: Bearer JWT. Tipos en `data-models.ts`. Errores: `{ code, message }` — la app **nunca** muestra `message` técnico; usa los textos de `copy.json`.

## Sesión y cuenta
| Método | Ruta | Uso |
|---|---|---|
| POST | `/auth/login` · `/auth/otp` | Login (teléfono + OTP recomendado) |
| POST | `/auth/logout` | Cerrar sesión |
| GET | `/me` | `User` + `Plan` (encabezado Inicio, Mi cuenta) |
| PATCH | `/me` | Datos personales |
| GET/POST | `/me/family` | Lista / agregar `FamilyMember` (validar `maxFamilyMembers`) |
| GET/POST/DELETE | `/me/payment-methods` | Tarjetas tokenizadas (nunca enviar PAN al backend propio) |
| GET/POST | `/me/addresses` | Direcciones |
| GET/PUT | `/me/favorites` | IDs de servicios favoritos |

## Consultas
| Método | Ruta | Uso |
|---|---|---|
| POST | `/consultations` | Body `ConsultRequest` → `Consultation` con `estimatedWaitMin` |
| GET | `/consultations/:id` | Polling o WebSocket de estado (`en_espera` → `conectando` → `en_curso`) |
| POST | `/consultations/:id/cancel` | Cancelar desde Conectando |
| GET | `/consultations?status=finalizada` | Historial (Expediente) |
| GET | `/consultations/:id/summary.pdf` | Descargar resumen |
| WS | `/realtime` | Estado de consulta, mensajes, sala de video (token del proveedor) |

## Especialistas y agenda
| GET | `/professionals?category=&q=&lat=&lng=` | Lista con precio y descuento |
| GET | `/professionals/:id/availability?from=&days=7` | `AvailabilityDay[]` |
| POST | `/appointments` | `{ professionalId, start }` → `Appointment` |
| GET | `/appointments?upcoming=true` | Próxima cita (Consultas) |

## Expediente
| GET/PUT | `/me/medical-profile` | Ficha |
| GET | `/me/prescriptions` | Recetas (+ `pdfUrl`) |
| GET | `/me/lab-results` | Resultados (+ `pdfUrl`) |

## Comercio
| GET | `/services` | Catálogo de 9 servicios |
| GET | `/pharmacies?q=&lat=&lng=` | Farmacias |
| GET | `/products?type=&providerId=` · `/products/:id` | Productos / exámenes / paquetes |
| POST | `/orders` | `{ items: CartItem[], addressId?, paymentMethodId }` → `Order` |
| GET | `/orders?status=` | Órdenes En curso / Completadas |
| GET | `/invoices/:id` · `/invoices/:id.pdf` | Factura |
| GET | `/wellness/partners` · POST `/wellness/coupons` | Comercios y código de cupón |

## Bienestar y mensajes
| GET/POST | `/me/moods?from=&to=` | Registro de ánimo (1 por día) |
| GET | `/conversations` | Lista de mensajes |
| GET/POST | `/conversations/:id/messages` | Chat (realtime por WS) |
| POST | `/concierge/waitlist` | "Avísame cuando esté listo" |

## Notificaciones push
Consulta lista, médico conectado, receta disponible, resultado listo, pedido en camino/entregado, recordatorio de cita (24 h y 1 h antes), recordatorio de ánimo diario (opcional).

## Analítica (eventos mínimos)
`consult_start{kind}`, `consult_submit{kind,method}`, `consult_connected`, `consult_cancel`, `appointment_confirm`, `add_to_cart{productId}`, `checkout_success{total}`, `mood_saved{mood}`, `mood_suggest_psico_tap`, `pdf_download{type}`, `favorite_toggle{serviceId}`, `concierge_notify`.
