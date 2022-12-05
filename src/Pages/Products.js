import React, { useState, useEffect } from "react";
import STYLE from "./Products.module.css";
import axios from "axios";
import { Item } from "../components/Item";
import { SkeletonElement } from "../Skeletons/SkeletonElement";
import { nanoid } from "@reduxjs/toolkit";
import {
  disableButton,
  enableButton,
} from "../app/features/shoppingCart/cartToggleSlice";
import { useDispatch } from "react-redux";

export const Products = () => {
  const dispatch = useDispatch();
  const baseURL = "https://fakestoreapi.com/products";
  // const baseURL = "https://api.escuelajs.co/api/v1/products";
  const [post, setPost] = useState(null);

  async function getData() {
    dispatch(disableButton());
    await axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
    dispatch(enableButton());
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(post);
  // if (!post) return null;

  return (
    <>
      <div className={STYLE.headTitle}>Products</div>
      <div className={STYLE.container}>
        {!post
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
              <SkeletonElement key={n} />
            ))
          : post.map((item) => <Item key={nanoid()} item={item} />)}
      </div>
    </>
  );
};
