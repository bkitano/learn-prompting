"use client";

import { ProblemDescription } from "@/app/the-problem/ProblemDescription";
import { Grid } from "@mui/material";
import { TestCases } from "../../Components/TestCases";

export default function TheProblem() {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <ProblemDescription />
      </Grid>
    </Grid>
  );
}
