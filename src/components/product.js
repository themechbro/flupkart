import React, { useEffect } from "react";
import Cards from "./card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/action";
import './product.css'




function Product(){
  const dispatch= useDispatch();
  const products= useSelector((state)=> (state.list.products ));
  



  useEffect(()=>{
    dispatch(fetchProducts(),[dispatch])
  })



    return(
        <div className="deck container mt-5" >
            {products.map((product, index)=>{
              return <Cards key={index} 
              image={product.images[0]} 
              title={product.title} 
              description={product.description} 
              />
            })}
        </div>
    )
}

export default Product;