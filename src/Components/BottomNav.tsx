import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pageRouter = (link: string): (string | null)[] => {
  switch (link) {
    case "/start":
      return [null, "/the-problem"];
    case "/the-problem":
      return ["/start", "/your-mission"];
    default:
      return [null, null];
  }
};

const pageNumber = (link: string): number => {
  switch (link) {
    case "/start":
      return 1;
    case "/the-problem":
      return 2;
    default:
      return 0;
  }
};

const BottomNav = () => {
  const pathname = usePathname();
  const [prevHref, nextHref] = pageRouter(pathname);
  const page = pageNumber(pathname);

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
            {prevHref && (
              <Link href={prevHref}>
                <Button variant="contained">Previous</Button>
              </Link>
            )}
          </Grid>
          <Grid item>Page {page}</Grid>
          <Grid item>
            {nextHref && (
              <Link href={nextHref}>
                <Button variant="contained">Next</Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export { BottomNav };
