export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with seamless checkout experience, real-time inventory management, and responsive design.",
    image: "/projects/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    year: "2025",
  },
  {
    id: "2",
    title: "Finance Dashboard",
    description:
      "Interactive financial analytics dashboard with real-time data visualization, custom charts, and predictive insights.",
    image: "/projects/dashboard.svg",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    year: "2025",
  },
  {
    id: "3",
    title: "Social Media App",
    description:
      "A feature-rich social platform with real-time messaging, content sharing, and community engagement tools.",
    image: "/projects/social.svg",
    tags: ["React Native", "Firebase", "Redux", "Socket.io"],
    year: "2024",
  },
  {
    id: "4",
    title: "AI Content Generator",
    description:
      "Smart content generation tool powered by machine learning for creating marketing copy and blog posts.",
    image: "/projects/ai-tool.svg",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    year: "2024",
  },
];
