"use client";

import { Grid } from "@mui/material";
import { TestCasesView as TestCases } from "../../Components/TestCases";
import { Editor } from "@/Components/Editor";
import { MeetThePromptEditor } from "./MeetThePromptEditor";
import { testCases } from "@/resources/testCases";

export default function Page() {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <MeetThePromptEditor />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Editor
          {...{
            initialValue: "Write me a poem about dinosaurs.",
          }}
        />
        <br />
        <div
          style={{
            opacity: 0.3,
          }}
        >
          <TestCases
            {...{
              hideRunButton: true,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}
