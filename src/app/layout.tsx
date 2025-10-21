import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navigation from "@/components/layout/Navigation";
// import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doan Thanh Phuc - Full-stack Developer",
  description: "Portfolio of Doan Thanh Phuc, Full-stack Developer...",
  keywords: ["Full-stack Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Doan Thanh Phuc" }],
  openGraph: {
    title: "Doan Thanh Phuc - Full-stack Developer",
    description: "Portfolio showcasing my work as a Full-stack Developer",
    url: "https://yourportfolio.com",
    siteName: "Doan Thanh Phuc Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <Navigation /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
