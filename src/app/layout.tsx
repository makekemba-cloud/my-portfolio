import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import emailjs from '@emailjs/browser';

emailjs.init("KILymnp7Qzb46rSiD");

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Makekemba Vhutali | Fullstack Developer",
  description: "Fullstack developer specializing in secure, modern web applications. Security-focused, SaaS enthusiast.",
  keywords: ["fullstack", "developer", "react", "nextjs", "typescript", "security"],
  icons: {
    icon: '/images/Image Mar 6, 2026, 08_02_24 PM.png',  // 👈 add this
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#000000] text-[#F9FAFB] antialiased">
        {children}
      </body>
    </html>
  );
}