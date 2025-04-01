import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../../src/assets/dart_logo.png";
import CustomButton from "../UI_Library/Button";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigateTo = useNavigate();
  const handlePageChange = (page) => {
    if (page === "pricing") {
      navigateTo("/pricing");
    } else if (page === "about") {
      navigateTo("/about");
    } else if (page === "login") {
      navigateTo("/login");
    } else {
      navigateTo("/");
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "white" }}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "20px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handlePageChange("home")}
        >
          <img
            src="../../src/assets/dart_logo.png"
            alt="dart"
            style={{ width: "50px" }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: "10px",
              alignItems: "center",
              color: "#326ba1",
            }}
          >
            <Typography variant="h6">
              <b>DART</b>
            </Typography>
            <Typography variant="h6">Council</Typography>
          </Box>
        </Box>
        {isMobile || isTab ? (
          <>
            <IconButton
              color="black"
              edge="end"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List sx={{ width: 200, cursor: "pointer" }}>
                <ListItem button>
                  <ListItemText
                    primary="Pricing"
                    onClick={() => handlePageChange("pricing")}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="About Us"
                    onClick={() => handlePageChange("about")}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="Get Started"
                    onClick={() => handlePageChange()}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="Login"
                    onClick={() => handlePageChange("login")}
                  />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <CustomButton
              onClick={() => handlePageChange("pricing")}
              text="Pricing"
            />
            <CustomButton
              onClick={() => handlePageChange("about")}
              text="About Us"
            />
            <CustomButton
              onClick={() => handlePageChange()}
              text="Get Started"
            />
            <CustomButton onClick={() => handlePageChange("login")} text="Login" />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
