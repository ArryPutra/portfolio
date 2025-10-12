import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Arry Kusuma Putra",
  description: "Arry Kusuma Putra Portfolio Website",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={`${poppins.className} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
