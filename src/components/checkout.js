import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Checkout(){
const cartCheck=useSelector((state)=>state.list.cartItems);
console.log("Cart Item", cartCheck)

    return(
<div className='container'>
   {cartCheck.map((i, index)=> 
   <Card
    key={i.id || index}
    variant="solid"
    color="primary"
    invertedColors
    sx={{
      boxShadow: 'lg',
      width: 400,
      maxWidth: '100%',
      overflow: 'auto',
      resize: 'horizontal',
    }}
  >
    <div>
      <Typography level="h2">
        ${i.price}
      </Typography>
    </div>
    <CardContent>
      <Typography level="title-lg">{i.title}</Typography>
      <Typography level="body-md">
        {i.description}
      </Typography>
    </CardContent>
  </Card> )}
   
   
   
   
      
    </div>
    )
}