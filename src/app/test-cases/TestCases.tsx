import { testCases } from "@/resources/testCases";
import { Typography } from "@mui/material";

export const TestCases = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Test Cases
    </Typography>
    <Typography variant="h5">
      So how do we go about making sure our LLM is checking compliance well? We{" "}
      test it with examples.
    </Typography>
    <br />
    <Typography>
      The first principle of prompt engineering (and all engineering, really) is
      to pick a small task, make sure it works, and then grow from there. For us
      as lawyers building a compliance checking tool, we can start by testing
      our tool with a few examples on a specific part of compliance law.
    </Typography>
    <br />
    <Typography>
      {`We're`} going to test on a specific part of the law called the{" "}
      <a href="https://www.justice.gov/criminal-fraud/foreign-corrupt-practices-act">
        <span
          style={{
            fontWeight: "bold",
            color: "#3fb1ff",
            textDecoration: "underline",
          }}
        >
          Foreign Corrupt Practices Act
        </span>
      </a>
      , or <span style={{ fontWeight: "bold" }}>FCPA</span> for short. The FCPA
      is a law that prohibits companies from bribing foreign officials to obtain
      or retain business. {`We're`} going to test our LLM on a few examples of
      actions that may or may not be compliant with the FCPA.
    </Typography>
    <br />
    <Typography>
      Testing with examples is the easiest way to see if a language model is
      doing what we want it to do. We call these examples{" "}
      <span style={{ fontWeight: "bold" }}>test cases</span>. {`We've`} picked a set
      of {testCases.length} cases that span a variety of situations. {`We've`} also
      classified each case as{" "}
      <span style={{ fontWeight: "bold" }}>compliant</span> or{" "}
      <span style={{ fontWeight: "bold" }}>non-compliant</span> with the FCPA.
    </Typography>
    <br />
    <Typography>
      You can view different test cases and their classifications in the{" "}
      <span style={{ fontWeight: "bold" }}>Test case viewer</span>. For now,
      observe and get familiar with the interface and test case classifications.
      {` Don't`} worry, {`you'll`} get to interact more with it in the coming lessons!
    </Typography>
    <br />
    <Typography>
      Ready to take a step further? Click the {`"Next"`} button to continue.
    </Typography>
  </>
);
