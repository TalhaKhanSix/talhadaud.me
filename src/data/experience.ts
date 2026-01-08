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
     company: "Academic & Practice Projects",
    logo: "/companies/education.svg",
    role: "Frontend Modern Technologies ",
    description:
      "Built multiple web applications using React, TypeScript, and modern frontend tools. Focused on clean UI, responsive design, and reusable components. Implemented authentication, dashboards, and REST API integrations.",
    startDate: "Sep 2025",
    endDate: "Present",
    location: "Pakistan",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    id: "2",
    company: "Personal Projects & Learning",
    logo: "/companies/self.svg",
    role: " Full-Stack Developer",
    description:
    "Developed full-stack applications as part of coursework and self-practice. Created REST APIs, handled databases, and connected backend services with frontend applications. Followed clean code and basic system design principles.",
      
    startDate: "Sep 2024",
    endDate: "August 2025",
    location: "Remote",
    technologies: ["Node.js", "Express", "MongoDB", "Oracle SQL" ],
   
  },
  {
    id: "3",
    company: " Practice Work",
    logo: "/companies/freelance.svg",
    role: "Frontend Developer",
    description:
      "Designed and built responsive websites and UI components. Focused on accessibility, performance optimization, and modern CSS practices. Converted designs into functional React components.",
    startDate: "Jun 2023",
    endDate: "August 2024",
    location: "Pakistan",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
];