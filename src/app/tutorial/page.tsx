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

  const topNav = (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Code Editor
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );

  const body = (
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

  const bottomNav = (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          style={{
            width: "100%",
          }}
          justifyContent={"space-between"}
        >
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setPage(Math.max(0, page - 1));
              }}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setPage(Math.min(page + 1, 8));
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"space-between"}
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Grid item>
          {topNav}
          {body}
        </Grid>
        <Grid item>{bottomNav}</Grid>
      </Grid>
    </>
  );
}
