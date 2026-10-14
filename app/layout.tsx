import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: `${site.name} | Mobile and AI app development`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: projects[0] ? [{ url: projects[0].image }] : undefined,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-night text-fg antialiased">{children}</body>
    </html>
  );
}