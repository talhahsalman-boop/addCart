import React from 'react'
import Navbar from "../components/Navbar";
import ProductCard from "../components/productCard";
import { useEffect, useState } from "react";

import axios from "axios";
const home = () => {
    const [product,setProduct] = useState([]);
  const getProduct = async ()=>{
    try {
      let response = await axios.get("https://dummyjson.com/products")
      setProduct(response.data.products);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getProduct();
  }, [])
  return (
    <>
      <Navbar />
      <div className="max-w-[1320px] mx-auto mt-25 grid grid-cols-4 gap-5">
         {
            product.map((obj,index)=>{
                return(
                <ProductCard data={obj} key = {index} />
                );
            })
         }
      </div>

    </>
  )
}

export default home
