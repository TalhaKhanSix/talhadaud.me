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
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience with a modern and responsive design.",
    image: "/favicon.svg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "https://talhadaud.me/",
    year: "2025",
  },
  {
    id: "2",
    title: "ChronoPulse",
    description:
      "An interactive data visualization dashboard that presents real-time analytics and insights through dynamic charts and graphs.",
    image: "/logo.png",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "https://chronopulse.social/",
    year: "2025",
  },
  {
    id: "3",
    title: "GYM Management System",
    description:
      "A mobile app for managing gym memberships, tracking workouts, and connecting with trainers through real-time chat features.",
    image: "/projects/dashboard.svg",
    tags: ["c#", "Oracle SQL", "Visual Studio", "Entity Framework"],
    year: "2024",
  },
 
];
