export interface Tool {
  id: string;
  name: string;
  category: string;
  icon: string;
  description?: string;
}

export const tools: Tool[] = [
  {
    id: "1",
    name: "Next.js",
    category: "Framework",
    icon: "nextjs",
    description: "React framework for production",
  },
  {
    id: "2",
    name: "React",
    category: "Library",
    icon: "react",
    description: "UI component library",
  },
  {
    id: "3",
    name: "TypeScript",
    category: "Language",
    icon: "typescript",
    description: "Typed JavaScript at scale",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    category: "Styling",
    icon: "tailwind",
    description: "Utility-first CSS framework",
  },
  {
    id: "5",
    name: "Figma",
    category: "Design",
    icon: "figma",
    description: "Collaborative design tool",
  },
  {
    id: "6",
    name: "Node.js",
    category: "Runtime",
    icon: "nodejs",
    description: "JavaScript runtime",
  },
  {
    id: "7",
    name: "PostgreSQL",
    category: "Database",
    icon: "postgresql",
    description: "Relational database",
  },
  {
    id: "8",
    name: "Git",
    category: "Version Control",
    icon: "git",
    description: "Distributed version control",
  },
  {
    id: "9",
    name: "Docker",
    category: "DevOps",
    icon: "docker",
    description: "Container platform",
  },
];
