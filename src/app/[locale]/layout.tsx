import "@/app/globals.css";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const PERSON_NAME = "Arry Kusuma Putra";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>): Promise<Metadata> {
  const { locale } = await params;
  const isIndonesia = locale === "id";
  const pageTitle = isIndonesia
    ? `${PERSON_NAME} | Web Developer & Mobile Developer`
    : `${PERSON_NAME} | Web Developer & Mobile Developer`;
  const description = isIndonesia
    ? "Portfolio resmi Arry Kusuma Putra, berisi proyek web dan mobile, pengalaman kerja, sertifikat, serta informasi kontak."
    : "Official portfolio of Arry Kusuma Putra featuring web and mobile projects, work experience, certifications, and contact details.";

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    applicationName: `${PERSON_NAME} Portfolio`,
    keywords: [
      "Arry Kusuma Putra",
      "Arry Putra",
      "Portfolio Arry Kusuma Putra",
      "Web Developer",
      "Mobile Developer",
      "Flutter Developer",
      "Next.js Developer",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      locale: isIndonesia ? "id_ID" : "en_US",
      url: `/${locale}`,
      siteName: `${PERSON_NAME} Portfolio`,
      title: pageTitle,
      description,
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: "75d7Wy5QYkwlp_6BR63gQTWVFtW1kJuA3LzceXNSEvE"
    }
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const isIndonesia = locale === "id";

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON_NAME,
    alternateName: "Arry Putra",
    url: `${SITE_URL}/${locale}`,
    jobTitle: ["Web Developer", "Mobile Developer"],
    image: `${SITE_URL}/sit-and-smile-guy.png`,
    email: "mailto:arrykusumaputra04@gmail.com",
    telephone: "+62 813 5044 5065",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Banjarbaru",
      addressRegion: "Kalimantan Selatan",
      addressCountry: "ID",
    },
    sameAs: [
      "https://www.linkedin.com/in/arry-kusuma-putra/",
      "https://www.instagram.com/rryputra/",
      "https://wa.me/6281350445065",
    ],
    description: isIndonesia
      ? "Web Developer dan Mobile Developer dari Indonesia."
      : "Web and Mobile Developer from Indonesia.",
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet'></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
