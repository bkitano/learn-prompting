import ContentCopy from "@mui/icons-material/ContentCopy";
import { IconButton, Typography } from "@mui/material";

const EditorTextExample = ({ children }: { children: string }) => {
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "#282c34",
        border: "2px solid white",
        borderRadius: "5px",
        whiteSpace: "pre-wrap",
      }}
    >
      <Typography
        style={{
          fontFamily: "monospace",
        }}
      >
        {children}
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          onClick={() => {
            navigator.clipboard.writeText(children);
          }}
        >
          <ContentCopy style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
};

export { EditorTextExample };
