import React, { useRef, useEffect } from "react";
import STYLE from "./ShoppingCart..module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import { GrFormClose } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  openCart,
  closeCart,
} from "../app/features/shoppingCart/cartToggleSlice";
import {
  incrementProductList,
  decrementProductList,
  removeItem,
} from "../app/features/shoppingCart/ShoppingCartSlice";
import { formatCurrency } from "../Hooks/formatCurrency";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { color } from "@mui/system";

export const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.shoppingCart.shoppingCart);
  const toggle = useSelector((state) => state.toggleCart.cartToggle);
  const dispatch = useDispatch();
  let shoppingCartRef = useRef();
  const totalCartValue = cartItems.reduce(
    (prevValue, item) => item.quantity * item.price + prevValue,
    0
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={toggle}
      onClose={() => dispatch(closeCart())}
      onOpen={() => dispatch(openCart())}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "450px",
          minWidth: "280px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#ABEDC6",
            position: "sticky",
            top: "0",
            zIndex: "1",
            padding: "1rem ",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#00A7E1" }}
          >
            Shopping Cart
          </div>
          <Button
            onClick={() => dispatch(closeCart())}
            variant="outlined"
            size="small"
          >
            <CloseIcon />
          </Button>
        </div>

        <div style={{ position: "relative" }}>
          <Card>
            {cartItems.map((item) => {
              return (
                <CardMedia
                  component="img"
                  width="10"
                  image={item.image}
                  alt="img"
                />
              );
            })}
          </Card>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

{
  /* <div className={STYLE.totalSumm}>
<div>Total:&nbsp;</div>
{formatCurrency(item.price * item.quantity)}
</div> */
}

// {totalCartValue === 0 && (
//   <div className={STYLE.noItemsMessahe}>No Items</div>
// )}
