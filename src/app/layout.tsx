import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Providers } from "@/providers/providers";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nextjs Starter Kit",
  description: "Nextjs Starter Kit By Nishanth Murugan",
  authors: {
    name: "Nishanth Murugan",
  },
  keywords: ["nextjs", "shadcnui", "starterKit", "nishanth"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex h-screen w-screen flex-col bg-background font-sans antialiased", fontSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}