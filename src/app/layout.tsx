import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://national-teacher-qualification-exam-china.koydo.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Koydo National Teacher Qualification Exam China",
    default: "Koydo National Teacher Qualification Exam China — Exam Prep",
  },
  description: "National Teacher Qualification Exam China exam preparation. Practice questions, mock tests, and AI-powered study tools. Study aid only. Not affiliated with official examination boards.",
  authors: [{ name: "Koydo", url: "https://koydo.app" }],
  creator: "Koydo",
  publisher: "Koydo",
  category: "education",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
