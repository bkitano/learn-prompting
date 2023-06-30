import { Typography } from "@mui/material";

const MeetThePromptEditor = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to the Prompt Editor
      </Typography>
      <Typography variant="h5">
        Now that we understand the problem, let's explore a powerful solution -
        the Prompt Editor.
      </Typography>
      <br />
      <Typography variant="body1">
        With <span style={{ fontWeight: "bold" }}>Prompt Engineering</span>, we
        can design prompts that guide the LLM to help us classify actions as
        compliant or non-compliant. The{" "}
        <span style={{ fontWeight: "bold" }}>Prompt Editor</span> is where you
        will craft these prompts. It's just like explaining to a person how to
        do a task.
      </Typography>
      <br />
      <Typography>
        Hit "Run" to execute the default text present in the editor. Don't worry
        about making mistakes.
      </Typography>
      <br />
      <Typography>
        Ready for the next challenge? Click "Next" to continue.
      </Typography>
    </>
  );
};

export { MeetThePromptEditor };
