import { Metadata } from "next";
import GymProjectContent from "./GymProjectContent";

export const metadata: Metadata = {
  title: "GYM Management System",
  description:
    "A comprehensive gym management system built with C#, Oracle SQL, and Entity Framework. Features member registration, workout tracking, trainer-client chat, and membership billing.",
  keywords: [
    "GYM Management System",
    "C# Project",
    "Oracle SQL",
    "Entity Framework",
    "Fitness App",
    "Membership Management",
    "Workout Tracking",
    "Talha Daud Project",
  ],
  openGraph: {
    title: "GYM Management System | Talha Daud",
    description:
      "A comprehensive gym management system with member registration, workout tracking, and real-time trainer chat.",
    url: "https://talhadaud.me/projects/gym",
    type: "article",
    images: [
      {
        url: "/projects/dashboard.svg",
        width: 1200,
        height: 630,
        alt: "GYM Management System Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GYM Management System | Talha Daud",
    description:
      "A comprehensive gym management system with member registration, workout tracking, and real-time trainer chat.",
    images: ["/projects/dashboard.svg"],
  },
  alternates: {
    canonical: "https://talhadaud.me/projects/gym",
  },
};

// JSON-LD for the project
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GYM Management System",
  description:
    "A mobile app for managing gym memberships, tracking workouts, and connecting with trainers through real-time chat features.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  author: {
    "@type": "Person",
    name: "Talha Daud",
    url: "https://talhadaud.me",
  },
  datePublished: "2024",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function GymProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GymProjectContent />
    </>
  );
}
