import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useDispatch } from 'react-redux';


export default function Cards({image, title, description}){
    const [hover, setHover] = useState(false);
    const [cart, setCart]= useState(false)
    const dispatch = useDispatch();
   
function handleClick(cart){
dispatch({ type: 'ADD_CART' });
console.log(cart)
}

    return (
        <Card sx={{ maxWidth: 400, marginBottom:5, 
        boxShadow: hover ? '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)' : '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        transition: '0.3s ease-in'
        
        }}
       onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
       
        >
  <CardMedia
          component="img"
          width="140"
          height="140"
          image={image} // Assuming 'image' is the property name for the image URL
           // Assuming 'title' is the property name for the product title
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <IconButton onClick={handleClick}>
          <ShoppingCartCheckoutIcon/>
        </IconButton>
</CardContent>
  </Card>
    )
}