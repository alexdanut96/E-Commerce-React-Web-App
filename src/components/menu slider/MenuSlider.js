import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openMenu,
  closeMenu,
} from "../../app/features/shoppingCart/cartToggleSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const MenuSlider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.toggleCart.menuToggle);

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          opacity: "0.95",
          boxSizing: "border-box",
          maxWidth: "300px",
          minWidth: "280px",
          width: "100%",
          height: "100vh",
          top: "0",
          // background: "linear-gradient(225deg, #e1edf9 0%, #d9eccf 100%)",
          background: "#0b121f",
        },
      }}
      open={menu}
      anchor="left"
      onClose={() => dispatch(closeMenu())}
      onOpen={() => dispatch(openMenu())}
    >
      <AppBar>
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "center",
            borderBottom: "solid 1px #1976d2",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#1976d2" }}
            component="div"
          >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          color: "#6F38C5",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          gap: "20px",
          paddingTop: "20px",
        }}
      >
        <Tabs
          orientation="vertical"
          value={
            location.pathname === "/"
              ? 0
              : location.pathname === "/Products"
              ? 1
              : location.pathname === "/Posts"
              ? 2
              : 3
          }
          onClick={() => dispatch(closeMenu())}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: "#0f4375" }}
            label="Home"
            onClick={() => navigate("/")}
          />
          <Tab
            sx={{ color: "#0f4375" }}
            label="Products"
            onClick={() => navigate("/Products")}
          />
          <Tab
            sx={{ color: "#0f4375" }}
            label="Posts"
            onClick={() => navigate("/Posts")}
          />
          <Tab
            sx={{ color: "#0f4375" }}
            label="Privacy Policy"
            onClick={() => navigate("/privacy-policy")}
          />
        </Tabs>
      </Box>
    </SwipeableDrawer>
  );
};
