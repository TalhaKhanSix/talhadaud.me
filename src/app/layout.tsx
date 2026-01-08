import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://talhadaud.me"),
  title: {
    default: "Talha Daud | Software Engineer & Full Stack Developer",
    template: "%s | Talha Daud",
  },
  description:
    "Talha Daud is a passionate Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Building exceptional user experiences and scalable web applications.",
  keywords: [
    "Talha Daud",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Node.js",
    "Portfolio",
    "Pakistan Developer",
    "Freelance Developer",
  ],
  authors: [{ name: "Talha Daud", url: "https://talhadaud.me" }],
  creator: "Talha Daud",
  publisher: "Talha Daud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/Logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talhadaud.me",
    siteName: "Talha Daud Portfolio",
    title: "Talha Daud | Software Engineer & Full Stack Developer",
    description:
      "Passionate Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Building exceptional user experiences.",
    images: [
      {
        url: "/talhadaud.jpeg",
        width: 1200,
        height: 630,
        alt: "Talha Daud - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Daud | Software Engineer & Full Stack Developer",
    description:
      "Passionate Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/talhadaud.jpeg"],
    creator: "@talhadaud",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://talhadaud.me",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Talha Daud",
  url: "https://talhadaud.me",
  image: "https://talhadaud.me/talhadaud.jpeg",
  sameAs: [
    "https://github.com/TalhaKhanSix",
    "https://linkedin.com/in/talhadaud",
    "https://twitter.com/talhadaud",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Web Development",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
