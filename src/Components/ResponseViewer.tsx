import { Box, CircularProgress, Typography } from "@mui/material";

const ResponseViewer = (props: { loading?: boolean; value: string | null }) => {
  const { loading = false, value = null } = props;

  let response = (
    <Typography>
      <em>Waiting...</em>
    </Typography>
  );

  if (value) {
    response = <Typography>{value}</Typography>;
  }
  if (loading) {
    response = <CircularProgress />;
  }

  return (
    <Box
      style={{
        backgroundColor: "blue",
        border: "2px solid white",
        borderRadius: "5px",
        padding: "10px",
        maxHeight: "200px",
        overflow: "auto",
        borderBottom: "",
      }}
    >
      {response}
    </Box>
  );
};

export { ResponseViewer };
