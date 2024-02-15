import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Favorite, Logout, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { logo } from "../../helpers/Data";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { cartSelector, clearCart } from "../../RTK/features/Cart/CartSlice";
import { authSelector, logOut } from "../../RTK/features/Auth/Auth";
import { useAppDispatch } from "../../RTK/Store";
import {
  clearWishList,
  wishListSelector,
} from "../../RTK/features/WishList/WishListSlice";

const pages = [
  { name: "Home", link: "/" },
  { name: "Products", link: "products" },
  { name: "Login", link: "login" },
  { name: null, link: "logout" },
  { name: <Favorite />, link: "wishList" },
  { name: <ShoppingCart />, link: "cart" },
];

const Navbar = () => {
  const { cartItems } = useSelector(cartSelector);
  const { wishListItems } = useSelector(wishListSelector);
  const { isLoggedIn } = useSelector(authSelector);
  const dispatch = useAppDispatch();
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
    <AppBar position="fixed" sx={{ backgroundColor: "#F3F3F3" }}>
      <section className="container navbar-section">
        <Toolbar disableGutters>
          {/* Start Logo in Large Screen */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1, flexGrow: 1 }}>
            <NavLink to={"/"}>
              <img src="/images/logo.png" className="w-32" alt="logo" />
            </NavLink>
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
                  {/* <Typography textAlign="center">{page.name}</Typography> */}
                  <NavLink to={page.link}>{page.name}</NavLink>
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
          
          {/* Start Nav Links in large screen */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <NavLink
                to={page.link === "logout" ? "/" : page.link}
                key={index}
                className="text-textColor ml-3 nav-item"
              >
                {page.link === "wishList" || page.link === "cart" ? (
                  <Badge
                    badgeContent={
                      page.link === "wishList"
                        ? wishListItems.length
                        : cartItems.length
                    }
                    color="error"
                  >
                    {page.name}
                  </Badge>
                ) : page.link === "logout" && isLoggedIn ? (
                  <span
                    onClick={() => {
                      dispatch(logOut());
                      dispatch(clearCart());
                      dispatch(clearWishList());
                    }}
                  >
                    <Logout />
                  </span>
                ) : page.link === "login" && isLoggedIn ? null : (
                  page.name
                )}
              </NavLink>
            ))}
          </Box>
          ;{/* End Nav Links in large screen */}
        </Toolbar>
      </section>
    </AppBar>
  );
};
export default Navbar;
