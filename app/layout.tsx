import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lineaar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "Lineaar | Creating digital experiences",
    template: "%s | Lineaar",
  },
  description:
    "Lineaar is built on the principle that structure creates trust. Our brand exists to bring clarity, order, and credibility to organizations that operate in complex environments. Every visual and verbal element of the Lineaar identity is designed to reflect discipline, intentionality, and calm confidence.",
  keywords: [
    "Lineaar",
    "digital experiences",
    "structure creates trust",
    "clarity",
    "order",
    "credibility",
    "complex environments",
    "brand identity",
    "discipline",
    "intentionality",
    "professional",
  ],
  authors: [{ name: "Lineaar", url: siteUrl }],
  creator: "Lineaar",
  publisher: "Lineaar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Lineaar",
    title: "Lineaar | Creating digital experiences",
    description:
      "Lineaar is built on the principle that structure creates trust. Bringing clarity, order, and credibility to organizations in complex environments.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lineaar – Creating digital experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lineaar | Creating digital experiences",
    description:
      "Lineaar is built on the principle that structure creates trust. Bringing clarity, order, and credibility to organizations in complex environments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a23" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lineaar",
  url: siteUrl,
  description:
    "Lineaar is built on the principle that structure creates trust. Our brand exists to bring clarity, order, and credibility to organizations that operate in complex environments. Every visual and verbal element of the Lineaar identity is designed to reflect discipline, intentionality, and calm confidence.",
  slogan: "Creating digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
