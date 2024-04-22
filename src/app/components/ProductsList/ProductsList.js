"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProducts } from "@/lib/products";

const ProductsList = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const { products } = await getAllProducts();

  //   const products = res.data;
  return (
    <div className="flex flex-row flex-wrap">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
