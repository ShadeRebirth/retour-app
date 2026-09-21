import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Retour — le rappel qui fait revenir vos clients",
  description:
    "Un client satisfait ne revient pas parce qu'il oublie. Retour envoie automatiquement le rappel qu'il fallait, au bon moment.",
  openGraph: {
    title: "Retour — le rappel qui fait revenir vos clients",
    description:
      "Un client satisfait ne revient pas parce qu'il oublie. Retour envoie automatiquement le rappel qu'il fallait, au bon moment.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="bg-forest text-ivory font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
