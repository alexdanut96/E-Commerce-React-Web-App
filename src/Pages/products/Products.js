import React, { useState, useEffect } from "react";
import STYLE from "./Products.module.css";
import axios from "axios";
import { Item } from "../../components/item/Item";
import { SkeletonElement } from "../../Skeletons/products features skeleton/SkeletonElement";
import { storeData } from "../../app/features/fetched data/FetchedDataSlice";
import { nanoid } from "@reduxjs/toolkit";
import {
  disableButton,
  enableButton,
} from "../../app/features/shoppingCart/cartToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

export const Products = () => {
  let itemsByIncreasingPrice;
  let itemsByDecreasingPrice;
  let itemsByName;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);
  const baseURL = "https://fakestoreapi.com/products";
  // const baseURL = "https://api.escuelajs.co/api/v1/products";
  // const [post, setPost] = useState(null);
  const [sortBy, setSortBy] = useState("");

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  async function getData() {
    dispatch(disableButton());

    await axios.get(baseURL).then((response) => {
      // setPost(response.data)
      dispatch(storeData(response.data));
    });
    dispatch(enableButton());
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data) {
    itemsByIncreasingPrice = data.slice().sort((a, b) => a.price - b.price);
    itemsByDecreasingPrice = data.slice().sort((a, b) => b.price - a.price);
    itemsByName = data.slice().sort((a, b) => a.title.localeCompare(b.title));
  }

  // console.log(post);
  console.log(data);
  // if (!post) return null;

  return (
    <>
      <div className={STYLE.headTitle}>Products</div>
      <div className={STYLE.filter}>
        <FormControl sx={{ m: 0, minWidth: 100 }}>
          <InputLabel sx={{ color: "#a6e5e8" }} id="demo-simple-select-label">
            Sort by
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Age"
            onChange={handleChange}
            input={
              <OutlinedInput
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#a6e5e8",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },

                  color: "#a6e5e8",
                }}
                label="Sort by"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="byName">name</MenuItem>
            <MenuItem value="byIncreasingPrice">increasing price</MenuItem>
            <MenuItem value="byDecreasingPrice">decreasing price</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={STYLE.container}>
        {!data ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
            <SkeletonElement key={n} />
          ))
        ) : sortBy === "" ? (
          data.map((item) => <Item key={nanoid()} item={item} />)
        ) : sortBy === "byName" ? (
          itemsByName.map((item) => <Item key={nanoid()} item={item} />)
        ) : sortBy === "byIncreasingPrice" ? (
          itemsByIncreasingPrice.map((item) => (
            <Item key={nanoid()} item={item} />
          ))
        ) : sortBy === "byDecreasingPrice" ? (
          itemsByDecreasingPrice.map((item) => (
            <Item key={nanoid()} item={item} />
          ))
        ) : (
          <div>null</div>
        )}
      </div>
    </>
  );
};
