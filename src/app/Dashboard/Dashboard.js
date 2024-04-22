import React from "react";
import Carousel from "../components/Carousel/Carousel";
import ProductsList from "../components/ProductsList/ProductsList";
import AddToCart from "../components/AddToCart";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Carousel />
      <h1 className="text-4xl p-5">Products</h1>
      <div className="flex items-center justify-cente">
        <ProductsList />
      </div>
    </div>
  );
};

export default Dashboard;
