export interface JobPosition {
  id: number;
  positionValue: string;
  departmentKey: "operations" | "engineering";
  department: string;
  title: string;
  location: string;
  type: string;
  salary?: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
}

export const jobPositionsEn: JobPosition[] = [
  {
    id: 1,
    positionValue: "Operations Lead",
    departmentKey: "operations",
    department: "Operations",
    title: "Operations Lead",
    location: "Remote",
    type: "Full-time or contract",
    experience: "You have run an operation",
    description:
      "Sit with the client, map how the work actually runs, name owners, and leave a cadence the team can keep. This is not a slide job. You have run delivery, production, or store ops yourself.",
    requirements: [
      "You have owned a live operation — delivery, production, or store",
      "You can map a process without turning it into a 40-page deck",
      "Comfortable in the room with the people who run the work",
      "You will not recommend AI on a process nobody owns",
    ],
    posted: "Open",
  },
  {
    id: 2,
    positionValue: "Delivery Engineer",
    departmentKey: "engineering",
    department: "Engineering",
    title: "Delivery Engineer",
    location: "Remote",
    type: "Full-time or contract",
    experience: "You have shipped systems operators run",
    description:
      "Build the system the operators will actually use — scoring tables, store ops, delivery tooling — and hand it over. Client owns the repo. You stay until they can run it without you.",
    requirements: [
      "You have shipped software that operators use under pressure",
      "You write for handoff: the next person can run it",
      "Comfortable sitting with the process, not only the ticket",
      "You will not automate chaos",
    ],
    posted: "Open",
  },
];

export const jobPositionsEs: JobPosition[] = [
  {
    id: 1,
    positionValue: "Operations Lead",
    departmentKey: "operations",
    department: "Operaciones",
    title: "Lead de operaciones",
    location: "Remoto",
    type: "Tiempo completo o contrato",
    experience: "Ha corrido una operación",
    description:
      "Siéntese con el cliente, mapee cómo corre el trabajo de verdad, nombre dueños y deje una cadencia que el equipo pueda sostener. Esto no es un trabajo de slides. Usted ha corrido delivery, producción o tienda.",
    requirements: [
      "Ha poseído una operación en vivo — delivery, producción o tienda",
      "Puede mapear un proceso sin convertirlo en un deck de 40 páginas",
      "Cómodo en la sala con quien corre el trabajo",
      "No va a recomendar IA sobre un proceso que nadie posee",
    ],
    posted: "Abierta",
  },
  {
    id: 2,
    positionValue: "Delivery Engineer",
    departmentKey: "engineering",
    department: "Ingeniería",
    title: "Ingeniero de delivery",
    location: "Remoto",
    type: "Tiempo completo o contrato",
    experience: "Ha entregado sistemas que operan personas",
    description:
      "Construya el sistema que los operadores van a usar — mesas de scoring, ops de tienda, tooling de delivery — y transfiéralo. El cliente posee el repo. Usted se queda hasta que puedan operarlo sin usted.",
    requirements: [
      "Ha entregado software que operadores usan bajo presión",
      "Escribe para el handoff: la siguiente persona puede operarlo",
      "Cómodo sentándose con el proceso, no solo con el ticket",
      "No va a automatizar el caos",
    ],
    posted: "Abierta",
  },
];

export type DepartmentKey = "all" | JobPosition["departmentKey"];

export const departmentKeys: DepartmentKey[] = ["all", "operations", "engineering"];
