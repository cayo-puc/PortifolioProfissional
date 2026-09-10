import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const profile = {
  name: "Caio Santos Borges",
  shortName: "Caio Borges",
  monogram: "CB",

  role: "Desenvolvedor de Software",

  tagline: "Criatividade × Design × Desenvolvimento",

  intro:
    "Desenvolvedor de software e estudante de Engenharia de Software na PUC Minas, com experiência prática em aplicações web, APIs REST e projetos full stack. Trabalho com Java, Spring Boot, Python, React, SQL e Git, além de atuar como Monitor de Programação Modular.",

  location: "Belo Horizonte, MG — Brasil",

  email: "caio.santos.software@gmail.com",

  github: "https://github.com/cayo-puc",

  linkedin:
    "https://www.linkedin.com/in/caio-santos-borges-792591362/",
};

export const about = {
  headline: "Entre código, música, desenhos e ideias.",

  paragraphs: [
    "Sou estudante de Engenharia de Software na PUC Minas e gosto de transformar ideias em projetos que possam realmente ser utilizados. Tenho curiosidade por diferentes áreas da tecnologia e gosto de entender um software por inteiro — da lógica e arquitetura à experiência de quem vai utilizá-lo.",

    "Fora da programação, a criatividade ocupa boa parte do meu tempo. Gosto de música e de tocar instrumentos, além de desenhar e pintar. Também gosto muito de animais. Esses interesses fazem parte de quem sou e influenciam meu cuidado com detalhes, composição e experiência visual.",

    "Gosto especialmente de projetos em que posso acompanhar diferentes etapas do desenvolvimento, aprender novas tecnologias e transformar uma ideia inicial em algo funcional. É essa combinação entre resolução de problemas, criatividade e construção que mais me atrai na Engenharia de Software.",
  ],

  interests: [
    "Música",
    "Instrumentos",
    "Desenho",
    "Pintura",
    "Animais",
    "Tecnologia",
  ],
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;

  details: {
    about: string;
    features?: string[];
    contribution?: string;
    development?: string;
    architecture?: string;
    objective?: string;
    learnings?: string;
    context?: string;
    relatedCertificate?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Nutri-Soft",

    description:
      "Sistema desenvolvido em equipe para apoiar o acompanhamento nutricional de pacientes, com gerenciamento de pacientes, formulários, dietas, exames, consultas, agendamentos e relatórios em PDF. Contribuí na arquitetura dos formulários, design da aplicação, front-end com Thymeleaf, deploy, assistente virtual e funcionalidades de agendamento.",

    image: project1,

    tags: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],


    github:
      "https://plf-es-2026-1-ti3-5533100-g6-nutri-soft.onrender.com",

    details: {
      about:
        "O Nutri-Soft é uma plataforma web desenvolvida em equipe para centralizar o acompanhamento nutricional entre profissionais e pacientes. O sistema reúne informações clínicas e ferramentas de acompanhamento em um único ambiente, permitindo ao nutricionista organizar o atendimento e ao paciente acompanhar sua evolução.",

      features: [
        "Gerenciamento de pacientes",
        "Formulários clínicos personalizados",
        "Cadastro de dietas e exames",
        "Acompanhamento da evolução física",
        "Agendamento de consultas",
        "Dashboard clínico",
        "Assistente virtual",
        "Geração de relatórios em PDF",
      ],

      contribution:
        "Participei da arquitetura dos formulários e do design da aplicação, além do desenvolvimento front-end com Thymeleaf. Também trabalhei na implementação do assistente virtual, sistema de agendamentos e no processo de deploy da aplicação.",

      context:
        "Projeto acadêmico desenvolvido em equipe durante o curso de Engenharia de Software na PUC Minas.",
    },
  },

  {
    title: "Portfólio Interativo",

    description:
      "Portfólio gamificado desenvolvido em React e Vite que transforma a navegação tradicional em uma experiência interativa. Implementei movimentação do personagem, física de salto, colisões, interação com objetos, navegação entre cenários e componentes reutilizáveis para apresentar projetos e informações profissionais.",

    image: project2,

    tags: [
      "React",
      "Vite",
      "JavaScript",
      "HTML",
      "CSS",
    ],


    github: "https://github.com/cayo-puc/Portifolio",

    details: {
      about:
        "Portfólio profissional gamificado que transforma a navegação tradicional de um site em uma experiência 2D interativa. Em vez de acessar as informações apenas por menus convencionais, o visitante controla um personagem e explora diferentes cenários para conhecer meus projetos, experiências, informações pessoais e formas de contato.",

      features: [
        "Movimentação lateral e em profundidade",
        "Sistema de salto e gravidade",
        "Detecção de colisões",
        "Interação com objetos do cenário",
        "Sprites animados",
        "Obstáculos",
        "Navegação entre diferentes áreas do portfólio",
      ],

      development:
        "A interface foi construída em React com componentes reutilizáveis, enquanto a lógica de interação controla movimentação, física, estados do personagem e diferentes elementos presentes nos cenários.",

      objective:
        "O principal desafio foi explorar uma forma menos convencional de apresentar um portfólio sem deixar de organizar informações profissionais, combinando desenvolvimento front-end, lógica de interação e direção visual.",
    },
  },

  {
    title: "Pipeline de Dados em Python",

    description:
      "Pipeline de dados reutilizável desenvolvido em Python para integrar dados provenientes de arquivos JSON e CSV. O projeto realiza leitura, padronização de estruturas, transformação e consolidação dos dados, preparando-os para utilização e análise posterior.",

    image: project3,

    tags: [
      "Python",
      "ETL",
      "Pipeline de Dados",
      "JSON",
      "CSV",
    ],


    github: "https://github.com/cayo-puc/Pipeline_python",

    details: {
      about:
        "Pipeline de dados reutilizável desenvolvido em Python para integrar informações provenientes de diferentes fontes e formatos. O projeto trabalha com dados em JSON e CSV, padronizando suas estruturas antes de consolidá-los em um conjunto compatível para processamento posterior.",

      development:
        "O pipeline realiza a leitura dos arquivos, identifica diferenças entre suas estruturas, padroniza nomes e organização das colunas, transforma os dados e consolida as diferentes fontes em uma estrutura uniforme.",

      objective:
        "O projeto foi desenvolvido para praticar um fluxo de ETL e criar uma solução que pudesse ser adaptada para cenários em que empresas ou sistemas fornecem dados com estruturas diferentes.",

      learnings:
        "O desenvolvimento envolveu organização de código Python, manipulação e transformação de dados, tratamento de diferentes formatos de entrada e construção de um fluxo reutilizável.",

      relatedCertificate:
        "Pipeline de Dados — Alura",
    },
  },

  {
    title: "API Voll Med",

    description:
      "API REST desenvolvida com Java e Spring Boot para gerenciamento de médicos, com operações de cadastro, consulta paginada, atualização e exclusão lógica. O projeto utiliza DTOs, Spring Data JPA, Hibernate e MySQL, seguindo uma arquitetura organizada em camadas.",

    image: project4,

    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
    ],


    github: "https://github.com/cayo-puc/ApiVollMed",

    details: {
      about:
        "API REST desenvolvida com Java e Spring Boot para gerenciamento de médicos. O projeto aplica conceitos de desenvolvimento back-end e organização em camadas para disponibilizar operações de cadastro, consulta, atualização e desativação de registros.",

      features: [
        "Cadastro de médicos",
        "Consulta paginada",
        "Atualização de registros",
        "Exclusão lógica",
        "Listagem apenas de médicos ativos",
      ],

      architecture:
        "A aplicação utiliza DTOs para transferência de dados, Spring Data JPA para acesso à persistência e Hibernate para mapeamento objeto-relacional. A listagem considera apenas médicos ativos e utiliza Pageable para paginação dos resultados.",

      objective:
        "O projeto foi desenvolvido para aplicar na prática a construção de APIs REST com o ecossistema Spring, separação de responsabilidades, persistência em banco relacional e boas práticas de organização de uma aplicação back-end.",

      relatedCertificate:
        "Spring Boot 3 — Alura",
    },
  },
];

export const experience = [
  {
    period: "Abr/2026 — Jul/2026 · Set/2026 — Atual",

    role: "Monitor de Programação Modular",

    company: "PUC Minas",

    description:
      "Apoio estudantes na aplicação prática de conceitos de desenvolvimento de software, com foco em Java, Programação Orientada a Objetos, testes, depuração de código e desenvolvimento de projetos. A experiência também envolve auxiliar na identificação de erros e na compreensão de boas práticas de programação.",
  },
];

export const skills = [
  {
    category: "Back-end",

    items: [
      "Java",
      "Spring Boot",
      "APIs REST",
      "Spring Data JPA",
      "Hibernate",
      "SQL",
      "MySQL",
      "Maven",
    ],
  },

  {
    category: "Front-end",

    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "HTML",
      "CSS",
      "Thymeleaf",
      "Vite",
    ],
  },

  {
    category: "Dados",

    items: [
      "Python",
      "ETL",
      "Pipeline de Dados",
      "JSON",
      "CSV",
    ],
  },

  {
    category: "Engenharia & Ferramentas",

    items: [
      "Git",
      "GitHub",
      "POO",
      "Testes Unitários",
      "Figma",
      "CI/CD",
      "Metodologias Ágeis",
    ],
  },
];

export const education = [
  {
    course: "Engenharia de Software",

    institution: "PUC Minas",

    period: "Em andamento",

    details:
      "Graduação com formação em desenvolvimento e arquitetura de software, bancos de dados, engenharia de requisitos, testes, sistemas operacionais, redes de computadores e desenvolvimento web.",
  },
];

export const languages = [
  {
    language: "Português",
    level: "Nativo",
  },

  {
    language: "Inglês",
    level: "Duolingo English Test — 115",
  },
];

export const certificates = [
  {
    title: "Pipeline de Dados",

    issuer: "Alura",

    date: "Novembro de 2025",

    credentialId:
      "e2f18127-e0a5-4743-930b-736240cfa758",

    description:
      "Formação voltada à construção e organização de pipelines de dados, com aplicação prática dos conhecimentos em um projeto de pipeline reutilizável desenvolvido em Python.",

    skills: [
      "Python",
      "Pipeline de Dados",
      "ETL",
      "Integração de Dados",
      "CI/CD",
    ],

    link:
      "https://cursos.alura.com.br/certificate/e2f18127-e0a5-4743-930b-736240cfa758?lang",

    project: {
      name: "Pipeline de Dados em Python",
      github:
        "https://github.com/cayo-puc/Pipeline_python",
    },
  },

  {
    title: "Spring Boot 3",

    issuer: "Alura",

    date: "Novembro de 2025",

    credentialId:
      "dd6452d9-b73e-4842-9dc7-c524f8209b44",

    description:
      "Formação em desenvolvimento de aplicações e APIs REST com Spring Boot 3, incluindo persistência de dados e ferramentas do ecossistema Java.",

    skills: [
      "Java",
      "Spring Boot",
      "APIs REST",
      "JPA",
      "Hibernate",
      "Maven",
      "MySQL",
    ],

    link:
      "https://cursos.alura.com.br/certificate/dd6452d9-b73e-4842-9dc7-c524f8209b44?lang",

    project: {
      name: "API Voll Med",
      github:
        "https://github.com/cayo-puc/ApiVollMed",
    },
  },
];

export const navLinks = [
  {
    label: "sobre",
    href: "#sobre",
  },

  {
    label: "projetos",
    href: "#projetos",
  },

  {
    label: "experiência",
    href: "#experiencia",
  },

  {
    label: "habilidades",
    href: "#habilidades",
  },

  {
    label: "formação",
    href: "#formacao",
  },

  {
    label: "certificados",
    href: "#certificados",
  },

  {
    label: "contato",
    href: "#contato",
  },
];