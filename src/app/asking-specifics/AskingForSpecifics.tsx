import { Typography } from "@mui/material";

export const AskingForSpecifics = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Asking for Specifics
    </Typography>
    <Typography variant="h5">
      Communication is the key, especially when you want specifics from your
      LLM.
    </Typography>
    <br />
    <Typography variant="body1">
      We can ask the LLM for a specific format for our answer. In our case, we
      want a <span style={{ fontWeight: "bold" }}>YES|NO</span> response from
      the LLM, along with an explanation if the answer is NO. This gives us a
      clearer, more concise decision making framework.
    </Typography>
    <br />
    <Typography>
      Add instructions to your prompt that ask for a YES or NO response, then
      click "Run". This is how you start shaping your LLM's responses to meet
      your needs.
    </Typography>
    <br />
    <Typography>
      Ready to unlock more techniques? Click "Next" to continue.
    </Typography>
  </>
);