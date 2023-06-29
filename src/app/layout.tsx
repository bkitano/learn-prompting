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
        <Grid
          container
          direction={"column"}
          justifyContent={"space-between"}
          style={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <Grid item>
            <TopNav />

            {children}
          </Grid>
          <Grid item>
            <BottomNav />
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
