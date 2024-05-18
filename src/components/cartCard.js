import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/joy/Button";
import { Link, Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function CartCard() {
  const cart = useSelector((state) => state.list.cartItems);
  const matches1 = useMediaQuery("(min-width:1100px)");
  const matches2 = useMediaQuery("(min-width:800px)");
  const navigate = useNavigate();

  return (
    
    <div className="container">
      <Typography level="h1">Your Cart </Typography>
      <div className="container d-flex flex-column justify-content-center align-items-center p-5">
        {cart.map((item) => {
          return (
            <Card
              orientation="horizontal"
              variant="outlined"
              sx={{ width: 360, marginBottom: 3, marginRight: 3 }}
              key={item.id} // Ensure unique key
            >
              <CardOverflow>
                <AspectRatio ratio="1" sx={{ width: 90 }}>
                  <img
                    src={item.image}
                    srcSet={item.image}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography fontWeight="md" textColor="success.plainColor">
                  {item.title}
                </Typography>
                <Typography level="body-sm">$ {item.price}</Typography>
              </CardContent>
            </Card>
          );
        })}
        <Button
          variant="outlined"
          color="success"
          sx={{ width: 300, margin: "auto" }}
          level="body-lg"
          onClick={() => navigate('/checkout')}
        >
       Proceed to Buy
          
        </Button>
      </div>

    </div>


  );
}
