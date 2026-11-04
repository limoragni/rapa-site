import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juanrapacioli.com"),
  title: "Juan Rapacioli · Content Designer & Strategist",
  description:
    "UX Writing y Content Design para banca digital y B2B. Diseño sistemas de contenido, defino estrategia y mido resultados con foco en las personas usuarias.",
  openGraph: {
    title: "Juan Rapacioli · Content Designer & Strategist",
    description:
      "Content Designer & Strategist · UX Writing · Branding · Content Strategy · AI workflows. Experiencia en servicios financieros, banca digital y campañas B2B.",
    type: "website",
    locale: "es_AR",
    siteName: "Juan Rapacioli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Rapacioli · Content Designer & Strategist",
    description:
      "Content Designer & Strategist · UX Writing · Branding · Content Strategy · AI workflows. Experiencia en servicios financieros, banca digital y campañas B2B.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
