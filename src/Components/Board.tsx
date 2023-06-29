import { Grid } from "@mui/material";
import { Editor } from "./Editor";
import { Instructions } from "./Instructions/Instructions";

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
      </Grid>
    </Grid>
  );
};

export { Board };
