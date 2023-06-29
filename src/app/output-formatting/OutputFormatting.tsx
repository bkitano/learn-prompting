import { Typography } from "@mui/material";

export const OutputFormatting = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Output Formatting
    </Typography>
    <Typography variant="h5">
      Let's learn to make our output more organized and accessible.
    </Typography>
    <br />
    <Typography variant="body1">
      To make our results more readable and programmatically accessible, we can
      ask the LLM to provide output in a specific format. In this lesson, we
      will explore how to ask for{" "}
      <span style={{ fontWeight: "bold" }}>XML</span> output.
    </Typography>
    <br />
    <Typography>
      Structured output helps in better post-processing of the LLM's responses
      and integrating them into larger workflows. Stay tuned to learn more about
      it!
    </Typography>
    <br />
    <Typography>
      Excited for the next lesson? Click "Next" to continue.
    </Typography>
  </>
);
