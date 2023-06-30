import { Box } from "@mui/material";

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
      {value ? value : <em>Waiting...</em>}
    </Box>
  );
};

export { ResponseViewer };
