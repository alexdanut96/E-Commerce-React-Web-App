import React from "react";
import STYLE from "./Item.module.css";
import { formatCurrency } from "../Hooks/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProductList,
  decrementProductList,
  removeItem,
} from "../app/features/shoppingCart/ShoppingCartSlice";
import Button from "@mui/material/Button";

export const Item = ({ item }) => {
  const dispatch = useDispatch();
  const quantity =
    useSelector((state) =>
      state.shoppingCart.shoppingCart.find((n) => n.id === item.id)
    )?.quantity || 0;

  return (
    <div className={STYLE.container}>
      <img className={STYLE.productImage} src={item.image} alt="img" />
      <div className={STYLE.title}>{item.title}</div>
      <div className={STYLE.price}>{formatCurrency(item.price)}</div>
      {quantity <= 0 && (
        // <button
        //   onClick={() => dispatch(incrementProductList(item))}
        //   className={STYLE.addBtn}
        // >
        //   Add to cart
        // </button>
        <Button
          style={{ marginTop: "1rem", background: "#4681f4", fontSize: "12px" }}
          variant="contained"
          onClick={() => dispatch(incrementProductList(item))}
        >
          Add to cart
        </Button>
      )}
      {quantity > 0 && (
        <div className={STYLE.changeQntContainer}>
          <Button
            variant="contained"
            style={{ background: "#5dbea3", fontSize: "12px" }}
            onClick={() => dispatch(decrementProductList(item))}
            className={STYLE.changeQnt}
          >
            -
          </Button>
          <div className={STYLE.quantity}>{quantity}</div>
          <Button
            variant="contained"
            style={{ background: "#5dbea3", fontSize: "12px" }}
            onClick={() => dispatch(incrementProductList(item))}
            className={STYLE.changeQnt}
          >
            +
          </Button>
        </div>
      )}
      {quantity > 0 && (
        <Button
          style={{ background: "red", fontSize: "12px", marginTop: "10px" }}
          variant="contained"
          onClick={() => dispatch(removeItem(item))}
          className={STYLE.removeBtn}
        >
          remove
        </Button>
      )}
    </div>
  );
};
