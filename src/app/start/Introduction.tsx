import { Typography } from "@mui/material";

const Introduction = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to agents.blue!
      </Typography>
      <Typography variant="h5">
        I'm Brian, I'm going to walk you through how LLMs work and how to
        interact with them more effectively.
      </Typography>
      <br />
      <Typography variant="body1">
        <span style={{ fontWeight: "bold" }}>
          Large Language Models (LLMs){" "}
        </span>
        are a new way to interact with computers, closer to the way that humans
        interact with each other. They are trained on large amounts of text, and
        can be used to generate text, answer questions, and perform other tasks.
      </Typography>
      <br />
      <Typography>
        In the same way that communicating clearly improves your interactions
        with people, communicating clearly with LLMs improves how effective they
        are. The set of techniques for talking with LLMs is called{" "}
        <span style={{ fontWeight: "bold" }}>prompting</span>. In this set of
        lessons, you'll learn how to use prompts to improve your interactions
        with LLMs.
      </Typography>
      <br />
      <Typography>
        Let's get started! Click the "Next" button below to continue.
      </Typography>
    </>
  );
};

export { Introduction };
