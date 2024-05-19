import * as React from "react";
import Typography from "@mui/joy/Typography";
import { useSelector } from "react-redux";
import { Paper, useMediaQuery } from "@mui/material";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Avatar from "@mui/joy/Avatar";
import Box from '@mui/joy/Box';

export default function CartCard() {
  const cart = useSelector((state) => state.list.cartItems);
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  

  return (
    
    <div className="container-md">
      <Typography level="h1" className="text-center" sx={{padding:'1rem'}}>Your Cart ({cart.length}) </Typography>
      <div className="container pt-5 d-md-flex flex-column align-items-center justify-content-center">
      <Box
             sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4,
        width:'100%'
      }}
            >
            <List variant="outline">
           
         {cart.map(i=>{
         return(
          <div>
          <Paper elevation={4} sx={{padding:1, marginBottom:2}}>
            <ListItem sx={{padding:2, }}>
              <ListItemDecorator>
                <Avatar size="lg" src={i.image} sx={{marginRight:1}} />
              </ListItemDecorator>
              <Typography level="title-lg">
              {i.title}
              </Typography>
            </ListItem>
            <ListItem>
            <Typography level="body-lg">
            {i.description}
            </Typography>
            </ListItem>
            <ListDivider inset="gutter" />
            <Typography level="body-lg">
            $ {i.price}
            </Typography>
            </Paper>
            </div>
         ) 
         })}
         </List>
     
         <Typography level="h3">Sub Total = $ {totalPrice}</Typography>
         </Box>
        <Button
          variant="outlined"
          color="success"
          sx={{ width: "100%", marginTop:"90%" }}
          level="body-lg"
          onClick={() => navigate('/checkout')}
        >
       Proceed to Buy
          
        </Button>
      </div>

    </div>


  );
}
