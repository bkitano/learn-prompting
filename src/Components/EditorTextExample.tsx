import { Typography } from "@mui/material";

const EditorTextExample = ({ children }: { children: string }) => (
  <div
    style={{
      padding: "15px",
      backgroundColor: "#282c34",
      border: "2px solid white",
      borderRadius: "5px",
    }}
  >
    <Typography
      style={{
        fontFamily: "monospace",
      }}
    >
      {children}
    </Typography>
  </div>
);

export { EditorTextExample };
