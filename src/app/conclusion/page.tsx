"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { Conclusion } from "./Conclusion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const validateEmail = (email: string) => {
  // uses regex
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
};

const Page = () => {
  const router = useRouter();

  const submitEmail = async (email: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    router.push("/thanks");
  };

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
          <em>Sign up for updates and new courses on mastering LLMs.</em>
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
                  borderRadius: "5px",
                },
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              onClick={(e) => {
                e.preventDefault();
                submitEmail(email);
              }}
              style={{
                opacity: validateEmail(email) ? 1 : 0.5,
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Page;
