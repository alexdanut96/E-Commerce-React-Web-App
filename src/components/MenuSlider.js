import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import STYLE from "./MenuSlide.module.css";
import { GrFormClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMenu,
  closeMenu,
} from "../app/features/shoppingCart/cartToggleSlice";

export const MenuSlider = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.toggleCart.menuToggle);
  let menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        dispatch(closeMenu());
      }
    };
    document.addEventListener("mousedown", handler);
    return function () {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={STYLE.slider}
      style={{
        transform: !menu && "translateX(-110%)",
        // transition: !menu ? "0s" : "0.3s",
      }}
      ref={menuRef}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <GrFormClose
          onClick={() => dispatch(toggleMenu())}
          style={{ fontSize: "30px", margin: "20px", cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          paddingLeft: "20px",
          fontSize: "1.2rem",
        }}
      >
        <Link
          onClick={() => dispatch(toggleMenu())}
          style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          to="/"
        >
          Home Page
        </Link>
        <Link
          onClick={() => dispatch(toggleMenu())}
          style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          to="/products"
        >
          Products
        </Link>
        <Link
          onClick={() => dispatch(toggleMenu())}
          style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          to="/posts"
        >
          Posts
        </Link>
      </div>
    </div>
  );
};
