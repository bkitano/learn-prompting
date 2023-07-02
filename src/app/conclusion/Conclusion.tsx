import { Button, Grid, TextField, Typography } from "@mui/material";
import { TwitterIcon, TwitterShareButton } from "react-share";

const TwitterButton = () => (
  <TwitterShareButton
    {...{
      title: "I just finished agents.blue's free course on LLM prompting!",
      url: "http://agents.blue",
    }}
  >
    <div
      style={{
        backgroundColor: "#00aced",
        padding: "10px 15px 10px 20px",
        borderRadius: "32px",
      }}
    >
      <Grid
        container
        spacing={2}
        wrap="nowrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography>Share on Twitter</Typography>
        </Grid>
        <Grid item>
          <TwitterIcon size={32} round={true} />
        </Grid>
      </Grid>
    </div>
  </TwitterShareButton>
);

const Conclusion = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Congrats, you made it!
      </Typography>
      <Typography variant="h5">
        {`And that's a wrap! You've learned the basics of prompting.`}
      </Typography>
      <br />
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
      <TwitterButton />
      </div>
      <br />
      <Typography variant="h5">
        <em>But what if I told you we could do even better?</em>
      </Typography>
      <br />
      <Typography variant="body1">
        See, these lessons only covered <em>prompting</em>, but {`there's`} a
        whole other side to the equation:{" "}
        <strong>
          <em>prompt chaining</em>
        </strong>
        . Prompt chaining is the process of using the output of one prompt as
        the input to another prompt. This allows us to build more complex, more
        powerful models.
      </Typography>
      <br />
      <Typography variant="body1">
        How much does prompt chaining improve our task performance?
      </Typography>
      <br />
      <Typography variant="body1">
        Based on{" "}
        <a href="https://arxiv.org/pdf/2201.11903.pdf">
          <span
            style={{
              fontWeight: "bold",
              color: "#3fb1ff",
              textDecoration: "underline",
            }}
          >
            lots
          </span>
        </a>{" "}
        <a href="https://arxiv.org/pdf/2305.18323.pdf">
          <span
            style={{
              fontWeight: "bold",
              color: "#3fb1ff",
              textDecoration: "underline",
            }}
          >
            of
          </span>
        </a>{" "}
        <a href="https://arxiv.org/pdf/2305.10601.pdf">
          <span
            style={{
              fontWeight: "bold",
              color: "#3fb1ff",
              textDecoration: "underline",
            }}
          >
            research
          </span>
        </a>
        , prompt chaining improves performance with LLMs{" "}
        <em
          style={{
            fontWeight: "bold",
          }}
        >
          dramatically,
        </em>{" "}
        as much as 3x on certain tasks and architectures.
      </Typography>
      <br />
      <Typography>
        Subscribe to{" "}
        <span
          style={{
            color: "#3fb1ff",
            fontWeight: "bold",
          }}
        >
          agents.blue
        </span>
        , and get access to the most up-to-date prompt engineering, research,
        and applications, as well as interactive resources, repositories, and
        patterns for building autonomous agents.
      </Typography>
    </>
  );
};

export { Conclusion };
