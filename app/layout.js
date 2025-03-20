import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/500.css"; // Medium
import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"], // Choose weights you need
  variable: "--font-inter", // Custom CSS variable
});


export const metadata = {
  title: "Uccodetech - Professional Portfolio & Development Services",
  description: "Professional portfolio showcasing web development, design services, and technical expertise. Explore my projects, skills, and services.",
  keywords: "web development, portfolio, frontend developer, backend developer, full-stack developer, React, Next.js",
  authors: [{ name: "Uccodetech" }],
  openGraph: {
    title: "Uccodetech - Professional Portfolio & Development Services",
    description: "Professional portfolio showcasing web development, design services, and technical expertise.",
    type: "website",
    locale: "en_US",
    siteName: "Uccodetech Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uccodetech - Professional Portfolio & Development Services",
    description: "Professional portfolio showcasing web development, design services, and technical expertise.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
