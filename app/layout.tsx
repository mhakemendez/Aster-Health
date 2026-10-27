import type { Metadata, Viewport } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://asterhealth.example";
const socialImage =
  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aster Health | Primary Care That Fits Your Life",
    template: "%s | Aster Health",
  },
  description:
    "Aster Health is a modern primary care clinic offering same-day appointments, preventive care, chronic condition support, and family medicine in a calm, welcoming setting.",
  applicationName: "Aster Health",
  keywords: [
    "primary care clinic",
    "family medicine",
    "same-day doctor appointment",
    "preventive care",
    "Aster Health",
  ],
  authors: [{ name: "Aster Health" }],
  creator: "Aster Health",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aster Health",
    title: "Aster Health | Primary Care That Fits Your Life",
    description:
      "Same-day appointments, thoughtful preventive care, and a care team that knows your name.",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Aster Health primary care provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aster Health | Primary Care That Fits Your Life",
    description:
      "Same-day appointments, thoughtful preventive care, and a care team that knows your name.",
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2b2a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
