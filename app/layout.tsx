import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Rapacioli — Content Designer",
  description:
    "Content Designer with expertise in financial services and digital banking. Connecting business objectives with user needs through clarity, consistency, and closeness.",
  openGraph: {
    title: "Juan Rapacioli — Content Designer",
    description:
      "Content Designer | UX Writing & Content Strategy. Expertise in financial services and digital banking.",
    type: "website",
    locale: "en_US",
    siteName: "Juan Rapacioli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Rapacioli — Content Designer",
    description:
      "Content Designer | UX Writing & Content Strategy. Expertise in financial services and digital banking.",
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
