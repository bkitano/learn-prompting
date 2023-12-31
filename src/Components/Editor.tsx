import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ResponseViewer } from "./ResponseViewer";

const getPromptCompletion = async (request: {
  prompt: string;
  inputs: Record<string, string>;
}): Promise<any> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/submit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  return response;
};

const Editor = (props: {
  initialValue: string;
  placeholder?: string;
  runDisabled?: boolean;
  onPromptChange?: (prompt: string) => void;
  exampleView?: boolean;
}) => {
  const {
    initialValue,
    placeholder,
    onPromptChange,
    runDisabled,
    exampleView,
  } = props;
  const [responseValue, setResponseValue] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    prompt: string,
    inputs?: Record<string, string>
  ) => {
    if (!prompt) return;
    setLoading(true);

    const response = await getPromptCompletion({
      prompt,
      inputs: inputs || {},
    }).then((response) => {
      return response.json();
    });

    const { completion } = response;
    setResponseValue(completion);
    setLoading(false);
  };

  return (
    <Container maxWidth="md">
      <Grid container direction="row" spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <EditorView
            {...{
              handleSubmit,
              initialValue,
              placeholder,
              onPromptChange,
              runDisabled,
              exampleView,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <ResponseViewer value={responseValue} loading={loading} />
        </Grid>
      </Grid>
    </Container>
  );
};

const PromptVariableField = (props: {
  promptVariableKey: string;
  promptVariableValue: string | null | undefined;
  setPromptVariableValue: (value: string) => void;
}) => {
  const { promptVariableKey, promptVariableValue, setPromptVariableValue } =
    props;
  return (
    <Box
      style={{
        backgroundColor: "white",
        border: "2px solid white",
        borderRadius: "5px",
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <TextField
        value={promptVariableValue}
        onChange={(e) => {
          e.preventDefault();
          console.log({ promptVariableValue });
          console.log(e.target.value);
          setPromptVariableValue(e.target.value);
        }}
        variant="outlined"
        label={promptVariableKey}
        autoComplete="off"
        inputProps={{
          style: {
            color: "black",
          },
        }}
      />
    </Box>
  );
};

const EditorView = (props: {
  initialValue: string;
  placeholder?: string;
  handleSubmit: (value: string, inputs?: Record<string, string>) => void;
  onPromptChange?: (prompt: string) => void;
  runDisabled?: boolean;
  exampleView?: boolean;
}) => {
  const {
    initialValue,
    handleSubmit,
    placeholder,
    onPromptChange,
    runDisabled = false,
    exampleView = false,
  } = props;
  const [prompt, setValue] = useState(initialValue);

  const idRef = useRef(Math.random().toString(36).substring(7));
  const id = idRef.current;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // const [promptVariableSection, setPromptVariableSection] = useState<any>(null);
  const [promptVariableKey, setPromptVariableKey] = useState<string | null>(
    null
  );
  const [promptVariableValue, setPromptVariableValue] = useState<
    string | null | undefined
  >(undefined);

  // this effect will show a selector if a double bracket variable is detected in the prompt,
  // and it will show one for each variable detected.
  useEffect(() => {
    if (prompt) {
      const regex = /{{(.*?)}}/g;
      const matches = prompt.match(regex);
      console.log(matches);
      if (matches && matches.length === 1) {
        const variables = matches.map((match) => match.replace(/{{|}}/g, ""));
        if (matches.length === 1) {
          setPromptVariableKey(variables[0]);
        }
      } else {
        setPromptVariableKey(null);
        setPromptVariableValue(undefined);
      }
    } else {
      setPromptVariableKey(null);
      setPromptVariableValue(undefined);
    }
  }, [prompt]);

  return (
    <>
      <div
        id="input-container"
        onClick={() => {
          const input = document.getElementById(id);
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
          minHeight: !exampleView ? "calc(50vh)" : undefined,
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
              id={id}
              onKeyUp={(e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  handleSubmit(prompt, {
                    [promptVariableKey || ""]: promptVariableValue || "",
                  });
                }
              }}
              placeholder={placeholder}
              style={{
                width: "100%",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "white",
              }}
              multiline
              value={prompt}
              onChange={(e) => {
                setValue(e.target.value);
                onPromptChange && onPromptChange(e.target.value);
              }}
            />
          </div>
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: promptVariableKey ? "space-between" : "flex-end",
              alignItems: "end",
            }}
          >
            <div>
              {promptVariableKey ? (
                <PromptVariableField
                  {...{
                    setPromptVariableValue,
                    promptVariableKey,
                    promptVariableValue,
                  }}
                />
              ) : null}
            </div>
            <Button
              variant="contained"
              disabled={runDisabled || prompt.length === 0}
              onClick={() =>
                handleSubmit(prompt, {
                  [promptVariableKey || ""]: promptVariableValue || "",
                })
              }
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
