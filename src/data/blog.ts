export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Design Systems with React",
    snippet:
      "Exploring the principles and patterns behind creating maintainable design systems that scale with your team and product.",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    slug: "building-scalable-design-systems",
    tags: ["React", "Design Systems", "Architecture"],
  },
  {
    id: "2",
    title: "The Art of Smooth Animations in Web Development",
    snippet:
      "A deep dive into creating performant, delightful animations using CSS and Framer Motion for modern web applications.",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    slug: "art-of-smooth-animations",
    tags: ["Animation", "Framer Motion", "Performance"],
  },
  {
    id: "3",
    title: "Why TypeScript is Essential for Large Projects",
    snippet:
      "Understanding how static typing improves developer experience, catches bugs early, and makes refactoring a breeze.",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    slug: "typescript-essential-large-projects",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    id: "4",
    title: "Modern State Management Patterns in 2025",
    snippet:
      "Comparing different state management solutions and when to use each one for optimal application architecture.",
    date: "Sep 22, 2025",
    readTime: "10 min read",
    slug: "modern-state-management-patterns",
    tags: ["State Management", "React", "Architecture"],
  },
];
