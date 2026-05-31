## Practica 5: Exportación + Documentación - entregables 


# Práctica 5: Evaluación de Usabilidad y Accesibilidad – A/B Testing

**Grupo:** DIU2_Cocineros  
**Curso:** 2025/26  
**Proyecto A (propio):** La Qarmita – [https://sphere-fresco-52121333.figma.site](https://sphere-fresco-52121333.figma.site)  
**Proyecto B (evaluado):** Goiko Mejorado – [https://goikomejorado.surge.sh](https://goikomejorado.surge.sh)  
**Repositorio Caso B:** [https://github.com/ClaudioDevv/UX_CaseStudy](https://github.com/ClaudioDevv/UX_CaseStudy)

---

## Resumen

En esta práctica hemos evaluado dos prototipos web mediante técnicas de UX Research: A/B Testing, cuestionario SUS, Eye Tracking con GazeMapping y auditoría de accesibilidad con Lighthouse y WAVE. El informe de usabilidad se centra en el **Caso B (Goiko Mejorado)**.

Se han reclutado **8 participantes** en total (5 evaluaciones por diseño), combinando usuarios propios y del equipo B en un modelo mixto entre-sujetos/intra-sujetos con contrabalanceo.

**Resultados SUS:**
- Diseño A (La Qarmita): **86.5** → "Excelente"
- Diseño B (Goiko Mejorado): **82.0** → "Bueno"

---

## Entregables

### 1. Reclutamiento de usuarios + propuesta A/B

Tabla demográfica de participantes incluida en el Usability Report (sección 2). Se han recogido datos de edad, sexo, competencia digital, orden de evaluación y procedencia. La recogida de datos se realizó mediante Tally.so.

Fichero de datos de usuarios: [`users.json`](users.json)

### 2. Resultados del Eye Tracking

Eye Tracking realizado con **GazeMapping** sobre las páginas principales de ambos diseños. Se han registrado 6 sesiones (3 del equipo B sobre Diseño B, 3 propias sobre ambos diseños).

Ficheros de datos:
- Miradas: [`gaze-1.json`](gaze-1.json) · [`gaze-2.json`](gaze-2.json) · [`gaze-3.json`](gaze-3.json) · [`gaze-4.json`](gaze-4.json) · [`gaze-5.json`](gaze-5.json) · [`gaze-6.json`](gaze-6.json)
- Clicks: [`clics-1.json`](clics-1.json) · [`clics-2.json`](clics-2.json) · [`clics-3.json`](clics-3.json) · [`clics-4.json`](clics-4.json) · [`clics-5.json`](clics-5.json) · [`clics-6.json`](clics-6.json)

**Principales hallazgos:**
- La franja superior (y<600px) concentra la mayor parte de la atención y los clicks en ambos diseños.
- La zona media de Diseño B (y=600–1500px) recibe muy poca interacción, sugiriendo contenido poco visible o no interactivo.
- La exploración es muy variable entre usuarios: algunos llegan al fondo de la página, otros apenas pasan del primer scroll.

### 3. Cuestionario SUS y Análisis

Cuestionario SUS administrado vía **Tally.so** al finalizar cada sesión. Análisis multivariable realizado con **sus.mixality.de**.

Fichero de respuestas: [`Escala_SUS_Submissions.csv`](Escala_SUS__Test_de_Usabilidad__Submissions_2026-05-31.csv)

| Participante | SUS Diseño A | SUS Diseño B |
|--------------|-------------|-------------|
| P01 (29F) | 85.0 | 67.5 |
| P02 (60M) | 72.5 | 67.5 |
| P03 (60F) | 87.5 | — |
| P04 (27M) | 92.5 | — |
| P05 (44F) | 95.0 | — |
| P06 (30M) | — | 90.0 |
| P07 (43M) | — | 92.5 |
| P08 (37F) | — | 92.5 |
| **Media** | **86.5** | **82.0** |

### 4. Usability Report + Conclusiones SUS

Informe de usabilidad centrado en el **Caso B**, siguiendo la plantilla proporcionada.

📄 [`P4_UsabReport_GoikoMejorado_doneby_DIU2_Cocineros.md`](P4_UsabilityReport_Cocineros.md)

### 5. Evaluación de Accesibilidad

Auditoría de accesibilidad del Caso B con Lighthouse (87/100) y WAVE (AIM Score 10/10). Análisis basado en los 4 principios WCAG 2.1 (POUR).

📄 [`Accessibility-Report-CasoB.md`](P4_AccessibilityReport_Cocineros.md)

---

## Conclusiones

El Diseño B (Goiko Mejorado) obtiene una valoración **"Buena"** de usabilidad (SUS=82.0), por encima del umbral aceptable pero inferior a nuestro Diseño A (86.5). Los principales puntos de mejora identificados son:

1. **Accesibilidad:** botones sin nombre accesible y contraste insuficiente (crítico para usuarios con discapacidad visual).
2. **Usabilidad para usuarios mayores:** puntuaciones SUS de 67.5 indican dificultad percibida en este perfil.
3. **Jerarquía visual:** el contenido de la zona media no atrae la interacción; los CTAs deberían estar en la franja superior.
4. **Estructura semántica:** ausencia de landmarks y encabezados dificulta la navegación asistida.

El proceso ha sido valioso para comprender de primera mano cómo se aplican técnicas de UX Research en un contexto real, combinando datos cuantitativos (SUS), biométricos (Eye Tracking) y técnicos (accesibilidad).