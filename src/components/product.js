import React, { useEffect, useState } from "react";
import Cards from "./card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/action";
import "./product.css";
import Categories from "./category";
import Ad from './ad'


function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.list.products);
  const searchedItem = useSelector((state) => state.list.searchedItem);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 20;
//for dispatch
  useEffect(() => {
    dispatch(fetchProducts(), [dispatch]);
  });

// For infinte scroll
 

  return (
    <div className=" deck container mt-5">
    <Ad/>
      <div className="container filter-grp mt-5 mb-5">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {products
        .filter((product) => {
          const isCategoryMatch =
            selectedCategory === "All" ||
            selectedCategory === "" ||
            product.category === selectedCategory;

          const isSearchedItem =
            searchedItem === "" ||
            product.title.toLowerCase().includes(searchedItem.toLowerCase());

          return isCategoryMatch && isSearchedItem;
        })
        .map((product, index) => (
          
          <Cards
            key={index}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
          />
         
        ))}
       
    </div>
  );
}

export default Product;
