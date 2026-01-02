import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Talha Daud | Software Engineer",
  description: "Software Engineer passionate about creating exceptional user experiences with modern web technologies.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Talha Daud" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Talha Daud |",
    description: "Software Engineer passionate about creating exceptional user experiences.",
    url: "https://talhadaud.me",
    siteName: "Talha Daud Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
