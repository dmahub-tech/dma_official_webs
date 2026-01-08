/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../../public/css/plugins/bootstrap.min.css";
import "../../public/css/plugins.css";
import "../../public/css/style.css";

import ProgressScroll from "@/dva/components/Progress-Scroll";
import Script from "next/script";
import Navbar from "@/dva/components/NavBar";
import StickyBar from "@/dva/components/StickyBar";




export const metadata: Metadata = {
  title: "Digital MasterMind Academy",
  description: "Digital MasterMind Academy",
  keywords: "Digital MasterMind Academy, Web Development, Web Design, Mobile App Development, Digital Marketing, SEO, SMM, SEM, SMO, PPC, Content Marketing, Email Marketing, Influencer Marketing, Affiliate Marketing, Web Development Company, Web Design Company, Mobile App Development Company, Digital Marketing Company, SEO Company, SMM Company, SEM Company, SMO Company, PPC Company, Content Marketing Company, Email Marketing Company, Influencer Marketing Company, Affiliate Marketing Company",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Akronim&display=swap"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
    </head>
    <body>
    <StickyBar />
    {children}
    <ProgressScroll/>
    <Script strategy="beforeInteractive" src="/js/cal.js"></Script>
    <Script strategy="beforeInteractive" src="/js/bootstrap.bundle.min.js"></Script>
    <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
    <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
    <Script strategy="beforeInteractive" src="/js/simpleParallax.min.js"></Script>
    <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
    <Script strategy="beforeInteractive" src="/js/parallax.min.js"></Script>
    <Script strategy="lazyOnload" src="/js/main.js"></Script>
    </body>
    </html>
  );
}
