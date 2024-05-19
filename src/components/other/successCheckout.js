import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function Sucess(){
    const cart= useSelector((state)=>state.list.cartItems);
    const navigate = useNavigate();


    return(
        <div class="position-relative p-5 text-center text-muted bg-success border border-dashed rounded-5">
        <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
        <svg class="bi mt-5 mb-3" width="48" height="48"><CheckCircleIcon sx={{color:'primary'}}/> </svg>
        <h1 class="text-body-emphasis text-light">Success</h1>
        <p class="col-lg-6 mx-auto mb-4 text-light">
          Your order containing {cart[0].title} and {cart.length-1} other item has been placed successfully.
        </p>
        <button class="btn btn-primary px-5 mb-5" type="button" onClick={() => navigate('/')}>
          Shop More
        </button>
      </div>
    )
}


