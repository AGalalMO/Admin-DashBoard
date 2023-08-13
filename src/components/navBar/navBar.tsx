import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Portal
          </Typography>
          {isAuthenticated ? (
            <Button color="inherit" onClick={() => logout()}>
              log out
            </Button>
          ) : (
            <Button color="inherit" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;