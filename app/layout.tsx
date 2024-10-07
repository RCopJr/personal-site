import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramonito Copreros Jr's Portfolio",
  description: "A minimal well designed portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className + " bg-neutral-950 text-neutral-400"}>
        {children}
      </body>
    </html>
  );
}
