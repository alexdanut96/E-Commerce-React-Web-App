import React from "react";
import STYLE from "./Header.module.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
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

export const Header = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggleCart.cartToggle);
  const disable = useSelector((state) => state.toggleCart.buttonToggle);
  const menu = useSelector((state) => state.toggleCart.menuToggle);
  const itemsCounter = useSelector((state) => state.shoppingCart.quantity);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      background: disable ? "#e79393" : "red",
    },
  }));

  document.body.style.overflow = toggle || menu ? "hidden" : "auto";

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
    <div className={STYLE.container}>
      {windowWidth > 480 ? (
        <div className={STYLE.tabs}>
          <Link to="/" className={STYLE.homeTab}>
            Home
          </Link>
          <Link to="/Products" className={STYLE.productTab}>
            Products
          </Link>
          <Link to="/Posts" className={STYLE.productTab}>
            Posts
          </Link>
        </div>
      ) : (
        <button
          disabled={disable}
          className={STYLE.menuBtn}
          onClick={() => dispatch(toggleMenu())}
          style={{ color: disable ? "#cccccc" : "black" }}
        >
          <MenuIcon />
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
      {(menu || toggle) && <div className={STYLE.shadyBackground} />}
    </div>
  );
};
