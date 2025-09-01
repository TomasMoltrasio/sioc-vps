import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/containers/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Fondado Negocios Inmobiliarios",
  description:
    "Bienvenido a Fondado Negocios Inmobiliarios, tu aliado en la compra, venta y alquiler de propiedades.",
  image: "/logo-fondado.webp",
  // ...other metadata
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="lemonade" lang="es" className={inter.variable}>
      <head>
        <title>Fondado Negocios Inmobiliarios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta property="og:title" content="Fondado Negocios Inmobiliarios" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-fondado.webp" />
      </head>
      <body className={inter.className}>
        <>
          <Navbar />
          <main className="flex h-full flex-col items-center justify-between px-2 md:px-4 bg-[#F4F3F2]">
            {children}
          </main>
          <Footer />
        </>
      </body>
    </html>
  );
}
