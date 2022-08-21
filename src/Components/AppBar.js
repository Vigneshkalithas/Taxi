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
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactComponent as IconMenu } from "../Assets/taxi.svg";
import { ReactComponent as Setting } from "../Assets/setting.svg";
import { useNavigate } from "react-router-dom";


// const pages = ["User", "Driver", "Help"];
const settings = ["Profile", "Home" , "Logout"];

const ResponsiveAppBar = () => {
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
  const doLogout = () => {
    localStorage.removeItem('react-app-token');
    navigate('/');
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        // main: '#1976d2',
        main: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <LocalTaxiIcon sx={{ color:"yellow", display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            {/* <IconMenu sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} /> */}
            <div className="icon1">
              {" "}
              <IconMenu />
            </div>

            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="/"
              onClick={() => navigate("/")}
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                //   letterSpacing: '.3rem',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Taxi
            </Typography>

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
                {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem onClick={()=>navigate("/userlogin")}>
                  <Typography
                    sx={{ fontFamily: "monospace", fontWeight: 700 }}
                    textAlign="center"
                  >
                    RIDE
                  </Typography>
                </MenuItem>
                <MenuItem onClick={()=>navigate("/driverlogin")}>
                  <Typography
                    sx={{ fontFamily: "monospace", fontWeight: 700 }}
                    textAlign="center"
                  >
                    DRIVER
                  </Typography>
                </MenuItem>
                <MenuItem onClick={()=>navigate("/help")}>
                  <Typography
                    sx={{ fontFamily: "monospace", fontWeight: 700 }}
                    textAlign="center"
                  >
                    HELP
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <IconMenu sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <div className="icon2">
              {" "}
              <IconMenu />
            </div>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              // href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                //   letterSpacing: '.3rem',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Taxi
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
              <Button onClick={()=>navigate("/userlogin")}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "monospace",
                  fontWeight: 700,
                }}
              >
                RIDE
              </Button>
              <Button onClick={()=>navigate("/driverlogin")}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "monospace",
                  fontWeight: 700,
                }}
              >
                DRIVER
              </Button>
              <Button onClick={()=>navigate("/help")}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "monospace",
                  fontWeight: 700,
                }}
              >
                HELP
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <Setting />
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
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={()=>navigate("/home")}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  <MenuItem onClick={doLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>

              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
