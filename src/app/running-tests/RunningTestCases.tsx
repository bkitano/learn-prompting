import { Typography } from "@mui/material";

const RunningTestCases = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Running Test Cases
    </Typography>
    <Typography variant="h5">
      It's time to run your first test cases using the Prompt Editor!
    </Typography>
    <br />
    <Typography variant="body1">
      But before we do, let's understand how curly brackets work in the editor.
      When you put a variable in{" "}
      <span style={{ fontWeight: "bold" }}>curly brackets</span>, the prompt
      will fill it with the variable value. This is a fundamental concept in
      programming that will power your prompt designing.
    </Typography>
    <br />
    <Typography>
      Try it yourself. Add a variable called "action" within curly brackets and
      hit "Run". This will execute the prompt on the test cases. Remember,
      practice is the key to mastering any skill!
    </Typography>
    <br />
    <Typography>
      Ready to deepen your understanding? Click "Next" to continue.
    </Typography>
  </>
);

export { RunningTestCases };
