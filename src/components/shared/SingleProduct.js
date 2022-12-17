import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../../Hooks/formatCurrency";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/Button";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Description } from "../product description/Description";
import { storeData } from "../../app/features/fetched data/FetchedDataSlice";
import {
  incrementProductList,
  decrementProductList,
  removeItem,
} from "../../app/features/shoppingCart/ShoppingCartSlice";
import {
  enableButton,
  disableButton,
} from "../../app/features/shoppingCart/cartToggleSlice";
import axios from "axios";

export const SingleProduct = () => {
  const baseURL = "https://fakestoreapi.com/products";
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.products.data);
  const quantity =
    useSelector((state) =>
      state.shoppingCart.shoppingCart.find((n) => JSON.stringify(n.id) === id)
    )?.quantity || 0;
  let product = null;

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const windowWidthSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowWidthSize);
    return function () {
      window.removeEventListener("resize", windowWidthSize);
    };
  }, []);

  async function getData() {
    dispatch(disableButton());
    await axios.get(baseURL).then((response) => {
      dispatch(storeData(response.data));
    });
    dispatch(enableButton());
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (item) {
    product = item.find((i) => JSON.stringify(i.id) === id);
  }

  return (
    <div
      style={{
        padding: "0 1.5rem 0 1.5rem",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Card
        sx={
          windowWidth > 480
            ? {
                // height: "500px",
                boxShadow: "0px 0px 10px 6px #6F38C5",
                opacity: "0.95",
                display: "flex",
                color: "white",
                maxWidth: "70rem",
                marginRight: "auto",
                marginLeft: "auto",
                width: "100%",
                boxSizing: "border-box",
              }
            : {
                flexDirection: "column",
                boxShadow: "0px 0px 10px 6px #6F38C5",
                opacity: "0.95",
                display: "flex",
                color: "white",
                maxWidth: "70rem",
                marginRight: "auto",
                marginLeft: "auto",
                width: "100%",
                boxSizing: "border-box",
              }
        }
      >
        {product ? (
          <div
            style={
              windowWidth > 480
                ? { display: "flex" }
                : { display: "flex", flexDirection: "column" }
            }
          >
            <CardContent
              sx={
                windowWidth > 480
                  ? {
                      boxSizing: "border-box",
                      color: "black",
                      width: "100%",
                      maxWidth: "50%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : {
                      boxSizing: "border-box",
                      color: "black",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }
              }
            >
              <CardMedia
                sx={{
                  maxHeight: "500px",
                  width: "100%",
                  // height: "100%",
                  objectFit: "contain",
                }}
                component="img"
                image={product.image}
                alt="img"
              />
            </CardContent>
            <CardContent
              sx={
                windowWidth > 480
                  ? {
                      width: "50%",
                      color: "black",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      borderLeft: "1px solid #ccc",
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                      boxSizing: "border-box",
                    }
                  : {
                      width: "100%",
                      color: "black",
                      marginBottom: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: windowWidth > 480 ? "30px" : "20px",
                      boxSizing: "border-box",
                    }
              }
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  // textAlign: "center",
                  fontSize: windowWidth > 480 ? "1.5rem" : "1.3rem",
                }}
                component="div"
              >
                {product.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: windowWidth > 480 ? "1.5rem" : "1.3rem",
                }}
                component="div"
              >
                {formatCurrency(product.price)}
              </Typography>

              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                component="div"
              >
                {quantity <= 0 ? (
                  <Button
                    style={{
                      background: "#3AA7A3",
                      marginBottom: "25px",
                      marginTop: "25px",
                      width: "80%",
                    }}
                    variant="contained"
                    onClick={() => dispatch(incrementProductList(product))}
                  >
                    Add to cart
                  </Button>
                ) : quantity > 0 ? (
                  <>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        gap: "10px",
                        boxSizing: "border-box",
                        background: "#EFF5F5",
                        borderRadius: "5px",
                        width: "80%",
                        alignSelf: "center",
                      }}
                      component="div"
                    >
                      <IconButton
                        sx={{ color: "#6F38C5" }}
                        onClick={() => dispatch(decrementProductList(product))}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <div style={{ color: "#0000008a" }}>{quantity}</div>
                      <IconButton
                        sx={{ color: "#6F38C5" }}
                        onClick={() => dispatch(incrementProductList(product))}
                      >
                        <AddIcon />
                      </IconButton>
                    </Typography>
                    <Button
                      style={{
                        background: "#A4243B",
                        width: "80%",
                        marginTop: "14px",
                      }}
                      variant="contained"
                      onClick={() => dispatch(removeItem(product))}
                    >
                      remove
                    </Button>
                  </>
                ) : null}
              </Typography>
              <Description
                description={product.description}
                title="description"
              />
            </CardContent>
          </div>
        ) : (
          <div>{null}</div>
        )}
      </Card>
    </div>
  );
};
