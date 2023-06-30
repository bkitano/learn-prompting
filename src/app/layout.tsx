"use client";

import { BottomNav } from "@/Components/BottomNav";
import { TopNav } from "@/Components/TopNav";
import { Grid } from "@mui/material";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div
            style={
              {
                // these styles are so the header stays at the top
                // of the viewport, no matter what
                width: "100%",
              }
            }
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
