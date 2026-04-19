import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Rapacioli | Content Designer & Strategist | UX | AI-driven workflows",
  description:
    "Content Designer & Strategist con experiencia en servicios financieros, banca digital y campañas B2B. Diseño sistemas de contenido y combino escritura human-centered con el uso estratégico de IA.",
  openGraph: {
    title: "Juan Rapacioli | Content Designer & Strategist | UX | AI-driven workflows",
    description:
      "Content Designer & Strategist | UX | AI-driven workflows. Experiencia en servicios financieros, banca digital y campañas B2B.",
    type: "website",
    locale: "es_AR",
    siteName: "Juan Rapacioli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Rapacioli | Content Designer & Strategist | UX | AI-driven workflows",
    description:
      "Content Designer & Strategist | UX | AI-driven workflows. Experiencia en servicios financieros, banca digital y campañas B2B.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
