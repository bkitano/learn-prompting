import page from "@/app/page";
import { Grid } from "@mui/material";
import { Editor } from "./Editor";
import { Instructions } from "./Instructions/Instructions";
import { usePage } from "./PageContext";

const Board = () => {
  return (
    <Grid container padding={2} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Instructions page={page} />
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
