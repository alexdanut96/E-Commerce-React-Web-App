import React from "react";
import STYLE from "./Item.module.css";
import { formatCurrency } from "../Hooks/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProductList,
  decrementProductList,
  removeItem,
} from "../app/features/shoppingCart/ShoppingCartSlice";

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
        <button
          onClick={() => dispatch(incrementProductList(item))}
          className={STYLE.addBtn}
        >
          Add to cart
        </button>
      )}
      {quantity > 0 && (
        <div className={STYLE.changeQntContainer}>
          <button
            onClick={() => dispatch(decrementProductList(item))}
            className={STYLE.changeQnt}
          >
            -
          </button>
          <div className={STYLE.quantity}>{quantity}</div>
          <button
            onClick={() => dispatch(incrementProductList(item))}
            className={STYLE.changeQnt}
          >
            +
          </button>
        </div>
      )}
      {quantity > 0 && (
        <button
          onClick={() => dispatch(removeItem(item))}
          className={STYLE.removeBtn}
        >
          remove
        </button>
      )}
    </div>
  );
};
