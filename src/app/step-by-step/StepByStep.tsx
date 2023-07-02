import { EditorExample } from "@/Components/EditorExample";
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
      <span style={{ fontWeight: "bold" }}>step-by-step</span> can help. {`It's`}
      like slowly unfolding the layers of an onion.
    </Typography>
    <br />
    <Typography>
      Look at the difference here between asking the LLM to think step-by-step
      versus not:
    </Typography>
    <br />
    <EditorExample>
      {`Q: Leah had 32 chocolates and her
sister had 42. If they ate 35, how
many pieces do they have left in
total?

A: 39.

Q: Julie is reading a 120-page book. Yesterday,
she was able to read 12 pages and today, she
read twice as many pages as yesterday. If she
wants to read half of the remaining pages
tomorrow, how many pages should she read?`}
    </EditorExample>
    <br />
    <EditorExample>
      {`Q: Leah had 32 chocolates and her
sister had 42. If they ate 35, how
many pieces do they have left in
total?

A: Originally, Leah had 32
chocolates and her sister had 42.
So in total they had 32 + 42 =
74. After eating 35, they had 74
- 35 = 39 pieces left in total. The
answer is 39.

Q: Julie is reading a 120-page book. Yesterday,
she was able to read 12 pages and today, she
read twice as many pages as yesterday. If she
wants to read half of the remaining pages
tomorrow, how many pages should she read?`}
    </EditorExample>
    <br />
    <Typography>
      Practice this method by creating prompts that guide the LLM through the
      problem-solving process in a step-wise manner.
    </Typography>
    <br />
    <Typography>{`Let's`} wrap this up! Click {`"Next"`} to continue.</Typography>
  </>
);
