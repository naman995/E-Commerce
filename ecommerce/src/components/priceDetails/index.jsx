import React from 'react'

const PriceDetails = () => {
  return (
    <div className="w-full p-4 bg-black my-10 text-white">
      <p className='text-2xl'>Price Details</p>
      <div className='flex justify-between font-serif'>
        <p>Price (4 Items)</p>
        <p>$2347.00</p>
      </div>
      <div className='flex justify-between font-serif'>
        <p>Discount</p>
        <p>$50.00</p>
      </div>
      <div className='flex justify-between font-serif'>
        <p>Shipping Charges</p>
        <p>Free</p>
      </div>
      <div className='flex justify-between border-t-[1px] border-gray-400 mt-2 pt-2 font-serif'>
        <p>Total Amount</p>
        <p className='text-xl font-bold'>$2297.00</p>
      </div>
    </div>
  );
}

export default PriceDetails
