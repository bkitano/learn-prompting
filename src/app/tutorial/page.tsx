"use client";

import Grid from "@mui/material/Grid";
import { Editor } from "../../Components/Editor";
import { Instructions } from "../../Components/Instructions/Instructions";
import { useState } from "react";
import { BottomNav } from "@/Components/BottomNav";
import { TopNav } from "@/Components/TopNav";
import { Board } from "@/Components/Board";
import { PageProvider } from "@/Components/PageContext";

export default function Home() {
  return (
    <PageProvider>
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
          <Board />
        </Grid>
        <Grid item>
          <BottomNav />
        </Grid>
      </Grid>
    </PageProvider>
  );
}
