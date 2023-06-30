"use client";

import { Grid } from "@mui/material";
import { TestCases } from "../../Components/TestCases";
import { Editor } from "@/Components/Editor";
import { StepByStep } from "./StepByStep";

export default function Page() {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <StepByStep />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Editor
          {...{
            initialValue: "",
          }}
        />
        <TestCases />
      </Grid>
    </Grid>
  );
}