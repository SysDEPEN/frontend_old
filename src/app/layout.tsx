import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Depen",
  description: "O melhor caminho para carteira de visitantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sofia.className + "bg-white"}>{children}</body>
    </html>
  );
}
