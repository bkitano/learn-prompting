"use client";

import { Grid, Typography } from "@mui/material";
import { EditorExample } from "@/Components/EditorExample";

export default function Page() {
  return (
    <Grid
      container
      columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
      padding={5}
      spacing={2}
    >
      <Grid
        item
        {...{
          xs: 12,
          sm: 12,
          md: 12,
          lg: 6,
          xl: 6,
        }}
      >
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
          Master prompting with Large Language Models.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Learn prompting by doing, for free, in 10 minutes.
        </Typography>
      </Grid>
      <Grid
        item
        {...{
          xs: 12,
          sm: 12,
          md: 12,
          lg: 6,
          xl: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <EditorExample>{`Write a poem about love.`}</EditorExample>
        </div>
        <br />
      </Grid>
      <Grid
        item
        {...{
          xs: 12,
          sm: 12,
          md: 12,
          lg: 6,
          xl: 6,
        }}
      >
        <Typography>
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
                If you want to build a chatbot, automate your emails, or
                anything else with LLMs, you need to know how to use them.
                Prompting is how you instruct LLMs to do what you want, and the
                difference between a good prompt and a bad prompt can be the
                difference between success and failure.
              </Typography>
              <br />
              <Typography variant="body1">
                agents.blue is the fastest, easiest, and interactive way to
                learn how to prompt LLMs. You can learn by doing, and you can do
                it in 10 minutes, without any coding required. From start to
                finish, {`you'll`} learn how to prompt LLMs, and use your new skills
                to build your own projects.
              </Typography>
            </div>
          </div>
          <br />
          <Typography variant="h6" align="center" gutterBottom>
            Play around with our editor, then click Next when {`you're`} ready
            to get started.
          </Typography>
          <br />
        </Typography>
      </Grid>
    </Grid>
  );
}
