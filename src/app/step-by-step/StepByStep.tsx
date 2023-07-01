import { EditorExample } from "@/Components/EditorTextExample";
import { Typography } from "@mui/material";

export const StepByStep = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Step-by-Step
    </Typography>
    <Typography variant="h5">
      Suprisingly, if we simply instruct our agent to think it through before
      they answer, we can improve performance by a wide margin.
    </Typography>
    <br />
    <Typography variant="body1">
      When faced with complex tasks, asking the LLM to think{" "}
      <span style={{ fontWeight: "bold" }}>step-by-step</span> can help. It's
      like slowly unfolding the layers of an onion.
    </Typography>
    <br />
    <Typography>
      Look at the difference here between asking the LLM to think step-by-step
      versus not: 
    </Typography>
    <EditorExample>
      I bought four apples. I gave one to John, two to Mary, and received one from
      Gabe. How many apples do I have now?
    </EditorExample>
    <br />
    <EditorExample>
      I bought four apples. I gave one to John, two to Mary, and received one from
      Gabe. How many apples do I have now? Let's think step-by-step.
    </EditorExample>
    <br />
    <Typography>
      Practice this method by creating prompts that guide the LLM through the
      problem-solving process in a step-wise manner. With every step, you're
      becoming a more proficient prompt engineer.
    </Typography>
    <br />
    <Typography>Let's wrap this up! Click "Next" to continue.</Typography>
  </>
);
