"use client";

import { Grid } from "@mui/material";
import { TestCases } from "../../Components/TestCases";
import { Editor } from "@/Components/Editor";
import { MeetThePromptEditor } from "./MeetThePromptEditor";

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
              showRunButton: false,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}
