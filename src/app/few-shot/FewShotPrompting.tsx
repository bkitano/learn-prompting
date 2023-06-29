import { Typography } from "@mui/material";

export const FewShotPrompting = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Providing Examples - Few-shot prompting
    </Typography>
    <Typography variant="h5">
      Guide your LLM by showing it examples of what you want.
    </Typography>
    <br />
    <Typography variant="body1">
      <span style={{ fontWeight: "bold" }}>Few-shot prompting</span> is a
      technique where we provide the LLM with a few examples of the task we want
      it to perform. It's like giving it a little nudge in the right direction.
    </Typography>
    <br />
    <Typography>
      Practice creating a few-shot prompt. Remember, the goal is to make the LLM
      understand the task better by showing it how to do it.
    </Typography>
    <br />
    <Typography>Ready for more? Click "Next" to continue.</Typography>
  </>
);
