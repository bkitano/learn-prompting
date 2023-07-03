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
          Dive into the world of LLMs and prompts, where technology meets
          language in a dance of possibilities.
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
                LLMs have taken the world by storm, and {`we're`} offering an
                exciting journey into the heart of LLMs and Prompt Engineering.
                This course is designed to equip you with the knowledge and
                skills to converse efficiently with LLMs, opening up a world of
                opportunities.
              </Typography>
              <br />
              <Typography variant="body1">
                Through this course, you will learn to shape prompts that guide
                LLMs in providing you with the answers you seek. By the end of
                this course, {`you'll`} have a solid foundation in crafting
                prompts that make your interactions with LLMs more effective and
                productive.
              </Typography>
              <br />
              <Typography variant="body1">
                Whether {`you're`} a seasoned developer, a budding data
                scientist, a curious linguist, or simply someone passionate
                about AI and language, this course has something to offer you.
              </Typography>
              <br />
              <Typography variant="body1">
                Are you ready to step into the future of human-computer
                interaction? Join us today and {`let's`} start this thrilling
                journey together.
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
