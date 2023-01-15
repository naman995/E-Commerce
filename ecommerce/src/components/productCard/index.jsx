import React from "react";
import productImage from "../../assets/images/product1.png";

const ProductCard = () => {
  return (
    <div className="flex mt-5">
      <div>
        <img className="w-26" src={productImage} alt="productImage" />
      </div>
      <div className="ml-5">
        <p className="text-2xl">Raglan Style sweaters</p>
        <div className="flex ">
          <div className="text-xl line-through">$2,300</div>
          <div className="ml-3 text-xl">$1199.00</div>
        </div>
        <p className="text-[10px] text-gray-400">( Prices include GST )</p>
        <p>Product ID: 4064533893122 </p>
        <p>Colour: Pool Blue</p>
        <div className="flex">
          <div>
            <p className=" font-serif ">Size: L </p>
          </div>
          <div>
            <p className="ml-4 font-serif">Count : 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
