export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  deliverables: string[];
  overview: string;
  brandConcept?: string;
  sketchingNotes?: string;
  gallery?: string[];
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface WorkHistoryItem {
  company: string;
  role: string;
  period: string;
  status?: string;
  description?: string;
}

export const HERO_DATA = {
  headlineTop: "THINK",
  headlineBottom: "CREATIVELY",
  subtitle: "Software Engineer building scalable full-stack web applications, AI-powered systems, and data-driven solutions.",
  clientCount: "Open to Remote & Global Roles",
  avatars: [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg"
  ],
  heroArt: "/images/hero-art.webp"
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "lawbridge",
    slug: "lawbridge",
    title: "Lawbridge Ethiopia",
    category: "AI & Full-Stack Legal Platform",
    client: "Startup (Co-founder)",
    year: "2026 – Present",
    image: "/images/hoodverse.webp",
    liveUrl: "https://newlawbridge.vercel.app/",
    deliverables: ["Next.js App Router", "Gemini API RAG", "Firestore Vector DB", "Neon Serverless Postgres"],
    overview: "Co-founded and built Lawbridge Ethiopia, a startup platform connecting freelance lawyers with clients across Ethiopia. Built a Retrieval-Augmented Generation (RAG) legal assistant using the Gemini API to answer questions on Ethiopian law for general users and law students.",
    brandConcept: "Engineered an automated data pipeline to chunk, vectorize, and store unstructured legal documents in Google Firestore, enabling semantically accurate context retrieval for the RAG assistant. Architected the core system using Next.js and Neon Serverless PostgreSQL, optimizing database queries to handle concurrent user requests efficiently.",
    sketchingNotes: "Tech stack: Next.js, Neon (Serverless PostgreSQL), Gemini API, Google Firestore, Tailwind CSS, Vercel.",
    gallery: [
      "/images/hoodverse.webp",
      "https://framerusercontent.com/images/ylmXXuxVqRo18afQMR5evrlIVA.webp",
      "https://framerusercontent.com/images/Rc6Ra19heN7iCc8tvvBKSeXI8xc.webp"
    ]
  },
  {
    id: "amc-portal",
    slug: "amc-portal",
    title: "Amhara Media Corporation Job Portal",
    category: "Full-Stack Web Application",
    client: "Amhara Media Corporation",
    year: "Jul 2025 – Sep 2025",
    image: "/images/teasense.webp",
    deliverables: ["React.js Frontend", "Node.js & Express Backend", "Supabase (PostgreSQL)", "Recruitment Pipeline"],
    overview: "Developed a job portal platform with a React.js frontend and a Node.js/Express + Supabase (PostgreSQL) backend to streamline recruitment and applicant management.",
    brandConcept: "Designed an intuitive interface enabling job seekers to apply easily and HR teams to efficiently review applications. Optimized platform performance and accessibility, resulting in faster application processing and improved user satisfaction.",
    sketchingNotes: "Tech stack: React.js, Node.js/Express, Supabase (PostgreSQL), REST APIs, Tailwind CSS.",
    gallery: [
      "/images/teasense.webp",
      "https://framerusercontent.com/images/dk4nLGR0053ClU9vlLWJDYgBiE.webp",
      "https://framerusercontent.com/images/OnwIjMXSRLb5HO5D72RwqDS1ie0.webp"
    ]
  },
  {
    id: "insurance-risk",
    slug: "insurance-risk",
    title: "Insurance Risk Analytics & Predictive Premium Modeling",
    category: "Machine Learning & Predictive Modeling",
    client: "Insurance Analytics Research",
    year: "May 2025 – Aug 2025",
    image: "/images/fruitblends.webp",
    liveUrl: "https://github.com/Yihenew21/Insurance-Risk-Analytics-Predictive-Modeling",
    deliverables: ["Python & pandas", "Scikit-Learn Modeling", "A/B Hypothesis Testing", "Matplotlib Visuals"],
    overview: "Explored real insurance claim data using pandas to identify low-risk segments and key risk drivers. Ran A/B hypothesis tests across regions and demographics to guide premium strategy.",
    brandConcept: "Built predictive models with scikit-learn and visualized results with matplotlib to estimate claim costs and optimize data-driven premium pricing.",
    sketchingNotes: "Tech stack: Python, pandas, scikit-learn, matplotlib, A/B hypothesis testing.",
    gallery: [
      "/images/fruitblends.webp",
      "https://framerusercontent.com/images/9Q40Y2mZ0Wz7E4J76Jz2P7f7M0.webp"
    ]
  },
  {
    id: "muqecha-studios",
    slug: "muqecha-studios",
    title: "Muqecha Studios",
    category: "Modern Game Studio Platform",
    client: "EfuyeGela Technologies, Events and Consultancy",
    year: "Mar 2025 – Jun 2025",
    image: "/images/ruthless.webp",
    liveUrl: "https://muqecha-studios.vercel.app/",
    deliverables: ["Next.js SSG Platform", "Cloudinary Media Optimization", "Resend Transactional Email", "Interactive UI"],
    overview: "Designed a modern showcase platform highlighting the company's game portfolio and core offerings. Built dedicated sections for team profiles and studio vision to strengthen brand identity and trust.",
    brandConcept: "Focused on clean UI and interactive elements, improving user engagement and navigation experience. Leveraged Next.js Static Site Generation (SSG) and image optimization via Cloudinary to improve mobile page load speed times across devices.",
    sketchingNotes: "Tech stack: Next.js, Cloudinary, Resend, Tailwind CSS, Vercel.",
    gallery: [
      "/images/ruthless.webp",
      "https://framerusercontent.com/images/j882P50a7GzU9z72P7f7M0.webp"
    ]
  }
];

export const BIG_QUOTE = {
  quote: "Yihenew brings rare clarity to both systems architecture and product delivery. From leading our 10-engineer team to architecting complex full-stack features, his technical precision is exceptional.",
  name: "Engineering Leadership",
  role: "Telsem Tech",
  avatar: "/images/avatar-1.jpg"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "fullstack",
    number: "01",
    title: "Full-Stack Web Development",
    description: "Architecting responsive, high-performance web applications using React, Next.js, Node.js, and TypeScript with clean software design patterns.",
    tags: ["React & Next.js", "Node.js & Express", "TypeScript", "Tailwind CSS", "REST & GraphQL APIs"]
  },
  {
    id: "ai_rag",
    number: "02",
    title: "AI & RAG Engineering",
    description: "Developing Retrieval-Augmented Generation (RAG) pipelines, Gemini API integrations, semantic document chunking, and vector database retrieval.",
    tags: ["Retrieval-Augmented Gen", "Gemini API", "Vector Embeddings", "Google Firestore", "Document Pipelines"]
  },
  {
    id: "backend",
    number: "03",
    title: "Backend & Database Architecture",
    description: "Designing scalable relational databases, secure JWT authentication systems, and cloud microservices optimized for high concurrency.",
    tags: ["PostgreSQL (Supabase, Neon)", "MongoDB", "Prisma ORM", "REST APIs", "CI/CD & Docker"]
  },
  {
    id: "data_ml",
    number: "04",
    title: "Machine Learning & Analytics",
    description: "Transforming raw data into predictive intelligence with scikit-learn, running A/B hypothesis testing, and building data visualizations.",
    tags: ["Python & pandas", "Scikit-Learn Modeling", "A/B Testing", "Matplotlib Visuals", "Predictive Analytics"]
  },
  {
    id: "leadership",
    number: "05",
    title: "Technical Leadership & Delivery",
    description: "Leading engineering squads, running sprint planning, conducting code reviews, and setting CI/CD standards that boost delivery speed.",
    tags: ["Team Leadership (10 Engineers)", "Sprint Planning", "Code Review Standards", "Production Reliability", "Agile Execution"]
  }
];

export type ToolCategoryGroup = "frontend" | "backend" | "aiml" | "database" | "devops";

export interface ToolItem {
  name: string;
  category: string;
  categoryGroup: ToolCategoryGroup;
  key: string;
  brandColor: string;
  level: string;
  experience: string;
  description: string;
  projectContext: string;
  keyCapabilities: string[];
  highlightMetric?: string;
}

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    categoryGroup: "frontend",
    key: "Nextjs",
    brandColor: "#FFFFFF",
    level: "Production Lead",
    experience: "3+ Years",
    description: "Production App Router, SSR/SSG, optimized server actions, and API routes powering Telsem Tech portal and Muqecha Studios.",
    projectContext: "Telsem Tech & Muqecha Studios",
    keyCapabilities: ["App Router & SSR", "Server Actions", "SSG / ISR Caching", "Image Optimization"],
    highlightMetric: "1.2s Speedup"
  },
  {
    name: "React",
    category: "Frontend UI",
    categoryGroup: "frontend",
    key: "React",
    brandColor: "#61DAFB",
    level: "Expert",
    experience: "4+ Years",
    description: "Component-driven client architecture, custom hooks, performant state management, and high-retention responsive interfaces.",
    projectContext: "JD Trading & Muqecha Platform",
    keyCapabilities: ["Custom Hooks", "Virtual DOM", "Context & State", "Responsive UI"],
    highlightMetric: "95+ Lighthouse Score"
  },
  {
    name: "TypeScript",
    category: "Type-Safe Systems",
    categoryGroup: "frontend",
    key: "TypeScript",
    brandColor: "#3178C6",
    level: "Core Daily",
    experience: "3+ Years",
    description: "Strict typing across client and server boundaries, shared interface contracts, generics, and zero-runtime-error execution.",
    projectContext: "Enterprise Multi-Tenant Portals",
    keyCapabilities: ["Strict Typing", "Generic Types", "Shared Contracts", "API DTO Validation"],
    highlightMetric: "Zero Runtime Regressions"
  },
  {
    name: "Python",
    category: "Data Science & AI",
    categoryGroup: "aiml",
    key: "Python",
    brandColor: "#FFD43B",
    level: "Advanced",
    experience: "3+ Years",
    description: "Data pipelines, predictive modeling with scikit-learn, statistical hypothesis testing, and automated RAG chunking logic.",
    projectContext: "RAG Pipelines & ML Analysis",
    keyCapabilities: ["Predictive Models", "Pandas & NumPy", "Hypothesis Testing", "Data Analysis"],
    highlightMetric: "3.97/4.0 Honors"
  },
  {
    name: "Gemini API",
    category: "LLM & RAG Systems",
    categoryGroup: "aiml",
    key: "Gemini",
    brandColor: "#9B51E0",
    level: "Production",
    experience: "Active Lead",
    description: "Retrieval-Augmented Generation (RAG) pipelines, legal document indexing, vector embeddings, and semantic query matching in Lawbridge.",
    projectContext: "Lawbridge Ethiopia Co-Founder",
    keyCapabilities: ["RAG Architecture", "Vector Embeddings", "Prompt Engineering", "Semantic Search"],
    highlightMetric: "Sub-Second RAG Retrieval"
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    categoryGroup: "backend",
    key: "Nodejs",
    brandColor: "#539E43",
    level: "Production",
    experience: "3+ Years",
    description: "High-throughput asynchronous microservices, REST APIs, JWT authentication, and secure pharmacy inventory backends.",
    projectContext: "Telsem Tech Core Backend",
    keyCapabilities: ["Asynchronous Event Loop", "REST API Gateways", "JWT & Auth Security", "Microservices"],
    highlightMetric: "20% Delivery Speedup"
  },
  {
    name: "Express.js",
    category: "API Framework",
    categoryGroup: "backend",
    key: "Express",
    brandColor: "#E0E0E0",
    level: "Advanced",
    experience: "3+ Years",
    description: "Modular route controllers, middleware pipelines, CORS and rate-limiting security, and transactional database endpoints.",
    projectContext: "Pharmacy Inventory System",
    keyCapabilities: ["Custom Middleware", "Route Controllers", "CORS & Rate Limits", "Auth Guards"],
    highlightMetric: "Multi-Tenant Architecture"
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    categoryGroup: "database",
    key: "PostgreSQL",
    brandColor: "#336791",
    level: "Advanced",
    experience: "3+ Years",
    description: "Relational schema design, normalization, B-tree indexes, complex joins, and transactional consistency via Prisma and raw SQL.",
    projectContext: "Telsem Pharmacy & Client Portal",
    keyCapabilities: ["Relational Normalization", "B-Tree Indexing", "ACID Transactions", "Complex Joins"],
    highlightMetric: "ACID Guaranteed"
  },
  {
    name: "Supabase",
    category: "Cloud Database & Auth",
    categoryGroup: "database",
    key: "Supabase",
    brandColor: "#3ECF8E",
    level: "Production",
    experience: "2+ Years",
    description: "Managed Postgres database, Row Level Security (RLS) policies, JWT auth, and instant database REST APIs.",
    projectContext: "Rapid Full-Stack Applications",
    keyCapabilities: ["Row-Level Security (RLS)", "Postgres Functions", "Storage Buckets", "Instant REST APIs"],
    highlightMetric: "Zero-Trust Security"
  },
  {
    name: "Google Firestore",
    category: "Vector & Document DB",
    categoryGroup: "database",
    key: "Firestore",
    brandColor: "#FFCA28",
    level: "Production",
    experience: "2+ Years",
    description: "NoSQL document collections, real-time sync, and vector storage integration for legal embeddings retrieval in Lawbridge.",
    projectContext: "Lawbridge Legal Knowledge Base",
    keyCapabilities: ["Vector Search Store", "Realtime Listeners", "Flexible Document Model", "Security Rules"],
    highlightMetric: "Realtime Synchronization"
  },
  {
    name: "Docker",
    category: "DevOps & Containers",
    categoryGroup: "devops",
    key: "Docker",
    brandColor: "#2496ED",
    level: "Intermediate",
    experience: "2+ Years",
    description: "Multi-stage Docker containerization, consistent development environments, compose configurations, and production parity.",
    projectContext: "Microservice Staging Environments",
    keyCapabilities: ["Multi-Stage Builds", "Docker Compose", "Reproducible Environments", "Image Optimization"],
    highlightMetric: "Team Dev Parity"
  },
  {
    name: "Tailwind CSS",
    category: "Design Systems",
    categoryGroup: "frontend",
    key: "Tailwind",
    brandColor: "#38BDF8",
    level: "Expert",
    experience: "3+ Years",
    description: "Bespoke design systems, micro-interactions, responsive fluid typography, and dark-mode aesthetic orchestration.",
    projectContext: "JD Trading & Muqecha Portfolios",
    keyCapabilities: ["Design Tokens", "Responsive Grids", "Dark Mode Theming", "Hardware Acceleration"],
    highlightMetric: "Bespoke UI Design"
  },
  {
    name: "Git & GitHub",
    category: "CI/CD & Collaboration",
    categoryGroup: "devops",
    key: "GitHub",
    brandColor: "#F05032",
    level: "Core Daily",
    experience: "4+ Years",
    description: "Branching workflows, automated GitHub Actions CI/CD pipelines, pull request review standards, and release management.",
    projectContext: "Team Leadership Across 10 Engineers",
    keyCapabilities: ["GitHub Actions CI/CD", "Peer Code Reviews", "Branch Protection", "Release Automation"],
    highlightMetric: "Squad of 10 Lead"
  },
  {
    name: "scikit-learn",
    category: "Machine Learning",
    categoryGroup: "aiml",
    key: "ScikitLearn",
    brandColor: "#F89939",
    level: "Advanced",
    experience: "2+ Years",
    description: "Supervised classification, regression models, cross-validation, feature scaling, and statistical evaluation.",
    projectContext: "Predictive Analytics & Honors Work",
    keyCapabilities: ["Classification & Regression", "Feature Engineering", "Cross-Validation", "Model Evaluation"],
    highlightMetric: "Statistical Rigor"
  },
  {
    name: "Postman",
    category: "API Testing & Quality",
    categoryGroup: "devops",
    key: "Postman",
    brandColor: "#FF6C37",
    level: "Advanced",
    experience: "3+ Years",
    description: "Automated API contract testing, pre-request script validation, environment variable management, and regression suites.",
    projectContext: "API Suite Validation",
    keyCapabilities: ["Contract Testing", "Automated Collections", "Mock Environments", "Test Scripts"],
    highlightMetric: "Zero-Bug Releases"
  },
  {
    name: "Vercel",
    category: "Cloud & Edge Hosting",
    categoryGroup: "devops",
    key: "Vercel",
    brandColor: "#FFFFFF",
    level: "Production",
    experience: "3+ Years",
    description: "Global CDN edge distribution, preview deployments, serverless API functions, and real-time performance analytics.",
    projectContext: "Muqecha Studios & Web Apps",
    keyCapabilities: ["Edge Network CDN", "Serverless Functions", "Preview Deployments", "Speed Insights"],
    highlightMetric: "Edge Deployed"
  }
];

export const WORK_HISTORY: WorkHistoryItem[] = [
  {
    company: "Telsem Tech",
    role: "Full-Stack Developer & Team Lead",
    period: "Mar 2026 – Present",
    status: "Active",
    description: "Lead a cross-functional team of 10 engineers to design and launch a multi-tenant portal and pharmacy inventory system, improving feature delivery speed by 20% using Next.js, React, Node.js, and PostgreSQL."
  },
  {
    company: "Lawbridge Ethiopia",
    role: "Startup Co-Founder & Lead Engineer",
    period: "2026 – Present",
    status: "Active",
    description: "Co-founded a legaltech platform connecting freelance lawyers with clients and built an automated RAG legal assistant using the Gemini API and Google Firestore vector storage."
  },
  {
    company: "JD Trading",
    role: "Web Developer (Freelance, Remote)",
    period: "Feb 2025 – Jun 2025",
    status: "Completed",
    description: "Built and launched a responsive React.js website, achieving a 95+ Lighthouse performance score and reducing page load times by 1.2 seconds."
  },
  {
    company: "EfuyeGela Technologies",
    role: "Web Developer Intern",
    period: "Mar 2025 – Sep 2025",
    status: "Completed",
    description: "Developed and deployed the Muqecha Studios website using Next.js, Cloudinary for media storage, and Resend for transactional email."
  },
  {
    company: "Debre Berhan University",
    role: "B.Sc. in Software Engineering (GPA: 3.97/4.0)",
    period: "Class of 2026",
    status: "Completed",
    description: "Graduated with highest honors (3.97/4.0 GPA), specializing in software engineering, full-stack web platforms, and machine learning."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    quote: "Yihenew led our 10-engineer team with exceptional skill. His architectural decisions across our multi-tenant portal and pharmacy system accelerated our delivery speed by 20%.",
    name: "Engineering Team",
    role: "Product Lead",
    company: "Telsem Tech",
    avatar: "/images/philip.jpg",
    rating: 5
  },
  {
    id: "t2",
    quote: "The RAG legal assistant Yihenew built with Gemini API and Firestore gave Lawbridge a true technical moat. Semantic retrieval is fast, accurate, and reliable.",
    name: "Co-Founder",
    role: "Legal Tech Partner",
    company: "Lawbridge Ethiopia",
    avatar: "/images/daniel.jpg",
    rating: 5
  },
  {
    id: "t3",
    quote: "Achieved a 95+ Lighthouse performance score on our web platform. Our customer inquiries grew significantly thanks to the fast, clean UI he built.",
    name: "Operations Director",
    role: "Managing Director",
    company: "JD Trading",
    avatar: "/images/riya.jpg",
    rating: 5
  },
  {
    id: "t4",
    quote: "Great collaboration during his internship. He translated complex game concepts into a cohesive Next.js platform that elevated Muqecha Studios.",
    name: "Studio Lead",
    role: "Consultancy Lead",
    company: "EfuyeGela Technologies",
    avatar: "/images/arjun.jpg",
    rating: 5
  },
  {
    id: "t5",
    quote: "Consistently demonstrated academic and engineering excellence, graduating with a 3.97 GPA. Strong foundations in data structures, systems, and machine learning.",
    name: "Faculty Chair",
    role: "Department of Software Engineering",
    company: "Debre Berhan University",
    avatar: "/images/natalie.jpg",
    rating: 5
  },
  {
    id: "t6",
    quote: "Dependable engineer who writes clean, maintainable code and understands the full product lifecycle from database schema to user interaction.",
    name: "Technical Mentor",
    role: "Senior Architect",
    company: "Tech Community Ethiopia",
    avatar: "/images/avatar-1.jpg",
    rating: 5
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What is your primary technical expertise?",
    answer: "I specialize in Full-Stack Web Engineering (React, Next.js, Node.js/Express, TypeScript), modern databases (PostgreSQL, Supabase, Neon), and AI solutions including Retrieval-Augmented Generation (RAG) and Gemini API integration."
  },
  {
    id: "faq-2",
    number: "02",
    question: "Are you open to remote or international roles?",
    answer: "Yes, I am actively open to both remote and on-site engineering roles locally in Ethiopia and internationally across global time zones (GMT+3 base with flexible overlap)."
  },
  {
    id: "faq-3",
    number: "03",
    question: "How do you approach AI & RAG system development?",
    answer: "I build end-to-end RAG workflows: automated document chunking, semantic embedding generation, vector storage in Google Firestore, and context-grounded prompt orchestration with Gemini API to ensure factual, high-accuracy answers."
  },
  {
    id: "faq-4",
    number: "04",
    question: "What experience do you have with engineering leadership?",
    answer: "At Telsem Tech, I lead a cross-functional team of 10 engineers, driving sprint planning, code review standards, and CI/CD pipelines to increase delivery velocity by 20% while maintaining production stability."
  },
  {
    id: "faq-5",
    number: "05",
    question: "What was your academic focus and achievement?",
    answer: "I graduated with a Bachelor of Science in Software Engineering from Debre Berhan University with a 3.97 / 4.0 GPA, focusing on distributed systems, modern web development, and applied machine learning."
  },
  {
    id: "faq-6",
    number: "06",
    question: "Can you build and deploy end-to-end full-stack systems?",
    answer: "Yes. I have taken multiple applications from architecture and schema design all the way to containerized deployment on Vercel, Supabase, and Docker with automated testing."
  }
];
