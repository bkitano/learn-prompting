"use client";

import { Grid } from "@mui/material";
import { TestCasesView } from "../../Components/TestCases";
import { Editor } from "@/Components/Editor";
import { useEffect, useRef, useState } from "react";
import { TestCase } from "@/resources/testCases";
import { testCases as defaultTestCases } from "@/resources/testCases";
import useSessionStorage from "@/hooks/useSessionStorage";
import { OutputFormatting } from "./OutputFormatting";

export default function Page() {
  const { storedValue: storedPrompt, storeSessionValue: storePrompt } =
    useSessionStorage("prompt");

  const [prompt, setPrompt] = useState<string | null>(storedPrompt);

  useEffect(() => {
    setPrompt(storedPrompt);
  }, [storedPrompt]);

  const promptRef = useRef<string | null>();
  promptRef.current = prompt;

  useEffect(
    () => () => {
      storePrompt(promptRef.current);
    },
    []
  );
  
  const [testCases, setTestCases] = useState<TestCase[]>(defaultTestCases);
  const [loading, setLoading] = useState<boolean>(false);

  const runCases = async (cases: TestCase[]) => {
    setLoading(true);
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
    const newCases: TestCase[] = cases.map((testCase, index) => {
      return {
        ...testCase,
        response: completions[index].completion.text,
      };
    });
    setLoading(false);
    setTestCases(newCases);
  };

  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <OutputFormatting />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Editor
          {...{
            initialValue: prompt || "",
            placeholder: `Provide instructions on how to format your responses.`,
            onPromptChange: (value: string) => {
              setPrompt(value);
            },
          }}
        />
        <br />
        <TestCasesView
          {...{
            testCases,
            loading,
            runCases: () => runCases(testCases),
            runButtonDisabled: prompt === null || prompt === "",
          }}
        />
      </Grid>
    </Grid>
  );
}
