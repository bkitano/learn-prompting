import { Box, Button, Grid, InputBase } from "@mui/material";
import { useEffect, useState } from "react";
import { ResponseViewer } from "./ResponseViewer";

const Editor = () => {
  const [responseValue, setResponseValue] = useState<string | null>(null);
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);

  const handleSubmit = (value: string) => {
    setSubmittedValue(value);
  };

  useEffect(() => {
    if (!submittedValue) return;
    const response = Math.random().toString(36);
    setResponseValue(response);
  }, [submittedValue]);

  return (
    <>
      <Grid container direction="row" spacing={2} justifyContent="right">
        <Grid item xs={12}>
          <EditorView
            {...{
              initialValue: "",
              handleSubmit,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <ResponseViewer value={responseValue} />
        </Grid>
      </Grid>
    </>
  );
};

const EditorView = (props: {
  initialValue: string;
  handleSubmit: (value: string) => void;
}) => {
  const { initialValue, handleSubmit } = props;
  const [value, setValue] = useState(initialValue);

  return (
    <>
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
                  handleSubmit(value);
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
            <Button
              variant="contained"
              disabled={value.length === 0}
              onClick={() => handleSubmit(value)}
            >
              Run
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export { Editor };
