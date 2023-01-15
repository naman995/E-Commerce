import React from "react";
import AddressDetailCard from "@/components/addressDetailCard";
import OrderSummery from "@/components/orderSummery";
import PaymentDetailCard from "@/components/paymentDetailCard";
import ReviewCard from "@/components/reviewCard";

const index = () => {
  return (
    <div className="">
      <div className="py-6">
        <div className="text-center text-2xl ">
          <p>1. Address Details ---------- 2. Payment ---------- 3. Review</p>
        </div>
      </div>
      <div className="border-b-[2px] border-gray-500 mx-24"></div>
      <div className="flex flex-col mt-8 lg:flex-row">
        <div className=" w-full lg:w-[60%] lg:mx-24 ">
          <AddressDetailCard />
          <PaymentDetailCard />
          <ReviewCard />
        </div>
        <div className="w-full lg:w-[40%] lg:mx-24">
          <OrderSummery />
        </div>
      </div>
    </div>
  );
};

export default index;
