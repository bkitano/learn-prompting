import { InputBase, TextField } from "@mui/material";
import { useState } from "react";

const Editor = (props: { initialValue: string }) => {
  const { initialValue } = props;
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <InputBase
        multiline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: "10px",
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#282c34",
          border: "2px solid white",
          borderRadius: "5px",
          width: "100%",
          whiteSpace: "pre-wrap",
        }}
      />
    </>
  );
};

export { Editor };
