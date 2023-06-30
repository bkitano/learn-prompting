import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  "/start",
  "/the-problem",
  "/test-cases",
  "/meet-prompt-editor",
  "/prompt-variables",
  "/running-tests",
  "/asking-specifics",
  "/output-formatting",
  "/few-shot",
  "/step-by-step",
];
const pageRouter = (link: string): (string | null)[] => {
  const index = PAGES.indexOf(link);
  return [
    index > 0 ? PAGES[index - 1] : null,
    index < PAGES.length - 1 ? PAGES[index + 1] : null,
  ];
};

const pageNumber = (link: string): number => {
  return PAGES.indexOf(link) + 1;
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
