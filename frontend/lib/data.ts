export type ProjectLink = {
  github?: string;
  live?: string;
  demo?: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  links: ProjectLink;
  videoUrl: string;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  logo: string;
  url: string;
  description: string;
};



export const jobs: Job[] = [
  {
    company: "Sharpys",
    role: "AI/ML Intern",
    period: "May 2025 - Jul 2025",
    logo: "/assets/sharpsys_logo.jpeg",
    url: "https://sharpys.in",
    description:
      "Built an agent-based e-commerce chatbot and analyzed 1,000+ user interactions for purchase insights. Developed reusable ML pipelines that reduced deployment time by 35%.",
  },
  {
    company: "Basys.ai",
    role: "Software Engineer Intern",
    period: "Jun 2025 - Aug 2025",
    logo: "/assets/basys_logo.png",
    url: "https://basys.ai",
    description:
      "Optimized agentic AI pipelines, reducing runtime by 30%, and improved backend systems using LangChain, Flask, Elasticsearch, and CrewAI. Delivered production-ready documented code adopted across multiple modules.",
  },
];


export const projects: Project[] = [
  {
    id: 1,
    title: "Academia X Console",
    description:
      "Academic management app for SRMIST students that tracks attendance and marks with real-time scraping and structured insights.",
    images: ["/projects_assets/images/console_1.png"],
    tags: ["Flutter", "Firebase"],
    links: {
      github: "https://github.com",
      live: "https://play.google.com/store/apps/details?id=com.akshat.academia",
    },
    videoUrl: "",
  },

  {
    id: 2,
    title: "WFM Manager (AI Workflow System)",
    description:
      "LLM-powered workflow automation system that generates managerial briefings, automates task flows, and reduces manual coordination overhead.",
    images: ["/projects_assets/images/wfm_1.png", "/projects_assets/images/wfm_2.png", "/projects_assets/images/wfm_3.png"],
    tags: ["Next.js", "Gemini AI", "Automation"],
    links: {
      github: "https://github.com",
      demo: "/project_demo?id=2",
    },
    videoUrl: "",
  },

  {
    id: 3,
    title: "Insights",
    description:
      "AI-driven platform that analyzes LinkedIn, GitHub, and resume data to score professional growth, compare peers, and generate structured resumes and insights.",
    images: ["/projects_assets/images/insights_1.jpeg", "/projects_assets/images/insights_2.jpeg", "/projects_assets/images/insights_3.jpeg"],
    tags: ["React", "FastAPI", "Firebase", "Node.js", "Express", "Playwright"],
    links: {
      github: "https://github.com/Akshat2711/INSIGHTS_SIH",
      live: "https://insights-mbmab188l-akshat-srivastavas-projects-5a342762.vercel.app/",
    },
    videoUrl: "/projects_assets/videos/commercial_insights.mp4",
  },

  {
    id: 4,
    title: "AI Learning Platform",
    description:
      "Multi-agent PDF learning system with contextual Q&A, podcast generation between AI speakers, and an AI tutor avatar that simplifies concepts visually.",
    images: ["/projects_assets/images/aitutor_1.png"],
    tags: ["Next.js", "LLM", "AI Agents"],
    links: {
      github: "https://github.com/Akshat2711/ai_learning_hackathon",
      live: "https://ai-learning-hackathon.vercel.app/",
    },
    videoUrl: "",
  },

  {
    id: 5,
    title: "DevLayers",
    description:
      "Developer-focused social platform for documenting progress via structured folders and chronological daily logs with 'build in public' features.",
    images: ["/projects_assets/images/blogging_1.png"],
    tags: ["React", "Social Platform"],
    links: {
      github: "https://github.com/Akshat2711/DevLayers",
    },
    videoUrl: "",
  },

  {
    id: 6,
    title: "MyTube AI Feed",
    description:
      "AI-based YouTube feed customization tool that filters and prioritizes content based on user intent to reduce distractions.",
    images: ["/projects_assets/images/mytube_1.png", "/projects_assets/images/mytube_2.png"],
    tags: ["AI", "Recommendation System"],
    links: {
      github: "https://github.com/Akshat2711/mytube",
    },
    videoUrl: "",
  },

  {
    id: 7,
    title: "AI Music Player",
    description:
      "AI-powered music playlist generator with personalization, queue management, and dynamic recommendation logic.",
    images: ["/projects_assets/images/aimusic_1.png"],
    tags: ["AI", "Music", "Recommendation"],
    links: {
      github: "https://github.com/Akshat2711/AI-PLAYLIST-MAKER",
    },
    videoUrl: "",
  },

  {
    id: 8,
    title: "Systscout",
    description:
      "System collaboration tool for computer labs enabling real-time hardware sharing, comparison (CPU, GPU, battery), and global chat.",
    images: ["/projects_assets/images/systemscout_1.png", "/projects_assets/images/systemscout_2.png"],
    tags: ["React", "Realtime Systems"],
    links: {
      github: "https://github.com/Akshat2711/systemscoutxreactjs",
    },
    videoUrl: "",
  },

  {
    id: 9,
    title: "ONMAP",
    description:
      "Location-based safety application with real-time tracking, nearby chat (10 km radius), and group messaging features.",
    images: ["/projects_assets/images/onmap_1.png", "/projects_assets/images/onmap_2.png", "/projects_assets/images/onmap_3.png",'/projects_assets/images/onmap_4.png'
    ],
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    links: {
      github: "https://github.com/Akshat2711/OnMap",
      live: "https://onmap1.netlify.app",
    },
    videoUrl: "",
  },

  {
    id: 10,
    title: "CartMart",
    description:
      "Web-based marketplace supporting buying, selling, and real-time auction participation with a simple UI.",
    images: ["/projects_assets/images/cartmart_1.png", "/projects_assets/images/cartmart_2.png", "/projects_assets/images/cartmart_3.png", "/projects_assets/images/cartmart_4.png", "/projects_assets/images/cartmart_5.png", "/projects_assets/images/cartmart_6.png"],
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Akshat2711/cartmart",
      live: "https://cartmart1.netlify.app",
    },
    videoUrl: "",
  },
];