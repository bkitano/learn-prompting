"use client";

import { Button, Grid, Typography } from "@mui/material";
import { Editor } from "@/Components/Editor";
import { useEffect, useState } from "react";
import { TestCase } from "@/resources/testCases";
import { testCases as defaultTestCases } from "@/resources/testCases";
import useSessionStorage from "@/hooks/useSessionStorage";
import { TestCasesView } from "@/Components/TestCases";

export default function Page() {
  const [prompt, setPrompt] = useState<string | null>(null);
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
        <Typography>
          <Typography variant="h1" align="center" gutterBottom>
            agents
            <span
              style={{
                color: "blue",
              }}
            >
              .blue
            </span>
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Master the art of communicating with Large Language Models.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            Dive into the world of LLMs and prompts, where technology meets
            language in a dance of possibilities.
          </Typography>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "80%" }}>
              <Typography variant="body1">
                LLMs have taken the world by storm, and we're offering an
                exciting journey into the heart of LLMs and Prompt Engineering.
                This course is designed to equip you with the knowledge and
                skills to converse efficiently with LLMs, opening up a world of
                opportunities.
              </Typography>
              <br />
              <Typography variant="body1">
                Through this course, you will learn to shape prompts that guide
                LLMs in providing you with the answers you seek. By the end of
                this course, you'll have a solid foundation in crafting prompts
                that make your interactions with LLMs more effective and
                productive.
              </Typography>
              <br />
              <Typography variant="body1">
                Whether you're a seasoned developer, a budding data scientist, a
                curious linguist, or simply someone passionate about AI and
                language, this course has something to offer you.
              </Typography>
              <br />
              <Typography variant="body1">
                Are you ready to step into the future of human-computer
                interaction? Join us today and let's start this thrilling
                journey together.
              </Typography>
            </div>
          </div>
          <br />
          <Typography variant="h6" align="center" gutterBottom>
            Play around with our editor and test cases below to get a feel for
            what you'll be learning in this course, and click Next when you're
            ready to get started.
          </Typography>
          <br />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Editor
          {...{
            initialValue: prompt || "",
            placeholder: `Ask for a specific YES or NO answer in your prompt.`,
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
