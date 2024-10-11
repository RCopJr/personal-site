import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramonito Copreros Jr | Software Engineer",
  description: "Ramonito Copreros Jr's developer portfolio",
  openGraph: {
    title: "Ramonito Copreros Jr | Software Engineer",
    siteName: "Ramonito Copreros Jr | Software Engineer",
    description: "Ramonito Copreros Jr's Personal Website",
    images: [
      {
        url: "https://www.ramonitocoprerosjr.vercel.app/thumbnail.png",
        alt: "Ramonito Copreros Jr's Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-400`}>
        {children}
      </body>
    </html>
  );
}
