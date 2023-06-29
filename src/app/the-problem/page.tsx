"use client";

import { ProblemDescription } from "@/Components/Instructions/lessons/ProblemDescription";
import { Grid } from "@mui/material";
import { Editor } from "../../Components/Editor";
import { TestCases } from "../../Components/TestCases";

export default function TheProblem() {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <ProblemDescription />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Editor
          {...{
            initialValue: `// Welcome to the Code Editor!`,
          }}
        />
        <TestCases />
      </Grid>
    </Grid>
  );
}
