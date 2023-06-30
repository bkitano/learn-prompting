import { Typography } from "@mui/material";

const ProblemDescription = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        The Challenge
      </Typography>
      <Typography variant="h5">
        As we delve deeper into LLMs and prompting, let's begin by setting up
        the challenge we're tackling.
      </Typography>
      <br />
      <Typography variant="body1">
        Put on your lawyer hats, because today we are going to become Chief of
        Compliance at agents.blue!
      </Typography>
      <br />
      <Typography variant="body1">
        Our employees are constantly performing actions that may or may not be
        compliant with our company's policies. We need to classify these actions
        as <span style={{ fontWeight: "bold" }}>compliant</span> or{" "}
        <span style={{ fontWeight: "bold" }}>non-compliant</span> to make sure
        that all our employees are following the company's rules and
        regulations.
      </Typography>
      <br />
      <Typography variant="body1">
        As lawyers, we're experts in the field of compliance. But we have better
        things to do than manually classify actions all day! So, we're going to
        use LLMs to help us out.
      </Typography>
      <br />
      <Typography variant="body1">
        <span style={{ fontWeight: "bold" }}>
          Our challenge is to build a prompt that can correctly classify actions
          as compliant or non-compliant.
        </span>
      </Typography>
      <br />
      <Typography>
        Ready to take a step further? Click the "Next" button to continue.
      </Typography>
    </>
  );
};

export { ProblemDescription };
