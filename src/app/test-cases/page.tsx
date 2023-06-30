"use client";

import { Grid } from "@mui/material";
import { TestCases } from "../../Components/TestCases";
import { TestCases as TestCasesDescription } from "./TestCases";
import { Editor } from "@/Components/Editor";

export default function Page() {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <TestCasesDescription />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TestCases />
      </Grid>
    </Grid>
  );
}
