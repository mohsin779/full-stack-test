import React from "react";
import styles from "./ProductCard.module.css";
import AddToCart from "../AddToCart";

const ProductCard = ({ product }) => {
  return (
    // <div className={styles.card}>
    // <div className={"p-5 my-5 text-white text-xl"}>
    //   <AddToCart />
    // </div>

    <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
      <figure>
        <img src={product.image} alt="Product" />
      </figure>
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <h2 className="card-title">{product.name}</h2>
          <h2>${product.price}</h2>
        </div>
        <div className="flex flex-row">
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
          <h3 className="card-title">({product.reviews})</h3>
        </div>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
