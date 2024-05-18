import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useDispatch } from "react-redux";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

export default function Cards({ image, title, description, price }) {
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: "ADD_CART" }, [dispatch]);
    dispatch({ type: "CART_ITEMS", payload: { image, title, price, description } }, [
      dispatch,
    ]);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <Card
      sx={{
        maxWidth: 400,
        marginBottom: 5,
        boxShadow: hover
          ? "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)"
          : "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
        transition: "0.3s ease-in",
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <CardMedia component="img" width="440" height="240" image={image} sx={{padding:1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",}} />
      <CardContent>
        <Typography gutterBottom level="title-lg">
          {title}
        </Typography>
        <Typography level="body-lg" variant="plain" color="text.secondary">
          {description}
        </Typography>
        <div className="d-flex justify-content-between p-3">
          {loading ? (
            <Button color="primary" loading variant="solid"></Button>
          ) : (
            <Button
              color="primary"
              variant="outlined"
              onClick={handleClick}
              startDecorator={<ShoppingCartCheckoutIcon />}
              sx={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}
            >
              {" "}
              Add to Cart
            </Button>
          )}

          <Typography level="body-md">${price}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
