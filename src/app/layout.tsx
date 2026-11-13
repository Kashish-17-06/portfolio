import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kashish-portfolio.vercel.app"),
  title: "Kashish — Software Engineering & Full-Stack Intern Portfolio",
  description:
    "Portfolio of Kashish, CS '28 at BPS Mahila Vishwavidyalaya. Building full-stack products for real-world problems: KrishiPath, Auronyx (SIH 2026), and more.",
  keywords: [
    "Kashish",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Smart India Hackathon 2026",
    "KrishiPath",
    "Auronyx",
  ],
  authors: [{ name: "Kashish", url: "https://github.com/Kashish-17-06" }],
  creator: "Kashish",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kashish-portfolio.vercel.app",
    title: "Kashish — Software Engineering & Full-Stack Portfolio",
    description:
      "I turn real-world problems into full-stack products. CS '28 · Hackathon builder · Open to SDE, frontend, and full-stack internships.",
    siteName: "Kashish Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kashish Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashish — Software Engineering & Full-Stack Portfolio",
    description:
      "CS '28 · Hackathon builder · Open to SDE, frontend and full-stack internships",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans min-h-screen bg-[#0B0B0F] text-[#F5F5F0] transition-colors duration-300 selection:bg-[#C6FF3D] selection:text-[#0B0B0F] antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
