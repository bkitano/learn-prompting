import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const TopNav = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Code Editor
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export { TopNav };
