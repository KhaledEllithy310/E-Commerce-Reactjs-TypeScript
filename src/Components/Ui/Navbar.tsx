import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { logo } from "../../Utils";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const pages = [
  { name: <Favorite />, link: "wishList" },
  { name: <ShoppingCart />, link: "cart" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  //   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //     null
  //   );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

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

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              //   <Button
              //     key={index}
              //     onClick={handleCloseNavMenu}
              //     sx={{ my: 2, color: "#0B4A72", display: "block" }}
              //   >
              //     {page.name}
              //     </Button>
              <Link to={page.link} key={index} className="text-text ml-3">
                {page.name}
              </Link>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </section>
    </AppBar>
  );
};
export default Navbar;
