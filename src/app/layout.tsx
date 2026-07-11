import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: "Reafirma 90: descubra sua rotina personalizada",
  description:
    "Em 2 minutos, descubra uma rotina pensada para reafirmar sua barriga no pós-parto, no seu ritmo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#fdf6f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
