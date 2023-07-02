"use client";

import { BottomNav } from "@/Components/BottomNav";
import { TopNav } from "@/Components/TopNav";
import { Grid } from "@mui/material";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ED063SLL0V"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ED063SLL0V');`,
        }}
      />
      <body className={inter.className}>
        <div>
          <div
            style={{
              // these styles are so the header stays at the top
              // of the viewport, no matter what
              width: "100%",
            }}
          >
            <TopNav />
          </div>
          {children}
          <div
            style={{
              // these styles are so the footer stays at the bottom
              // of the viewport, no matter what
              position: "fixed",
              bottom: 0,
              width: "100%",
            }}
          >
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
