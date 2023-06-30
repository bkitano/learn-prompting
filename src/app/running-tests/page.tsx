"use client";

import { Grid } from "@mui/material";
import { TestCasesView } from "../../Components/TestCases";
import { Editor } from "@/Components/Editor";
import { RunningTestCases } from "./RunningTestCases";
import { useState } from "react";
import { TestCase } from "@/resources/testCases";
import { testCases as defaultTestCases } from "@/resources/testCases";

export default function Page() {
  const [prompt, setPrompt] = useState<string | null>(null);

  const [testCases, setTestCases] = useState<TestCase[]>(defaultTestCases);

  const runCases = async (cases: TestCase[]) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/batch`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          inputs: cases,
        }),
      }
    );

    const { completions } = await response.json();
    console.log(completions);
    const newCases: TestCase[] = cases.map((testCase, index) => {
      return {
        ...testCase,
        response: completions[index].completion.text,
      };
    });
    setTestCases(newCases);
  };

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
        <TestCasesView
          {...{
            testCases,
            runCases: () => runCases(testCases),
            runButtonDisabled: prompt === null || prompt === "",
          }}
        />
      </Grid>
    </Grid>
  );
}
