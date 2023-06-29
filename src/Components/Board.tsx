import { Grid } from "@mui/material";
import { Editor } from "./Editor";
import { Instructions } from "./Instructions/Instructions";
import { TestCases } from "./TestCases";

const Board = () => {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Instructions />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Editor
          {...{
            initialValue: `// Welcome to the Code Editor!`,
          }}
        />
        <TestCases />
      </Grid>
    </Grid>
  );
};

export { Board };
