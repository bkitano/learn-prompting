import { Box, CircularProgress, Typography } from "@mui/material";

const ResponseViewer = (props: { loading?: boolean; value: string | null }) => {
  const { loading = false, value = null } = props;
  return (
    <Box
      style={{
        backgroundColor: "blue",
        border: "2px solid white",
        borderRadius: "5px",
        padding: "10px",
        maxHeight: "200px",
        overflow: "auto",
      }}
    >
      {value ? (
        <Typography
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {value.trim()}
        </Typography>
      ) : loading ? (
        <CircularProgress />
      ) : (
        <em>Waiting...</em>
      )}
    </Box>
  );
};

export { ResponseViewer };
