import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import Navbar from "./component/Nav";
import { AdPopup } from "./component/AdPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovatex.csitabmc.com/"),
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
  authors: [{ name: "BMC InnovateX", url: "https://innovatex.csitabmc.com" }],
  openGraph: {
    title: "BMC InnovateX - National Level Hackathon",
    description:
      "Join BMC InnovateX, a national-level hackathon by the CSIT Association of Butwal Multiple Campus",
    url: "https://innovatex.csitabmc.com",
    siteName: "BMC InnovateX",
    images: [
      {
        url: "/BMC_InnovateX.png",
        width: 1200,
        height: 630,
        alt: "BMC InnovateX Hackathon",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742567539/favicon_wqflub.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742567539/favicon_wqflub.svg"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742567538/apple-touch-icon_qexcfm.png"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <AdPopup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
