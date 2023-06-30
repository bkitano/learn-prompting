"use client";

import { Grid } from "@mui/material";
import { TestCases } from "../../Components/TestCases";
import { Editor } from "@/Components/Editor";
import { RunningTestCases } from "./RunningTestCases";
import { useState } from "react";

export default function Page() {
  const [prompt, setPrompt] = useState<string | null>(null);
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <RunningTestCases />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Editor
          {...{
            initialValue: "",
            placeholder: `Write a prompt that uses a variable called "action" in double brackets here.`,
            onPromptChange: (value: string) => {
              setPrompt(value);
            },
          }}
        />
        <br />
        <TestCases
          {...{
            runButtonDisabled: prompt === null || prompt === "",
          }}
        />
      </Grid>
    </Grid>
  );
}
