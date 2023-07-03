import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const TopNav = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          agents
          <span
            style={{
              color: "blue",
            }}
          >
            .blue
          </span>
        </Link>
      </Typography>
      <Link href="https://twitter.com/BrianKitano">
        <Button
          variant="contained"
          color="inherit"
          style={{
            color: "black",
          }}
        >
          @BrianKitano
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
);

export { TopNav };
