"use client";

import Grid from "@mui/material/Grid";
import { Editor } from "../../Components/Editor";
import { Instructions } from "../../Components/Instructions";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Code Editor
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Editor />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Instructions />
        </Grid>
      </Grid>
    </>
  );
}
