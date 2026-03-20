import { Course, Bundle, Testimonial, SocialLink } from './types';

export const COURSES: Course[] = [
  {
    title: "Stylized Character Essentials",
    desc: "Aprenda um processo mais claro para criar personagens 3D com leitura forte e acabamento refinado.",
    level: "Intermediate",
    lang: "PT/EN",
    software: "ZBrush",
    duration: "8h+",
    price: "R$ 297",
    learn: [
      "Bloqueio e construção da base",
      "Refinamento de formas e silhueta",
      "Organização do workflow",
      "Decisões visuais para apresentação"
    ],
    checkout: "#"
  },
  {
    title: "Environment Workflow Foundations",
    desc: "Uma base sólida para construir ambientes com mais clareza visual, ritmo e consistência.",
    level: "Beginner",
    lang: "PT/EN",
    software: "Blender",
    duration: "6h+",
    price: "R$ 247",
    learn: [
      "Definição de formas primárias",
      "Composição e leitura visual",
      "Organização de cena",
      "Apresentação final do projeto"
    ],
    checkout: "#"
  },
  {
    title: "Portfolio Presentation for 3D",
    desc: "Melhore a forma como você apresenta seu trabalho e valoriza cada projeto visualmente.",
    level: "All Levels",
    lang: "PT/EN",
    software: "Marmoset / Photoshop",
    duration: "4h+",
    price: "R$ 197",
    learn: [
      "Montagem de imagens finais",
      "Escolha de enquadramentos",
      "Direção de luz e contraste",
      "Construção de apresentação premium"
    ],
    checkout: "#"
  },
  {
    title: "Advanced Sculpt Details",
    desc: "Refine superfícies, volumes e microdetalhes com um olhar mais maduro para escultura 3D.",
    level: "Advanced",
    lang: "PT/EN",
    software: "ZBrush",
    duration: "10h+",
    price: "R$ 347",
    learn: [
      "Detalhamento secundário e terciário",
      "Controle de superfície",
      "Leitura de materiais",
      "Refino para apresentação profissional"
    ],
    checkout: "#"
  },
  {
    title: "Stylized Props Design",
    desc: "Desenvolva props com personalidade, apelo visual e processo otimizado para produção.",
    level: "Beginner",
    lang: "PT/EN",
    software: "Blender",
    duration: "5h+",
    price: "R$ 187",
    learn: [
      "Shape language aplicada",
      "Construção de formas limpas",
      "Refino visual do asset",
      "Apresentação final do prop"
    ],
    checkout: "#"
  },
  {
    title: "Materials and Final LookDev",
    desc: "Leve seus projetos para um resultado mais convincente com materiais e acabamento final.",
    level: "Intermediate",
    lang: "PT/EN",
    software: "Substance Painter",
    duration: "7h+",
    price: "R$ 267",
    learn: [
      "Criação de materiais mais ricos",
      "Leitura de desgaste e superfície",
      "Ajustes de valor e contraste",
      "Look final mais forte"
    ],
    checkout: "#"
  }
];

export const BUNDLES: Bundle[] = [
  {
    title: "Starter Bundle",
    desc: "Uma trilha mais organizada para começar com base técnica e direção visual.",
    price: "R$ 597",
    includes: ["Environment Workflow", "Stylized Props", "Portfolio Presentation"],
    checkout: "#"
  },
  {
    title: "Artist Growth Bundle",
    desc: "Para quem quer evoluir processo, acabamento e leitura visual com mais consistência.",
    price: "R$ 797",
    includes: ["Stylized Character", "LookDev", "Advanced Sculpt Details"],
    checkout: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lucas M.",
    text: "Os cursos me ajudaram a organizar melhor meu processo e elevar bastante a apresentação dos meus projetos."
  },
  {
    name: "Marina S.",
    text: "A didática é direta e o visual da escola passa exatamente a sensação de curadoria que eu queria encontrar."
  },
  {
    name: "Caio R.",
    text: "Gostei porque consigo entender rápido o curso, ver o que vou aprender e comprar sem ficar navegando em várias páginas."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: "#" },
  { name: "ArtStation", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Gumroad", href: "#" },
  { name: "TikTok", href: "#" }
];
