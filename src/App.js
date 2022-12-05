import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
// import STYLE from "./App.module.css";
import { Header } from "./components/Header";
import { Posts } from "./Pages/Posts";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { ShoppingCart } from "./components/ShoppingCart";
import { MenuSlider } from "./components/MenuSlider";

export default function App() {
  return (
    <>
      <div
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <Header />
        <ShoppingCart />
        <MenuSlider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
