import React from "react";
import STYLE from "./Header.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  toggleMenu,
} from "../app/features/shoppingCart/cartToggleSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggleCart.cartToggle);
  const disable = useSelector((state) => state.toggleCart.buttonToggle);
  const menu = useSelector((state) => state.toggleCart.menuToggle);
  const itemsCounter = useSelector((state) => state.shoppingCart.quantity);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

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
          <AiOutlineMenu />
        </button>
      )}

      <button
        disabled={disable}
        style={{ position: "relative", color: disable ? "#cccccc" : "black" }}
        onClick={() => dispatch(toggleCart())}
        className={STYLE.shoppingCart}
      >
        <AiOutlineShopping />

        {itemsCounter > 0 && (
          <div
            style={{ backgroundColor: disable ? "#e79393" : "red" }}
            className={STYLE.itemTag}
          >
            {itemsCounter}
          </div>
        )}
      </button>
      {(menu || toggle) && <div className={STYLE.shadyBackground} />}
    </div>
  );
};
