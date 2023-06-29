"use client";

import { Grid } from "@mui/material";
import { Introduction } from "../../Components/Instructions/lessons/Introduction";

const StartPage = () => {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Introduction />
      </Grid>
    </Grid>
  );
};

export default StartPage;
