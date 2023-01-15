import React from "react";
import { useLocation } from "react-router-dom";
import STYLE from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../app/features/shoppingCart/cartToggleSlice";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "../shopping cart/ShoppingCart";
import { FacebookAuth } from "../facebook authentication/facebookAuth";

export const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const disable = useSelector((state) => state.toggleCart.buttonToggle);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const windowWidthSize = () => {
      setWindowWidth(window.innerWidth);
    };
    const windowHeightSize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", windowWidthSize);
    window.addEventListener("resize", windowHeightSize);
    return function () {
      window.removeEventListener("resize", windowWidthSize);
      window.removeEventListener("resize", windowHeightSize);
    };
  }, []);

  return (
    <AppBar
      style={{
        // background: "linear-gradient(225deg, #e1edf9 0%, #d9eccf 100%)",
        background: "black",
        opacity: "0.95",
      }}
      position="fixed"
    >
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
                variant={location.pathname === "/" ? "outlined" : "secondary"}
                style={{
                  fontWeight: "bold",
                  borderColor:
                    location.pathname === "/" ? "#FF9B42" : "#00A7E1",
                  color: location.pathname === "/" ? "#FF9B42" : "#00A7E1",
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/Products" className={STYLE.productTab}>
              <Button
                variant={
                  location.pathname === "/Products" ? "outlined" : "secondary"
                }
                style={{
                  fontWeight: "bold",
                  borderColor:
                    location.pathname === "/Products" ? "#FF9B42" : "#00A7E1",
                  color:
                    location.pathname === "/Products" ? "#FF9B42" : "#00A7E1",
                }}
              >
                Products
              </Button>
            </Link>
            <Link to="/Posts" className={STYLE.productTab}>
              <Button
                variant={
                  location.pathname === "/Posts" ? "outlined" : "secondary"
                }
                style={{
                  fontWeight: "bold",
                  borderColor:
                    location.pathname === "/Posts" ? "#FF9B42" : "#00A7E1",
                  color: location.pathname === "/Posts" ? "#FF9B42" : "#00A7E1",
                }}
              >
                Posts
              </Button>
            </Link>
            <Link to="/privacy-policy" className={STYLE.productTab}>
              <Button
                variant={
                  location.pathname === "/privacy-policy"
                    ? "outlined"
                    : "secondary"
                }
                style={{
                  fontWeight: "bold",
                  borderColor:
                    location.pathname === "/privacy-policy"
                      ? "#FF9B42"
                      : "#00A7E1",
                  color:
                    location.pathname === "/privacy-policy"
                      ? "#FF9B42"
                      : "#00A7E1",
                }}
              >
                Privacy Policy
              </Button>
            </Link>
          </div>
        ) : (
          <IconButton
            disabled={disable}
            className={STYLE.menuBtn}
            onClick={() => dispatch(toggleMenu())}
            style={{ color: disable ? "#cccccc" : "black" }}
          >
            <MenuIcon
              style={{
                color: disable ? "#091d30" : "#1976d2",
              }}
            />
          </IconButton>
        )}
        {/* <FacebookAuth /> */}
        <ShoppingCart windowWidth={windowWidth} windowHeight={windowHeight} />
      </Toolbar>
    </AppBar>
  );
};
// rgba(0, 0, 0, 0.26)
// rgba(0, 0, 0, 0.54)
