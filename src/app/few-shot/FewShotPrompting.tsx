import {
  EditorExample,
  EditorTextExample,
} from "@/Components/EditorTextExample";
import { Typography } from "@mui/material";

export const FewShotPrompting = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Few-shot prompting
    </Typography>
    <Typography variant="h5">
      Guide your LLM by providing it examples of what you want in the prompt.
    </Typography>
    <br />
    <Typography variant="body1">
      <span style={{ fontWeight: "bold" }}>Few-shot prompting</span> is a
      technique where we provide the LLM with a few examples of the task we want
      it to perform, called <span style={{ fontWeight: "bold" }}>shots</span>.
      It's like giving it a little nudge in the right direction.
    </Typography>
    <br />
    <Typography>
      For our poetry example, we can provide the LLM with a few examples of the
      kind of poems we want it to write. We can do this by adding shots to our
      prompt.
    </Typography>
    <br />
    <EditorExample>
      {`INSTRUCTIONS:
Write me a haiku about {{topic}}.

FORMAT:
\`\`\`xml
<poem>
    <topic>TOPIC</topic>
    <line>LINE</line>
    <line>LINE</line>
    <line>LINE</line>
</poem>
\`\`\`

EXAMPLES:
<poem>
<topic>love</topic>
<line>Whispering winds entwine,</line>
<line>Beneath the pale moonshine,</line>
<line>Love's tender design.</line>
</poem>

ANSWER:
`}
    </EditorExample>
    <br />
    <Typography>
      Practice creating a few-shot prompt. Remember, the goal is to make the LLM
      understand the task better by showing it how to do it.
    </Typography>
    <br />
    <Typography>Ready for more? Click "Next" to continue.</Typography>
  </>
);
