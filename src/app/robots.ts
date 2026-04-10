import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://national-teacher-qualification-exam-china.koydo.app/sitemap.xml",
    host: "https://national-teacher-qualification-exam-china.koydo.app",
  };
}
