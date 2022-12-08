import React from "react";
import STYLE from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  toggleMenu,
} from "../app/features/shoppingCart/cartToggleSlice";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const Header = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggleCart.cartToggle);
  const disable = useSelector((state) => state.toggleCart.buttonToggle);
  const menu = useSelector((state) => state.toggleCart.menuToggle);
  const itemsCounter = useSelector((state) => state.shoppingCart.quantity);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [count, setCount] = React.useState(0);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      background: disable ? "#e79393" : "#E26D5A",
    },
  }));

  const tabStyle = {
    default: {
      variant: "secondary",
      color: "#00A7E1",
    },
    highligth: {
      variant: "outlined",
      color: "#FF9B42",
    },
  };

  // document.body.style.overflow = toggle || menu ? "hidden" : "auto";

  React.useEffect(() => {
    const windowSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowSize);
    return function () {
      window.removeEventListener("resize", windowSize);
    };
  }, []);

  return (
    // <div className={STYLE.container}>

    <AppBar style={{ background: "#ABEDC6" }} position="fixed">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {windowWidth > 480 ? (
          <div className={STYLE.tabs}>
            <Link to="/" className={STYLE.homeTab}>
              <Button
                onClick={() => setCount(count + 1)}
                variant={
                  window.location.pathname === "/"
                    ? tabStyle.highligth.variant
                    : tabStyle.default.variant
                }
                style={{
                  fontWeight: "bold",
                  borderColor:
                    window.location.pathname === "/"
                      ? `${tabStyle.highligth.color}`
                      : `${tabStyle.default.color}`,
                  color:
                    window.location.pathname === "/"
                      ? `${tabStyle.highligth.color}`
                      : `${tabStyle.default.color}`,
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/Products" className={STYLE.productTab}>
              <Button
                onClick={() => setCount(count + 1)}
                variant={
                  window.location.pathname === "/Products"
                    ? tabStyle.highligth.variant
                    : tabStyle.default.variant
                }
                style={{
                  fontWeight: "bold",
                  borderColor:
                    window.location.pathname === "/Products"
                      ? `${tabStyle.highligth.color}`
                      : `${tabStyle.default.color}`,
                  color:
                    window.location.pathname === "/Products"
                      ? `${tabStyle.highligth.color}`
                      : `${tabStyle.default.color}`,
                }}
              >
                Products
              </Button>
            </Link>
            <Link to="/Posts" className={STYLE.productTab}>
              <Button
                onClick={() => setCount(count + 1)}
                variant={
                  window.location.pathname === "/Posts"
                    ? tabStyle.highligth.variant
                    : tabStyle.default.variant
                }
                style={{
                  fontWeight: "bold",
                  borderColor:
                    window.location.pathname === "/Posts"
                      ? `${tabStyle.highligth.color}`
                      : `${tabStyle.default.color}`,
                  color:
                    window.location.pathname === "/Posts"
                      ? `${tabStyle.highligth.color}`
                      : `${tabStyle.default.color}`,
                }}
              >
                Posts
              </Button>
            </Link>
          </div>
        ) : (
          <button
            disabled={disable}
            className={STYLE.menuBtn}
            onClick={() => dispatch(toggleMenu())}
            style={{ color: disable ? "#cccccc" : "black" }}
          >
            <MenuIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} />
          </button>
        )}

        <IconButton
          onClick={() => dispatch(toggleCart())}
          disabled={disable}
          aria-label="cart"
        >
          <StyledBadge badgeContent={itemsCounter} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        {/* {(menu || toggle) && <div className={STYLE.shadyBackground} />} */}
      </Toolbar>
    </AppBar>
    // </div>
  );
};
