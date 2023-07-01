"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { Conclusion } from "./Conclusion";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <>
      <Grid container padding={5} spacing={2}>
        <Grid item xs={12} sm={6}>
          <Conclusion />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/chain-of-thought-graph.png" />
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h4">
          <em>Join the thousands of people mastering LLMs.</em>
        </Typography>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid
          container
          style={{
            width: "100%",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Grid item>
            <TextField
              onSubmit={(e) => {
                e.preventDefault();
              }}
              {...{
                value: email,
                onChange: (e) => {
                  setEmail(e.target.value);
                },
                placeholder: "your email",
                style: {
                  backgroundColor: "white",
                  margin: "10px",
                  borderRadius: "5px",
                },
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{
                borderRadius: "10px",
                padding: "13px",
                width: "150px",
              }}
              onClick={(e) => {}}
            >
              <Typography variant="h5">Sign up</Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Page;
