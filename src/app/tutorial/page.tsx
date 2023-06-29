"use client";

import Grid from "@mui/material/Grid";
import { Editor } from "../../Components/Editor";
import { Instructions } from "../../Components/Instructions/Instructions";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  BottomNavigation,
} from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);

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
    </>
  );
}
