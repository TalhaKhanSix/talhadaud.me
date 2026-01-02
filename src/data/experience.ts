export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Innovators Inc.",
    logo: "/companies/tech-innovators.svg",
    role: "Senior Software Engineer",
    description:
      "Led development of scalable web applications serving millions of users. Architected microservices infrastructure and mentored junior developers. Implemented CI/CD pipelines reducing deployment time by 60%.",
    startDate: "Jan 2024",
    endDate: "Present",
    location: "San Francisco, CA",
    technologies: ["Next.js", "TypeScript", "AWS", "Docker"],
  },
  {
    id: "2",
    company: "Digital Solutions Ltd.",
    logo: "/companies/digital-solutions.svg",
    role: "Full Stack Developer",
    description:
      "Developed and maintained multiple client projects from conception to deployment. Built RESTful APIs and responsive front-end interfaces. Collaborated with design team to implement pixel-perfect UIs.",
    startDate: "Mar 2022",
    endDate: "Dec 2023",
    location: "Remote",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
  },
  {
    id: "3",
    company: "StartUp Hub",
    logo: "/companies/startup-hub.svg",
    role: "Frontend Developer",
    description:
      "Built interactive user interfaces for early-stage startups. Focused on performance optimization and accessibility. Contributed to open-source projects and internal component libraries.",
    startDate: "Jun 2021",
    endDate: "Feb 2022",
    location: "New York, NY",
    technologies: ["Vue.js", "Tailwind CSS", "Firebase"],
  },
];
