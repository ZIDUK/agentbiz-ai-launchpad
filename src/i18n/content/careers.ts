export interface JobPosition {
  id: number;
  positionValue: string;
  departmentKey: "engineering" | "product" | "solutions" | "research";
  department: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
}

export const jobPositionsEn: JobPosition[] = [
  {
    id: 1,
    positionValue: "Senior AI Engineer",
    departmentKey: "engineering",
    department: "Engineering",
    title: "Senior AI Engineer",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$140k - $180k",
    experience: "5+ years",
    description:
      "Lead the development of next-generation AI agents and machine learning systems. Work with cutting-edge technologies to build scalable AI solutions for enterprise clients.",
    requirements: [
      "5+ years experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with LLMs and neural networks",
      "Strong background in distributed systems",
      "Experience with cloud platforms (AWS, GCP, Azure)",
    ],
    posted: "2 days ago",
  },
  {
    id: 2,
    positionValue: "AI Product Manager",
    departmentKey: "product",
    department: "Product",
    title: "AI Product Manager",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$120k - $150k",
    experience: "3+ years",
    description:
      "Drive product strategy for AI-powered solutions. Collaborate with engineering and design teams to deliver innovative AI products that solve real business problems.",
    requirements: [
      "3+ years in product management",
      "Experience with AI/ML products",
      "Strong analytical and communication skills",
      "Background in B2B SaaS products",
      "Understanding of AI technologies and limitations",
    ],
    posted: "1 week ago",
  },
  {
    id: 3,
    positionValue: "AI Solutions Architect",
    departmentKey: "solutions",
    department: "Solutions",
    title: "AI Solutions Architect",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $170k",
    experience: "4+ years",
    description:
      "Design and implement AI solutions for enterprise clients. Work closely with clients to understand their needs and architect scalable AI systems.",
    requirements: [
      "4+ years in solutions architecture",
      "Deep understanding of AI/ML technologies",
      "Experience with enterprise integrations",
      "Strong client-facing skills",
      "Knowledge of cloud architecture patterns",
    ],
    posted: "3 days ago",
  },
  {
    id: 4,
    positionValue: "AI Research Scientist",
    departmentKey: "research",
    department: "Research",
    title: "AI Research Scientist",
    location: "Remote / Boston",
    type: "Full-time",
    salary: "$150k - $200k",
    experience: "PhD preferred",
    description:
      "Conduct cutting-edge AI research to advance our agent capabilities. Publish research, prototype new algorithms, and push the boundaries of what's possible.",
    requirements: [
      "PhD in AI, ML, Computer Science or related field",
      "Strong publication record in top-tier venues",
      "Experience with transformer architectures",
      "Proficiency in research methodologies",
      "Experience with large-scale model training",
    ],
    posted: "5 days ago",
  },
];

export const jobPositionsEs: JobPosition[] = [
  {
    id: 1,
    positionValue: "Senior AI Engineer",
    departmentKey: "engineering",
    department: "Ingeniería",
    title: "Ingeniero Senior de IA",
    location: "Remoto / San Francisco",
    type: "Tiempo completo",
    salary: "$140k - $180k USD",
    experience: "5+ años",
    description:
      "Lidera el desarrollo de agentes de IA y sistemas de machine learning de próxima generación. Trabaja con tecnologías de punta para construir soluciones escalables de IA para clientes enterprise.",
    requirements: [
      "5+ años de experiencia en desarrollo de IA/ML",
      "Dominio de Python, TensorFlow y PyTorch",
      "Experiencia con LLMs y redes neuronales",
      "Sólida experiencia en sistemas distribuidos",
      "Experiencia en plataformas cloud (AWS, GCP, Azure)",
    ],
    posted: "Hace 2 días",
  },
  {
    id: 2,
    positionValue: "AI Product Manager",
    departmentKey: "product",
    department: "Producto",
    title: "Product Manager de IA",
    location: "Remoto / Nueva York",
    type: "Tiempo completo",
    salary: "$120k - $150k USD",
    experience: "3+ años",
    description:
      "Impulsa la estrategia de producto para soluciones con IA. Colabora con equipos de ingeniería y diseño para entregar productos innovadores que resuelvan problemas reales de negocio.",
    requirements: [
      "3+ años en gestión de producto",
      "Experiencia con productos de IA/ML",
      "Fuertes habilidades analíticas y de comunicación",
      "Experiencia en productos B2B SaaS",
      "Comprensión de tecnologías y limitaciones de IA",
    ],
    posted: "Hace 1 semana",
  },
  {
    id: 3,
    positionValue: "AI Solutions Architect",
    departmentKey: "solutions",
    department: "Soluciones",
    title: "Arquitecto de Soluciones IA",
    location: "Remoto",
    type: "Tiempo completo",
    salary: "$130k - $170k USD",
    experience: "4+ años",
    description:
      "Diseña e implementa soluciones de IA para clientes enterprise. Trabaja de cerca con clientes para entender sus necesidades y arquitectar sistemas escalables.",
    requirements: [
      "4+ años en arquitectura de soluciones",
      "Profundo conocimiento de tecnologías IA/ML",
      "Experiencia con integraciones enterprise",
      "Fuertes habilidades con clientes",
      "Conocimiento de patrones de arquitectura cloud",
    ],
    posted: "Hace 3 días",
  },
  {
    id: 4,
    positionValue: "AI Research Scientist",
    departmentKey: "research",
    department: "Investigación",
    title: "Científico de Investigación en IA",
    location: "Remoto / Boston",
    type: "Tiempo completo",
    salary: "$150k - $200k USD",
    experience: "PhD preferido",
    description:
      "Realiza investigación de vanguardia en IA para avanzar nuestras capacidades de agentes. Publica investigación, prototipa algoritmos y expande los límites de lo posible.",
    requirements: [
      "PhD en IA, ML, Ciencias de la Computación o campo relacionado",
      "Historial sólido de publicaciones en venues de primer nivel",
      "Experiencia con arquitecturas transformer",
      "Dominio de metodologías de investigación",
      "Experiencia en entrenamiento de modelos a gran escala",
    ],
    posted: "Hace 5 días",
  },
];

export type DepartmentKey = "all" | JobPosition["departmentKey"];

export const departmentKeys: DepartmentKey[] = [
  "all",
  "engineering",
  "product",
  "solutions",
  "research",
];
