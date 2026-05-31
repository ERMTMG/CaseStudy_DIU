# Accessibility Report – Caso B: Goiko Mejorado

![WCAG](https://img.uxcel.com/cdn-cgi/image/format=auto/practices/wcag-principles-overview-1742315821212/a-1742315821212-2x.jpg)

---

## 1. Ficha Técnica del Informe

- **Nombre del proyecto:** Diseño B – Goiko Mejorado (https://goikomejorado.surge.sh/)
- **Normativa de referencia:** WCAG 2.1, Nivel AA (UNE-EN 301549)
- **Herramientas utilizadas:** Lighthouse (Google Chrome DevTools), WAVE (WebAIM)
- **Fecha de la auditoría:** 31 de mayo de 2026

---

## 2. Puntuaciones Globales (Métricas Automáticas)

| Herramienta | Resultado |
|-------------|-----------|
| **Lighthouse Accessibility Score** | 87 / 100 |
| **WAVE – Errores críticos** | 0 |
| **WAVE – Errores de contraste** | 0 |
| **WAVE – Alertas** | 2 |
| **WAVE – AIM Score** | 10 / 10 |

El sitio no presenta errores críticos según WAVE, pero Lighthouse detecta problemas reales que afectan a usuarios con tecnologías de asistencia.

---

## 3. Análisis por Principios (POUR)

### A. Perceptible

- **Hallazgo:** Contraste insuficiente entre colores de texto y fondo en algunos elementos de la interfaz.
- **Criterio WCAG incumplido:** 1.4.3 – Contraste mínimo (Nivel AA).
- **Impacto:** Usuarios con baja visión o daltonismo no pueden leer correctamente el contenido afectado.
- **Solución:** Revisar y ajustar los pares de color para garantizar una relación de contraste mínima de 4.5:1 (texto normal) y 3:1 (texto grande). Usar herramientas como el Colour Contrast Analyser para verificar.

---

### B. Operable

- **Hallazgo (WAVE):** No se definen regiones de página (*No page regions*). Ausencia de landmarks HTML5 semánticos.
- **Criterio WCAG relacionado:** 2.4.1 – Evitar bloques (Nivel A).
- **Impacto:** Usuarios que navegan con teclado o lector de pantalla no pueden saltar directamente al contenido principal, obligándolos a recorrer toda la página en cada carga.
- **Solución:** Añadir landmarks semánticos: `<main>`, `<nav>`, `<header>`, `<footer>`, o equivalentes ARIA (`role="main"`, `role="navigation"`, etc.).

---

### C. Comprensible

- **Hallazgo positivo:** WAVE confirma que el idioma de la página está correctamente declarado (atributo `lang` presente).
- **Estado:** Conforme con el criterio 3.1.1 – Idioma de la página (Nivel A). ✓
- **Observación:** No se detectan errores en etiquetado de formularios ni mensajes de error incorrectos.

---

### D. Robusto

- **Hallazgo (Lighthouse):** Botones sin nombre accesible (*Buttons do not have an accessible name*).
- **Criterio WCAG incumplido:** 4.1.2 – Nombre, función, valor (Nivel A).
- **Impacto:** Los lectores de pantalla no pueden identificar ni anunciar la función de estos botones, haciendo la interfaz inutilizable para usuarios con discapacidad visual.
- **Solución:** Añadir `aria-label` descriptivo o texto visible a todos los botones sin nombre. Ejemplo: `<button aria-label="Reservar mesa">`.

- **Hallazgo adicional (WAVE):** Ausencia de estructura de encabezados (*No heading structure*).
- **Criterio WCAG relacionado:** 1.3.1 – Información y relaciones (Nivel A).
- **Impacto:** Sin jerarquía de encabezados, los lectores de pantalla no pueden navegar por secciones ni entender la estructura del contenido.
- **Solución:** Estructurar el contenido con `<h1>`–`<h6>` en orden jerárquico lógico.

---

## 4. Tabla de Hallazgos y Prioridades

| **ID** | **Prioridad** | **Criterio WCAG** | **Error detectado** | **Recomendación técnica** |
|--------|---------------|-------------------|---------------------|---------------------------|
| **ACC-01** | **Crítica** | 4.1.2 – Nombre, función, valor | Botones sin nombre accesible | Añadir `aria-label` o texto visible a cada botón |
| **ACC-02** | **Alta** | 1.4.3 – Contraste mínimo | Contraste insuficiente texto/fondo | Ajustar colores a ratio mínimo 4.5:1 |
| **ACC-03** | **Alta** | 2.4.1 – Evitar bloques | Sin regiones/landmarks de página | Implementar `<main>`, `<nav>`, `<header>`, `<footer>` |
| **ACC-04** | **Media** | 1.3.1 – Información y relaciones | Sin estructura de encabezados | Añadir jerarquía `<h1>`–`<h6>` |

---

## 5. Conclusiones y Declaración de Conformidad

El sitio obtiene puntuaciones aceptables en las herramientas automáticas (87/100 Lighthouse, 10/10 WAVE), lo que indica una base de accesibilidad razonable. Sin embargo, **no cumple plenamente el nivel AA de WCAG 2.1** debido a barreras concretas que afectan directamente a usuarios de tecnologías de asistencia.

**Próximos pasos prioritarios:**
1. Añadir `aria-label` a todos los botones sin texto visible (ACC-01, impacto crítico).
2. Revisar y corregir los pares de color con contraste insuficiente (ACC-02).
3. Implementar landmarks HTML5 semánticos para facilitar la navegación por teclado (ACC-03).
