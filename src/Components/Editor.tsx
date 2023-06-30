import { Box, Button, Grid, InputBase } from "@mui/material";
import { useState } from "react";
import { ResponseViewer } from "./ResponseViewer";

const Editor = (props: { initialValue: string }) => {
  const { initialValue } = props;
  const [value, setValue] = useState(initialValue);

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <>
      <Grid container direction="row" spacing={2} justifyContent="right">
        <Grid item xs={12}>
          <div
            id="input-container"
            onClick={() => {
              const input = document.getElementById("input");
              if (input) {
                input.focus();
              }
            }}
            style={{
              padding: "15px",
              backgroundColor: "#282c34",
              border: "2px solid white",
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              minHeight: "calc(50vh)",
              whiteSpace: "pre-wrap",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "space-between",
                height: "100%",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  width: "100%",
                }}
              >
                <InputBase
                  id="input"
                  onKeyUp={(e) => {
                    if (e.key === "Enter" && e.ctrlKey) {
                      handleSubmit();
                    }
                  }}
                  style={{
                    width: "100%",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  multiline
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="contained" onClick={handleSubmit}>
                  Run
                </Button>
              </div>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12}>
          <ResponseViewer />
        </Grid>
      </Grid>
    </>
  );
};

export { Editor };
