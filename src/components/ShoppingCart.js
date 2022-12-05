import React, { useRef, useEffect } from "react";
import STYLE from "./ShoppingCart..module.css";
import { GrFormClose } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../app/features/shoppingCart/cartToggleSlice";
import {
  incrementProductList,
  decrementProductList,
  removeItem,
} from "../app/features/shoppingCart/ShoppingCartSlice";
import { formatCurrency } from "../Hooks/formatCurrency";

export const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.shoppingCart.shoppingCart);
  const toggle = useSelector((state) => state.toggleCart.cartToggle);
  const dispatch = useDispatch();
  let shoppingCartRef = useRef();
  const totalCartValue = cartItems.reduce(
    (prevValue, item) => item.quantity * item.price + prevValue,
    0
  );

  useEffect(() => {
    const handler = (e) => {
      if (!shoppingCartRef.current.contains(e.target)) {
        dispatch(closeCart());
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
        transform: !toggle && "translateX(110%)",
        // transition: !toggle ? "0s" : "0.3s",
      }}
      ref={shoppingCartRef}
    >
      <div className={STYLE.cartTitle}>
        <div>Shopping Cart</div>
        <div style={{ lineHeight: 0 }}>
          <GrFormClose
            onClick={() => dispatch(closeCart())}
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
        </div>
      </div>

      {totalCartValue === 0 && (
        <div className={STYLE.noItemsMessahe}>No Items</div>
      )}
      <div className={STYLE.content}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              margin: "0 10px",
              boxShadow: "0px 0px 30px 0px rgba(186, 182, 182, 0.75)",
            }}
          >
            <img className={STYLE.productImage} src={item.image} alt="img" />
            <div className={STYLE.productInfo}>
              <div className={STYLE.title}>{item.title}</div>
              <div>{formatCurrency(item.price)}</div>
              <div className={STYLE.quantityCustomization}>
                <button
                  onClick={() => dispatch(decrementProductList(item))}
                  className={STYLE.minusBtn}
                >
                  -
                </button>
                <div className={STYLE.quantity}>x{item.quantity}</div>
                <button
                  onClick={() => dispatch(incrementProductList(item))}
                  className={STYLE.plusBtn}
                >
                  +
                </button>
              </div>
            </div>
            <div className={STYLE.sum}>
              <button
                onClick={() => dispatch(removeItem(item))}
                className={STYLE.removeBtn}
              >
                <FaRegTrashAlt />
              </button>
              <div className={STYLE.totalSum}>
                <div>Total:&nbsp;</div>
                {formatCurrency(item.price * item.quantity)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={STYLE.checkout}>
        <div>Total:&nbsp;{formatCurrency(totalCartValue)}</div>
      </div>
    </div>
  );
};
