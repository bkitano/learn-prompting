"use client";

import { Grid, Typography } from "@mui/material";

const Page = () => {
  return (
    <Grid container padding={5} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography>
          {`Thanks for signing up. We'll update you when we launch.`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
