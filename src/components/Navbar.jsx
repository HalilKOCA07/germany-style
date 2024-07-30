import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import imgLogo from "../assests/HK.png";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css";
import useAuth from "../context/UserContext";

const pages = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const settings = [
  { title: "Profile", path: "/profile" },
  { title: "Account", path: "/account" },
  { title: "Logout", path: "/" },
];

const user = [
  {
    id: "123456",
    userName: "Sinyour",
    name: "Halil",
    surname: "KOCA",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocL0HyVfTFqoyp6j36g2dBTAMFsn4kEV1sPRArsgsvsl2q6g=s96-c",
  },
];

function Navbar() {
  const {validUser} = useAuth()
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="navBar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="navLogoImg1" srcSet={imgLogo} width={60} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

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
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Button onClick={() => navigate(page.path)}>
                    <Typography textAlign="center">{page.title}</Typography>x"
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <img className="navLogoImg2" srcSet={imgLogo} width={60} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user.map((prop) => (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={prop.userName} src={prop.image} />
                </IconButton>
              </Tooltip>
            ))}
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

                <MenuItem key="profil" onClick={() => {handleCloseUserMenu(); navigate("/profil")}}>
                  <Typography textAlign="center">Profil</Typography>
                </MenuItem>
                <MenuItem key="accoun" onClick={() => {handleCloseUserMenu(); navigate("/account")}}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem key="login" onClick={() => {handleCloseUserMenu(); navigate("/")}}>
                  <Typography textAlign="center">{validUser ? "Logout" : "Login"}</Typography>
                </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
