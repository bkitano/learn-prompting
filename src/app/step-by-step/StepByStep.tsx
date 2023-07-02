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
    <br />
    <EditorExample>
      {`Q: John plans to sell all his toys and use the money to buy video games. He has 13 lego sets and he sells them for $15 each. He ends up buying 8 videogames for $20 each and has $5 left. How many lego sets does he still have?`}
    </EditorExample>
    <br />
    <EditorExample>
      {`Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now? 

A: Roger started with 5 balls. 2 cans of 3 tennis balls each is 6 tennis balls. 5 + 6 = 11. The answer is 11. 
      
Q: The cafeteria had 23 apples. If they used 20 to make lunch and bought 6 more, how many apples do they have?`}
    </EditorExample>
    <br />
    <Typography>
      Practice this method by creating prompts that guide the LLM through the
      problem-solving process in a step-wise manner.
    </Typography>
    <br />
    <Typography>Let's wrap this up! Click "Next" to continue.</Typography>
  </>
);
