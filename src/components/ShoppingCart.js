import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "../Hooks/formatCurrency";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import {
  decrementProductList,
  incrementProductList,
  removeItem,
} from "../app/features/shoppingCart/ShoppingCartSlice";

const ITEM_HEIGHT = 100;

export const ShoppingCart = ({ windowWidth }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.shoppingCart);
  const totalCartValue = cartItems.reduce(
    (prevValue, item) => item.quantity * item.price + prevValue,
    0
  );
  const disable = useSelector((state) => state.toggleCart.buttonToggle);
  const itemsCounter = useSelector((state) => state.shoppingCart.quantity);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        disabled={disable}
        aria-label="more"
      >
        <Badge color="secondary" badgeContent={itemsCounter}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
          disablePadding: "true",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            maxWidth: windowWidth > 480 ? "300px" : null,
            minWidth: windowWidth > 480 ? "280px" : null,
            width: "100%",
            boxShadow: "0px 0px 10px 6px #6F38C5",
          },
        }}
      >
        <Typography
          component="div"
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1",
            textAlign: "center",
            background: "white",
            boxShadow: "0 10px 20px -5px rgba(115,115,115,0.75)",
            color: "#6F38C5",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            padding: "5px 0",
          }}
        >
          Shopping Cart
        </Typography>

        {cartItems.map((item) => (
          <MenuItem
            disableTouchRipple="true"
            key={item.id}
            selected={item === "Pyxis"}
          >
            <Card key={item.id} sx={{ padding: "5px", cursor: "auto" }}>
              <Box sx={{ display: "flex" }}>
                <Link
                  style={{
                    textDecoration: "none",
                    maxWidth: "30%",
                    width: "100%",
                  }}
                  to="/"
                >
                  <CardMedia
                    sx={{
                      objectFit: "contain",
                      height: "100%",
                    }}
                    component="img"
                    image={item.image}
                    alt="img"
                  />
                </Link>

                <Typography
                  component="div"
                  style={{
                    width: "70%",
                    textAlign: "center",
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "space-between",
                    gap: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "-webkit-box",
                      fontWeight: "bold",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "center",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      boxSizing: "border-box",
                      whiteSpace: "normal",
                      fontSize: "0.8rem",
                      padding: "0 5px",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.title}
                  </div>

                  <div>{formatCurrency(item.price)}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      gap: "10px",
                      boxSizing: "border-box",
                      background: "#EFF5F5",
                      borderRadius: "10px",
                      width: "80%",
                      alignSelf: "center",
                    }}
                  >
                    <IconButton
                      sx={{ color: "#6F38C5" }}
                      disableTouchRipple="true"
                      onClick={(e) => {
                        e.preventDefault();
                        return dispatch(decrementProductList(item));
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <div style={{ color: "#0000008a" }}>x{item.quantity}</div>
                    <IconButton
                      sx={{ color: "#6F38C5" }}
                      disableTouchRipple="true"
                      onClick={(e) => {
                        e.preventDefault();
                        return dispatch(incrementProductList(item));
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </Typography>
              </Box>
              <CardContent
                style={{
                  paddingBottom: "0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0",
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    paddingTop: "10px",
                  }}
                >
                  <div style={{ color: "#0000008a" }}>
                    Total:&nbsp;{formatCurrency(item.price * item.quantity)}
                  </div>
                  <Tooltip title="Delete">
                    <IconButton
                      disableTouchRipple="true"
                      onClick={(e) => {
                        e.preventDefault();
                        return dispatch(removeItem(item));
                      }}
                    >
                      <DeleteOutlineIcon sx={{ color: "#FF7D7D" }} />
                    </IconButton>
                  </Tooltip>
                </Typography>
              </CardContent>
            </Card>
          </MenuItem>
        ))}
        {totalCartValue ? (
          <Typography
            component="div"
            style={{
              position: "sticky",
              bottom: "0",
              zIndex: "1",
              textAlign: "center",
              background: "white",
              boxShadow: " 0 -10px 20px -5px rgba(115,115,115,0.75)",
              fontWeight: "bold",
              borderTopLeftRadius: "50%",
              borderTopRightRadius: "50%",
              padding: "5px 0",
            }}
          >
            Total:&nbsp;{formatCurrency(totalCartValue)}
          </Typography>
        ) : (
          <Typography
            sx={{ textAlign: "center", padding: "10px 0" }}
            component="div"
          >
            No items
          </Typography>
        )}
      </Menu>
    </div>
  );
};
