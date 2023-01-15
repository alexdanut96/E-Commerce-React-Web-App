import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Posts } from "./Pages/posts/Posts";
import { HomePage } from "./Pages/home page/HomePage";
import { PrivacyPolicy } from "./Pages/Privacy Policy/PrivacyPolicy";
import { Products } from "./Pages/products/Products";
import { MenuSlider } from "./components/menu slider/MenuSlider";
import { SingleProduct } from "./components/shared/SingleProduct";
import { Skeleton } from "./Skeletons/single product skeleton/Skeleton";

export default function App() {
  return (
    <>
      <Header />
      <MenuSlider />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Skeleton" element={<Skeleton />} />
        <Route
          path="/Products/:productTitle/cpd/:id"
          element={<SingleProduct />}
        />
      </Routes>
      <Footer />
    </>
  );
}
