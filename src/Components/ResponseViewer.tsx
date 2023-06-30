import { Box, Typography } from "@mui/material";

const ResponseViewer = (props: { value: string | null }) => {
  const { value } = props;
  return (
    <Box
      style={{
        backgroundColor: "blue",
        border: "2px solid white",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <Typography style={{
        whiteSpace: "pre-wrap",
      }}>
        {value ? value.trim() : <em>Waiting...</em>}
        </Typography>
    </Box>
  );
};

export { ResponseViewer };
