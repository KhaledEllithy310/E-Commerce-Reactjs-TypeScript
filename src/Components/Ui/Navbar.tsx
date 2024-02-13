import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { logo } from "../../helpers/Data";

const pages = [
  { name: <Favorite />, link: "wishList" },
  { name: <ShoppingCart />, link: "cart" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F3F3F3" }}>
      <section className="container">
        <Toolbar disableGutters>
          {/* Start Logo in Large Screen */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1, flexGrow: 1 }}>
            <img src={logo} alt="" className="w-32" />
          </Box>
          {/* End Logo in Large Screen */}
          {/* Start Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* End Menu */}

          {/* Start Logo in Small Screen */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1, flexGrow: 1 }}>
            <img src={logo} alt="" className="w-32" />
          </Box>
          {/* End Logo in Small Screen */}
          {/* Start Nav Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link to={page.link} key={index} className="text-textColor ml-3">
                {page.name}
              </Link>
            ))}
          </Box>
          {/* End Nav Links */}
        </Toolbar>
      </section>
    </AppBar>
  );
};
export default Navbar;
