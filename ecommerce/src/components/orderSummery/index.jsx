import React from "react";
import PriceDetails from "../priceDetails";
import ProductCard from "../productCard";

const OrderSummery = () => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-2xl">Order Summery</p>
        <p className="underline text-[15px]">Edit</p>
      </div>
      <div className="border-b-[2px] border-gray-500 pb-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <div>
        <PriceDetails/>
      </div>

    </>
  );
};

export default OrderSummery;
