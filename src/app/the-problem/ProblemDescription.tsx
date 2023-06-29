import { Typography } from "@mui/material";

const ProblemDescription = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Understanding the Problem
      </Typography>
      <Typography variant="h5">
        As we delve deeper into LLMs and prompting, let's begin by identifying
        the problem we're tackling.
      </Typography>
      <br />
      <Typography variant="body1">
        The problem is to classify whether a given action is{" "}
        <span style={{ fontWeight: "bold" }}>compliant</span> or
        <span style={{ fontWeight: "bold" }}>non-compliant</span>. The basis of
        this classification can be various rules or norms that we define.
      </Typography>
      <br />
      <Typography>
        You can view different test cases and their classifications in the{" "}
        <span style={{ fontWeight: "bold" }}>Test case viewer</span>. For now,
        observe and get familiar with the interface and test case
        classifications. Don't worry, you'll get to interact more with it in the
        coming lessons!
      </Typography>
      <br />
      <Typography>
        Ready to take a step further? Click the "Next" button to continue.
      </Typography>
    </>
  );
};

export { ProblemDescription };
