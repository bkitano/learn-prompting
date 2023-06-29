import { InputBase } from "@mui/material";
import { useState } from "react";

const Editor = (props: { initialValue: string }) => {
  const { initialValue } = props;
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
          minHeight: "calc(50vh)",
          whiteSpace: "pre-wrap",
        }}
      >
        <InputBase
          id="input"
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
    </>
  );
};

export { Editor };
