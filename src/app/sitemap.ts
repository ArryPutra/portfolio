import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arryputra.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: `${SITE_URL}/en`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          id: `${SITE_URL}/id`,
        },
      },
    },
    {
      url: `${SITE_URL}/id`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          id: `${SITE_URL}/id`,
        },
      },
    },
  ];
}
