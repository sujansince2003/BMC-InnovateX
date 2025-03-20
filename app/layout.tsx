import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header/Nav";
import Footer from "./component/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BMC InnovateX - Hackathon by CSIT Association of BMC",
  description:
    "BMC InnovateX is a national-level hackathon organized by the CSIT Association of Butwal Multiple Campus, fostering innovation and creativity in technology.",
  keywords: [
    "BMC InnovateX",
    "hackathon",
    "CSIT Association",
    "Butwal Multiple Campus",
    "coding competition",
    "technology event",
    "programming challenge",
    "innovation",
    "tech enthusiasts",
  ],
  authors: [
    { name: "CSIT Association of BMC", url: "https://innovatex.csitabmc.com" },
  ],
  openGraph: {
    title: "BMC InnovateX - National Level Hackathon",
    description:
      "Join BMC InnovateX, a national-level hackathon by the CSIT Association of Butwal Multiple Campus, and build tomorrow’s solutions today!",
    url: "https://innovatex.csitabmc.com",
    siteName: "BMC InnovateX",
    images: [
      {
        url: "/innovatexOg.png",
        width: 1200,
        height: 630,
        alt: "BMC InnovateX Hackathon Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMC InnovateX - National Hackathon",
    description:
      "BMC InnovateX is a national hackathon that invites tech enthusiasts to showcase their skills and innovate for the future.",
    images: ["/innovatexOg.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
