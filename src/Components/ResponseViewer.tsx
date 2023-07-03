import { Box, CircularProgress, Typography } from "@mui/material";
import { get } from "lodash";
import { useRef } from "react";

const ResponseViewer = (props: { loading?: boolean; value: string | null }) => {
  const { loading = false, value = null } = props;

  let response = (
    <Typography>
      <em>Waiting...</em>
    </Typography>
  );

  if (value) {
    response = <Typography>{value.trim()}</Typography>;
  }
  if (loading) {
    response = <CircularProgress />;
  }

  const responseViewerRef = useRef<HTMLDivElement>(null);

  const shadowed =
    get(responseViewerRef, "current.scrollHeight", 0) >
    get(responseViewerRef, "current.clientHeight", 0);

  return (
    <Box
      ref={responseViewerRef}
      style={{
        maxHeight: "200px",
        borderRadius: "5px",
        padding: "10px",
        overflow: "auto",
        backgroundColor: "blue",
        borderTop: "2px solid white",
        borderLeft: "2px solid white",
        borderRight: "2px solid white",
        borderBottom: shadowed ? "rgba(0, 0, 0, 0.5)" : "2px solid white",
        whiteSpace: "pre-wrap",
      }}
    >
      {response}
    </Box>
  );
};

export { ResponseViewer };
