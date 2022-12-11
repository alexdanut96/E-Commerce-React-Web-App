import React from "react";
import { useLocation } from "react-router-dom";
import STYLE from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../app/features/shoppingCart/cartToggleSlice";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ShoppingCart } from "./ShoppingCart";

export const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const disable = useSelector((state) => state.toggleCart.buttonToggle);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [count, setCount] = React.useState(0);

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
                onClick={() => setCount(count + 1)}
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
                onClick={() => setCount(count + 1)}
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
        <ShoppingCart windowWidth={windowWidth} />
      </Toolbar>
    </AppBar>
  );
};
