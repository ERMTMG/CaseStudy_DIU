# Usability Report

![usability](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU)

### Evaluación de usabilidad del proyecto: Goiko Mejorado (Caso B)

31 de mayo de 2026

[Enlace al repositorio GitHub del Caso B](https://github.com/ClaudioDevv/UX_CaseStudy)

### Realizado por:

Informe realizado por Los Cocineros. Somos estudiantes de Diseño de Interfaces de Usuario (UGR), con experiencia en pruebas de usabilidad adquirida durante el desarrollo de esta misma práctica.

---

## 1. Resumen Ejecutivo (Executive Summary)

- **Objetivo:** Evaluar la usabilidad del prototipo Goiko Mejorado (Diseño B) mediante A/B Testing, cuestionario SUS y Eye Tracking, comparándolo con el Diseño A propio, para identificar puntos de mejora.
- **Metodología:** Estudio mixto entre-sujetos con 8 participantes (5 evaluaciones por diseño). Dos participantes evaluaron ambos diseños en orden contrabalanceado. Pruebas de Eye Tracking y registro de clicks con GazeMapping, cuestionario SUS vía Tally.so y análisis de accesibilidad con Lighthouse y WAVE.
- **Principales hallazgos:**
  1. El Diseño B obtiene una puntuación SUS media de **82.0** ("Bueno"), inferior al Diseño A (86.5, "Excelente").
  2. Los participantes de mayor edad mostraron puntuaciones notablemente más bajas en el Diseño B (67.5), sugiriendo mayor dificultad percibida.
  3. El Eye Tracking y los clicks revelan patrones de exploración muy dispares: algunos usuarios solo interactuaron con la zona superior, mientras otros exploraron hasta el final de la página.
- **Resultado Global:** SUS medio B = **82.0** → Calificación **"Bueno"** (por encima del umbral aceptable de 68).

---

## 2. Metodología y Reclutamiento

**Perfil de los participantes:**

| ID | Edad | Sexo | Competencia digital | Orden evaluación | Procedencia |
|----|------|------|---------------------|------------------|-------------|
| P01 | 29 | F | Alta | B → A | Equipo A |
| P02 | 60 | M | Media | A → B | Equipo A |
| P03 | 60 | F | Media | Solo A | Equipo A |
| P04 | 27 | M | Alta | Solo A | Equipo B |
| P05 | 44 | F | Media | Solo A | Equipo B |
| P06 | 30 | M | Media | Solo B | Equipo B |
| P07 | 43 | M | Media | Solo B | Equipo B |
| P08 | 37 | F | Alta | Solo B | Equipo B |

- Edad media: ~41 años. Rango: 27–60.
- Distribución de género: 4 hombres, 4 mujeres.
- Evaluaciones Caso A: P01, P02, P03, P04, P05 (n=5)
- Evaluaciones Caso B: P01, P02, P06, P07, P08 (n=5)
- Contrabalanceo aplicado en usuarios within-subjects: P01 (B→A), P02 (A→B).

**Escenario de la prueba:** Los usuarios interactuaron con el sitio durante 5-10 minutos, con la tarea de explorar la web y localizar elementos clave (menú, reserva, información de productos). Prueba supervisada con registro de Eye Tracking y clicks mediante GazeMapping.

**Herramientas:** GazeMapping (eye tracking + clicks), Tally.so (cuestionario SUS y datos demográficos), Lighthouse y WAVE (accesibilidad).

---

## 3. Resultados del Cuestionario SUS (Datos Cuantitativos)

### Puntuaciones individuales

| Participante | Diseño A | Diseño B |
|--------------|----------|----------|
| P01 | 85.0 | 67.5 |
| P02 | 72.5 | 67.5 |
| P03 | 87.5 | — |
| P04 | 92.5 | — |
| P05 | 95.0 | — |
| P06 | — | 90.0 |
| P07 | — | 92.5 |
| P08 | — | 92.5 |
| **Media** | **86.5** | **82.0** |

### Comparativa A vs. B

```
Diseño A: ████████████████████████████████████ 86.5
Diseño B: ██████████████████████████████████   82.0
          0        25        50        75       100
```

### Interpretación

- Ambos diseños superan el umbral de usabilidad aceptable (68).
- Diseño A → **"Excelente"** (>85)
- Diseño B → **"Bueno"** (70–85)
- Los ítems con peor puntuación en el Diseño B corresponden a facilidad de uso y confianza en el manejo, especialmente en P01 y P02 (usuarios within-subjects, mayores), lo que sugiere mayor curva de aprendizaje respecto al Diseño A.

---

## 4. Análisis de Eye Tracking y Clicks (Datos Biométricos)

### Sesiones registradas

| Sesión | Participante | Diseño | Clicks | Zona alta (<600px) | Zona media (600-1500px) | Zona baja (>1500px) |
|--------|-------------|--------|--------|-------------------|------------------------|---------------------|
| gaze/clics-1 | P06 | B | 4 | 2 | 2 | 0 |
| gaze/clics-2 | P07 | B | 9 | 1 | 2 | 6 |
| gaze/clics-3 | P08 | B | 7 | 6 | 1 | 0 |
| gaze/clics-4 | P01 | B | 3 | 2 | 1 | 0 |
| gaze/clics-5 | P02 | A | 19 | 2 | 8 | 9 |
| gaze/clics-6 | P03 | A | 8 | 5 | 3 | 0 |

### Hallazgos principales

- **Exploración muy variable en Diseño B:** P07 llegó hasta y=4285px (fondo de página) con 6 clicks en zona baja, mientras P06, P08 y P01 apenas superaron y=1220px. Indica que la estructura no guía de forma uniforme al usuario hacia el contenido inferior.
- **Zona de mayor interacción:** La franja superior (y<600px) concentra la mayoría de clicks en casi todas las sesiones, coincidiendo con los datos de gaze. Cabecera y navegación son los elementos más explorados.
- **Diseño A más explorado:** P02 generó 19 clicks llegando hasta y=4531px, la mayor exploración registrada. El Diseño A parece incentivar más el scroll que el B.
- **Zona de silencio en B:** Las secciones intermedias (y=600–1500px) reciben pocos clicks en B (P06: 2, P08: 1, P01: 1), sugiriendo que el contenido de esa franja no atrae la atención o no es claramente interactivo.
- **Hallazgo clave:** El CTA o elemento principal debería estar posicionado en y<600px para garantizar que todos los perfiles de usuario lo alcancen, independientemente de su nivel de exploración.

> Nota: Dos sesiones de gaze (gaze-5, gaze-6) presentaron coordenadas anómalas (valores extremos fuera del rango de pantalla), probablemente por pérdida de calibración. Los datos de clicks de esas sesiones son válidos y se han incluido en el análisis.

---

## 5. Auditoría de Accesibilidad

*(Ver informe completo: Accessibility-Report-CasoB.md)*

- **Lighthouse Accessibility Score:** 87 / 100
- **WAVE AIM Score:** 10 / 10 — 0 errores críticos, 2 alertas

**Principales barreras identificadas:**

| Prioridad | Error | Impacto |
|-----------|-------|---------|
| Crítica | Botones sin nombre accesible | Lectores de pantalla no pueden identificar acciones |
| Alta | Contraste insuficiente texto/fondo | Usuarios con baja visión no leen el contenido |
| Alta | Sin landmarks/regiones de página | Navegación por teclado ineficiente |
| Media | Sin estructura de encabezados | Sin jerarquía navegable para lectores de pantalla |

---

## 6. Conclusiones y Recomendaciones (Actionable Insights)

| **Prioridad** | **Hallazgo** | **Recomendación de mejora** |
|---------------|--------------|------------------------------|
| **Alta (Crítica)** | Botones sin nombre accesible (Lighthouse) | Añadir `aria-label` descriptivo a todos los botones sin texto visible |
| **Alta** | SUS bajo en usuarios mayores (67.5) | Simplificar la navegación y aumentar tamaño de fuentes |
| **Alta** | Contraste insuficiente (WCAG 1.4.3) | Ajustar colores a ratio mínimo 4.5:1 |
| **Alta** | Zona media del Diseño B ignorada en clicks | Revisar el contenido de y=600–1500px y añadir elementos interactivos visibles |
| **Media** | Exploración muy variable entre usuarios en B | Reubicar CTAs clave en la franja superior (above the fold, y<600px) |
| **Media** | Sin landmarks ni estructura de encabezados | Implementar `<main>`, `<nav>`, `<h1>`–`<h6>` |
| **Baja** | Exploración limitada en usuarios con menor competencia digital | Añadir indicadores visuales de scroll |