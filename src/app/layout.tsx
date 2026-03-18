import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.makekembavhutali.co.za"), // ✅ ADD THIS

  title: "Makekemba Vhutali | Full-Stack Software Developer",
  description:
    "Makekemba Vhutali is a full-stack software developer from South Africa specializing in secure, scalable web applications using Next.js, TypeScript, C#, and modern cloud technologies.",
  keywords: [
    "Makekemba Vhutali",
    "full stack developer South Africa",
    "Next.js developer",
    "TypeScript developer",
    "C# developer",
    "web application security",
    "Mmuso Code",
    "mmusocode"
  ],
  authors: [{ name: "Makekemba Vhutali" }],

  openGraph: {
    title: "Makekemba Vhutali | Full-Stack Software Developer",
    description:
      "Portfolio of Makekemba Vhutali, a full-stack developer building modern, secure web applications.",
    url: "https://makekembavhutali.co.za",
    siteName: "Makekemba Vhutali Portfolio",
    type: "website",
    images: [
      {
        url: "/images/makekemba-vhutali-software-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Makekemba Vhutali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Makekemba Vhutali | Full-Stack Software Developer",
    description:
      "Portfolio of Makekemba Vhutali, a full-stack developer building modern, secure web applications.",
    images: ["/images/makekemba-vhutali-software-developer.jpg"],
  },

  icons: {
    icon: "/images/makekemba-vhutali-software-developer.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#000000] text-[#F9FAFB] antialiased">
        {children}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Makekemba Vhutali",
                alternateName: "Makekemba Vhutali Developer",
                jobTitle: "Full-Stack Software Developer",
                url: "https://makekembavhutali.co.za",
                image: "https://makekembavhutali.co.za/images/makekemba-vhutali-software-developer.jpg",
                inLanguage: "en-ZA",

                knowsAbout: [
                  "Full Stack Development",
                  "Next.js",
                  "TypeScript",
                  "C#",
                  "Cybersecurity",
                  "Web Application Security",
                  "Software Architecture"
                ],

                alumniOf: {
                  "@type": "EducationalOrganization",
                  "name": "Nelson Mandela University"
                },

                address: {
                  "@type": "PostalAddress",
                  "addressCountry": "ZA"
                },

                sameAs: [
                  "https://github.com/makekemba-cloud",
                  "https://linkedin.com/in/makekemba-vhutali",
                  "https://x.com/Makekembavhutal",
                  "https://www.instagram.com/mmuso.0/",
                  "https://www.facebook.com/Mmuso.0",
                  "https://www.youtube.com/@makekembavhutali6820",
                  "https://www.tiktok.com/@makekemba_vhutali"
                ],

                worksFor: {
                  "@type": "Organization",
                  name: "Mmuso Code",
                  url: "https://mmusocode.co.za"
                },

                founder: {
                  "@type": "Organization",
                  name: "Mmuso Code"
                },

                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+27729473009",
                  contactType: "personal",
                  areaServed: "ZA",
                  availableLanguage: "English"
                }
              }
            ]),
          }}
        />
      </body>
    </html>
  );
}