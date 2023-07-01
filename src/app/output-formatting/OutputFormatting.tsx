import { EditorTextExample } from "@/Components/EditorTextExample";
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
      The way in we ask for XML output is by adding instructions that clarify
      the format we want. For our poetry example, we can ask for XML output like
      this:
    </Typography>
    <br />
    <EditorTextExample>{`INSTRUCTIONS:
Write me a poem about {{topic}}.
    
FORMAT: 
\`\`\`xml
<poem>
    <line>LINE</line>
    <line>LINE</line>
    <line>LINE</line>
</poem>
\`\`\``}</EditorTextExample>
    <br />
    <Typography>
      Structured output helps in better post-processing of the LLM's responses
      and integrating them into larger workflows. Stay tuned to learn more about
      it in future courses on prompt chaining.
    </Typography>
    <br />
    <Typography>
      Let's try it out! Add instructions to your prompt that ask for XML output,
      where the XML fields are
    </Typography>
    <br />
    <EditorTextExample>
      {`<response>
    <compliance_status>TRUE|FALSE</compliance_status>
    <reason>REASON</reason>
</response>
`}
    </EditorTextExample>
    <br />
    <Typography>then click "Run".</Typography>
    <br />

    <Typography>
      Excited for the next lesson? Click "Next" to continue.
    </Typography>
  </>
);
