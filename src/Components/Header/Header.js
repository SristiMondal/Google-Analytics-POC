import React  from "react";
import { Route, useNavigate } from "react-router-dom";


import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["product", "blog", "about us"];

const Header = () => {
  const [item, setItem] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState("");
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setItem(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setItem(null);
  };

  const handleSelect = (page) => {
    handleCloseNavMenu();
    setSelectedPage(page);
    navigate(`/${page.replace(" ", "-")}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{ mr: 2 }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={item === null ? false : true}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              // keepMounted
              // transformOrigin={{
              //   vertical: "100px",
              //   horizontal: "left",
              // }}
              open={item}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleSelect(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => Route.push("/")}
          >
            Demo App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleSelect(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
