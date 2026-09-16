import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: { default: "IEP Orlando Ortiz Ochoa | Un gran futuro comienza aquí", template: "%s | IEP Orlando Ortiz Ochoa" },
  description: "Descubre la propuesta educativa del IEP Orlando Ortiz Ochoa. Inicial, Primaria y Secundaria: aprendizaje, valores y acompañamiento en cada etapa.",
  applicationName: "IEP Orlando Ortiz Ochoa",
  icons: {
    icon: { url: "/images/escudo-colegio.png", type: "image/png", sizes: "1024x1024" },
  },
  openGraph: { title: "IEP Orlando Ortiz Ochoa", description: "Pequeños pasos. Grandes futuros. Conoce nuestra propuesta de Inicial, Primaria y Secundaria.", locale: "es_PE", type: "website" },
  twitter: { card: "summary", title: "IEP Orlando Ortiz Ochoa", description: "Aprender, crecer y trascender. Inicial, Primaria y Secundaria." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><Header />{children}<Footer /></body></html>;
}
