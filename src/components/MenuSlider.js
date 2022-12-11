import React from "react";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openMenu,
  closeMenu,
} from "../app/features/shoppingCart/cartToggleSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const MenuSlider = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.toggleCart.menuToggle);
  console.log("menuSlide");

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          boxSizing: "border-box",
          maxWidth: "300px",
          minWidth: "280px",
          width: "100%",
          height: "100vh",
          top: "0",
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(238,255,224,1) 50%, rgba(224,255,219,1) 100%)",
        },
      }}
      open={menu}
      anchor="left"
      onClose={() => dispatch(closeMenu())}
      onOpen={() => dispatch(openMenu())}
    >
      <AppBar style={{ background: "#ABEDC6" }}>
        <Toolbar sx={{ width: "100%", justifyContent: "center" }}>
          <Typography
            sx={{ fontWeight: "bold", color: "#6F38C5" }}
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
            window.location.pathname === "/"
              ? 0
              : window.location.pathname === "/Products"
              ? 1
              : 2
          }
          onClick={() => dispatch(closeMenu())}
          aria-label="basic tabs example"
        >
          <Tab label="Home" onClick={() => navigate("/")} />
          <Tab label="Products" onClick={() => navigate("/Products")} />
          <Tab label="Posts" onClick={() => navigate("/Posts")} />
        </Tabs>
      </Box>
    </SwipeableDrawer>
  );
};
