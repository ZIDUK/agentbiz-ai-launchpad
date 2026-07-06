import { Cpu, Layers, LineChart, Shield, Zap } from "lucide-react";

export type { IndustryDetail } from "@/data/industries-content";

import type { IndustryDetail } from "@/data/industries-content";

export const industryDetailsEs: IndustryDetail[] = [
  {
    slug: "fintech",
    name: "FinTech y servicios financieros",
    icon: LineChart,
    headline: "Operaciones nativas en IA para entornos financieros regulados",
    description:
      "Ayudamos a organizaciones de servicios financieros a automatizar flujos intensivos en documentos, acelerar procesos de cumplimiento y desplegar agentes de IA gobernados dentro de marcos de riesgo y auditoría existentes.",
    challenges: [
      "Revisión manual de paquetes de crédito, documentos KYC y reportes de cumplimiento",
      "Datos desconectados entre core bancario, CRM y sistemas de riesgo",
      "Presión por reducir costos operativos sin aumentar exposición de auditoría",
      "Pilotos de IA que nunca llegan a producción por brechas de gobernanza",
    ],
    useCases: [
      {
        title: "Inteligencia documental para suscripción",
        description:
          "Extraiga, clasifique y enrute documentos financieros con gates de aprobación humana para excepciones.",
      },
      {
        title: "Flujos de detección de fraude y anomalías",
        description:
          "Triage asistido por agentes de alertas con recomendaciones explicables para analistas.",
      },
      {
        title: "Automatización de reportes regulatorios",
        description:
          "Recolección estructurada de datos de múltiples sistemas con logs listos para auditoría.",
      },
    ],
    metrics: [
      { label: "Reducción de tiempo de ciclo", value: "35–50%" },
      { label: "Carga de revisión manual", value: "↓ 40%" },
      { label: "Trazabilidad de auditoría", value: "100%" },
    ],
    services: [
      "Detección de fraude y análisis de riesgo",
      "Automatización financiera impulsada por IA",
      "Orquestación de flujos de cumplimiento",
    ],
  },
  {
    slug: "healthcare",
    name: "Salud y MedTech",
    icon: Shield,
    headline: "IA gobernada para operaciones clínicas y administrativas",
    description:
      "Desde autorización previa hasta documentación de reclamos, construimos flujos de IA compatibles con HIPAA que reducen la carga administrativa manteniendo a clínicos y equipos de cumplimiento en control.",
    challenges: [
      "Alto volumen de papeleo de intake y autorización",
      "Equipos clínicos y administrativos en sistemas desconectados",
      "Requisitos estrictos de privacidad, consentimiento y auditoría",
      "Experimentos de IA que se detienen en revisión de cumplimiento",
    ],
    useCases: [
      {
        title: "Soporte de autorización previa",
        description:
          "Los agentes recopilan documentación requerida, señalan datos faltantes y enrutan casos para revisión clínica.",
      },
      {
        title: "Asistencia en reclamos y codificación",
        description:
          "Extracción estructurada de notas clínicas con escalamiento de excepciones a codificadores humanos.",
      },
      {
        title: "Orquestación de intake de pacientes",
        description:
          "Flujos de intake automatizados integrados con agendamiento EHR y sistemas CRM.",
      },
    ],
    metrics: [
      { label: "Horas administrativas ahorradas", value: "30–45%" },
      { label: "Tiempo de respuesta de autorización", value: "↓ 38%" },
      { label: "Supervisión humana", value: "Integrada" },
    ],
    services: [
      "Automatización de flujos administrativos",
      "Procesamiento de documentos médicos",
      "Despliegue de agentes compatible con HIPAA",
    ],
  },
  {
    slug: "logistics",
    name: "Logística y cadena de suministro",
    icon: Layers,
    headline: "Operaciones inteligentes para ejecución de cadena de suministro de alto volumen",
    description:
      "Modernizamos flujos order-to-cash y plan-to-deliver con agentes de IA que coordinan entre ERP, WMS, TMS y canales de comunicación con clientes.",
    challenges: [
      "Procesamiento de pedidos y envíos con alta tasa de excepciones",
      "Decisiones de pronóstico e inventario repartidas en hojas de cálculo",
      "Datos de transportistas, almacenes y clientes en silos",
      "Equipos operativos saturados de actualizaciones de estado y coordinación manual",
    ],
    useCases: [
      {
        title: "Gestión de excepciones de pedidos",
        description:
          "Los agentes detectan retrasos, proponen resoluciones y escalan cuando se detecta riesgo de SLA.",
      },
      {
        title: "Señales de demanda e inventario",
        description:
          "Pronóstico asistido por IA con flujos de aprobación del planificador humano.",
      },
      {
        title: "Flujos documento-a-envío",
        description:
          "Automatice procesamiento de BOL, facturas y documentos aduaneros con reglas de validación.",
      },
    ],
    metrics: [
      { label: "Tiempo de resolución de excepciones", value: "↓ 42%" },
      { label: "Coordinación manual", value: "↓ 50%" },
      { label: "Entrega a tiempo", value: "+12%" },
    ],
    services: [
      "Optimización de rutas y despacho",
      "Pronóstico de demanda",
      "Agentes de integración ERP/TMS",
    ],
  },
  {
    slug: "saas-hitech",
    name: "SaaS y HiTech",
    icon: Cpu,
    headline: "Incorpore IA en productos y operaciones internas a escala",
    description:
      "Para empresas de tecnología, construimos copilotos, flujos agénticos e integraciones de plataforma que llegan a producción con observabilidad, seguridad y ownership claro.",
    challenges: [
      "Presión por agregar funciones de IA sin desestabilizar el producto core",
      "Ops internas (soporte, RevOps, ingeniería) escalando linealmente con headcount",
      "Toolchain fragmentado entre CRM, analytics de producto y plataformas de soporte",
      "Dificultad para pasar de agentes demo a sistemas gobernados en producción",
    ],
    useCases: [
      {
        title: "Copilotos de soporte al cliente",
        description:
          "Los agentes hacen triage de tickets, redactan respuestas y extraen contexto de bases de conocimiento con revisión humana.",
      },
      {
        title: "Funciones de IA embebidas en producto",
        description:
          "Integraciones LLM personalizadas con guardrails, monitoreo y límites de datos por tenant.",
      },
      {
        title: "Agentes de RevOps y habilitación comercial",
        description:
          "Automatice higiene de CRM, preparación de reuniones y señales de riesgo en pipeline para equipos de revenue.",
      },
    ],
    metrics: [
      { label: "Tiempo de atención en soporte", value: "↓ 33%" },
      { label: "Time-to-market de funciones", value: "2× más rápido" },
      { label: "Ownership de código e IP", value: "100% cliente" },
    ],
    services: [
      "Copilotos e integraciones de IA",
      "Ingeniería de plataforma de grado producto",
      "MLOps y observabilidad de agentes",
    ],
  },
  {
    slug: "energy",
    name: "Energía, petróleo y gas",
    icon: Zap,
    headline: "IA para operaciones de campo intensivas en activos y documentos",
    description:
      "Ayudamos a organizaciones de energía a modernizar flujos de mantenimiento, inteligencia documental técnica y coordinación campo-back-office con sistemas de IA de grado productivo.",
    challenges: [
      "Documentación técnica dispersa en sistemas legacy",
      "Flujos de órdenes de trabajo e inspección con handoffs manuales",
      "Complejidad de integración OT/IT y requisitos de seguridad",
      "Operaciones de campo dependientes de email y hojas de cálculo",
    ],
    useCases: [
      {
        title: "Inteligencia documental técnica",
        description:
          "Busque, resuma y extraiga requisitos de documentación de ingeniería y mantenimiento.",
      },
      {
        title: "Orquestación de órdenes de trabajo",
        description:
          "Los agentes enrutan inspecciones, solicitudes de repuestos y asignaciones de técnicos con reglas de escalamiento.",
      },
      {
        title: "Soporte de planificación de mantenimiento",
        description:
          "Recomendaciones de programación asistidas por IA basadas en historial de activos y restricciones operativas.",
      },
    ],
    metrics: [
      { label: "Tiempo de ciclo de órdenes de trabajo", value: "↓ 28%" },
      { label: "Tiempo de búsqueda documental", value: "↓ 60%" },
      { label: "Coordinación de campo", value: "↑ 35%" },
    ],
    services: [
      "Automatización de flujos de mantenimiento",
      "IA para documentación técnica",
      "Patrones de integración OT/IT",
    ],
  },
];
