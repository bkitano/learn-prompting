import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const TopNav = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href="/">
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
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export { TopNav };
