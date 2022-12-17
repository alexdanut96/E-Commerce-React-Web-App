import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { formatCurrency } from "../../Hooks/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProductList,
  decrementProductList,
  removeItem,
} from "../../app/features/shoppingCart/ShoppingCartSlice";
import Button from "@mui/material/Button";

export const Item = ({ item }) => {
  // const { productTitle } = useParams();
  const dispatch = useDispatch();
  const quantity =
    useSelector((state) =>
      state.shoppingCart.shoppingCart.find((n) => n.id === item.id)
    )?.quantity || 0;

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/Products/${item.title.replace("/", "")}/cpd/${item.id}`}
    >
      <Card sx={{ opacity: "0.9" }}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              maxWidth: "100%",
            }}
            component="img"
            image={item.image}
            alt="img"
          />
          <Typography
            style={{
              height: "48px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              textAlign: "center",
              wordBreak: "break-word",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              marginTop: "10px",
              fontWeight: "bold",
            }}
            component="div"
          >
            {item.title}
          </Typography>
          <Typography style={{ marginTop: "10px" }} component="div">
            {formatCurrency(item.price)}
          </Typography>
          <Typography
            onClick={(e) => e.preventDefault()}
            style={{ width: "100%" }}
            component="div"
          >
            {quantity <= 0 ? (
              <Button
                style={{
                  background: "#3AA7A3",
                  marginBottom: "25px",
                  marginTop: "25px",
                  width: "100%",
                }}
                variant="contained"
                onClick={() => dispatch(incrementProductList(item))}
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
                    width: "100%",
                    alignSelf: "center",
                  }}
                  component="div"
                >
                  <IconButton
                    sx={{ color: "#6F38C5" }}
                    onClick={() => dispatch(decrementProductList(item))}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <div style={{ color: "#0000008a" }}>{quantity}</div>
                  <IconButton
                    sx={{ color: "#6F38C5" }}
                    onClick={() => dispatch(incrementProductList(item))}
                  >
                    <AddIcon />
                  </IconButton>
                </Typography>
                <Button
                  style={{
                    background: "#A4243B",
                    width: "100%",
                    marginTop: "10px",
                  }}
                  variant="contained"
                  onClick={() => dispatch(removeItem(item))}
                >
                  remove
                </Button>
              </>
            ) : null}
          </Typography>

          {/* {quantity > 0 && (
           
          )} */}
          {/* {quantity > 0 && (
           
          )} */}
        </CardContent>
      </Card>
    </Link>
  );
};
