import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { usePage } from "./PageContext";

const BottomNav = () => {
  const { page, pageForward, pageBackward } = usePage();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          style={{
            width: "100%",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Button variant="contained" onClick={pageBackward}>
              Previous
            </Button>
          </Grid>
          <Grid item>Page {page + 1}</Grid>
          <Grid item>
            <Button variant="contained" onClick={pageForward}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export { BottomNav };
