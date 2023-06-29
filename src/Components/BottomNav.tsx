import page from "@/app/page";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";

const BottomNav = (props: {
  page: number;
  setPage: (page: number) => void;
}) => {
  const { page, setPage } = props;
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
            <Button
              variant="contained"
              onClick={() => {
                setPage(Math.max(0, page - 1));
              }}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>Page {page + 1}</Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setPage(Math.min(page + 1, 8));
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export { BottomNav };
