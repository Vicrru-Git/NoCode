import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NoCode Academy - Crea tu Negocio Digital en 90 Días",
  description: "Academia exclusiva que enseña a crear negocios digitales con herramientas NoCode e IA. Solo 10 plazas disponibles.",
  keywords: "NoCode, IA, negocios digitales, emprendimiento, formación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

