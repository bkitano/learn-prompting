"use client";

import { BottomNav } from "@/Components/BottomNav";
import { TopNav } from "@/Components/TopNav";
import {
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { get } from "lodash";
import { Inter } from "next/font/google";
import Script from "next/script";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

let theme = createTheme({
  palette: {
    background: {
      default: `rgb(30,30,30)`,
    },
    text: {
      primary: `rgb(255,255,255)`,
      secondary: `rgb(0,0,0)`,
    },
  },
});
theme = responsiveFontSizes(theme);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bottomRef = useRef(null);
  const height = get(bottomRef, "current.clientHeight");

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              marginBottom: height,
            }}
          >
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
              ref={bottomRef}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
