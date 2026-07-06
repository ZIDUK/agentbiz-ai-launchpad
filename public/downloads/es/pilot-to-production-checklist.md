# Checklist de piloto a producción

Use este checklist antes de aprobar su próxima iniciativa de IA para despliegue en producción.

## Gobernanza

- [ ] Límites de datos y proveedores de modelos aprobados definidos
- [ ] Acceso por roles y flujos de aprobación documentados
- [ ] Logging de auditoría para acciones de agentes y overrides humanos
- [ ] Revisión legal/cumplimiento completada para manejo de datos

## Arquitectura

- [ ] Puntos de integración mapeados a sistemas de registro
- [ ] Rutas de escalamiento human-in-the-loop definidas
- [ ] Manejo de errores y comportamiento de fallback especificado
- [ ] Monitoreo y alertas para costo, latencia y calidad

## Operaciones

- [ ] KPIs base medidos antes del lanzamiento (tiempo de ciclo, error, costo)
- [ ] Dueños de operaciones asignados y capacitados
- [ ] Runbook para excepciones y actualizaciones de modelos
- [ ] Plan de operación en paralelo durante la transición

## Preparación para escala

- [ ] Componentes reutilizables identificados para flujos adyacentes
- [ ] Plan de transferencia de conocimiento para equipos internos
- [ ] Hoja de ruta de expansión a 90 días con sponsor ejecutivo alineado
