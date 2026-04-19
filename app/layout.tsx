import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Rapacioli | Content Designer & Strategist | UX | AI-driven workflows",
  description:
    "Content Designer & Strategist with experience in financial services, digital banking, B2B campaigns, and AI-driven workflows. Connecting business objectives with user needs.",
  openGraph: {
    title: "Juan Rapacioli | Content Designer & Strategist | UX | AI-driven workflows",
    description:
      "Content Designer & Strategist | UX | AI-driven workflows. Experience in financial services, digital banking, and B2B campaigns.",
    type: "website",
    locale: "en_US",
    siteName: "Juan Rapacioli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Rapacioli | Content Designer & Strategist | UX | AI-driven workflows",
    description:
      "Content Designer & Strategist | UX | AI-driven workflows. Experience in financial services, digital banking, and B2B campaigns.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
