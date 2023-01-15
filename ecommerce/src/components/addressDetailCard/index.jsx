import React from "react";

const AddressDetailCard = () => {
  return (
    <>
      <div className="flex justify-between items-center mr-20">
        <p className="text-2xl">1. Address Details</p>
        <p className="underline text-[15px]">Edit</p>
      </div>
      <div className="ml-4 mt-4  font-serif">
        <p className="text-[12px] font-bold tracking-wider">SHIPPING ADDRESS</p>
        <p className="text-[12px] text-gray-500">Bessie Cooper</p>
        <p className="text-[12px] text-gray-500">
          517 Washington Ave. Manchester,
        </p>
        <p className="text-[12px] text-gray-500 ">Kentucky 39495</p>
      </div>
    </>
  );
};

export default AddressDetailCard;
