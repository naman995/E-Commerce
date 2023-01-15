import React, { useState } from "react";

const PaymentDetailCard = () => {
  const [showUpiDetails, setShowUpiDetails] = useState(false);
  const [showCreditCardDetails, setShowCreditCardDetails] = useState(false);
  const [showBankingDetails, setShowBankingDetails] = useState(false);
  const [showPayUDetails, setShowPayUDetails] = useState(false);

  function handleUpiChange(event) {
    setShowUpiDetails(event.target.checked);
  }

  function handleCreditCardChange(event) {
    setShowCreditCardDetails(event.target.checked);
  }

  function handleBankingChange(event) {
    setShowBankingDetails(event.target.checked);
  }

  function handlePayUChange(event) {
    setShowPayUDetails(event.target.checked);
  }

  return (
    <div className="mt-4">
      <p className="text-2xl">2. Payment</p>
      {/* UPI */}
      <div className="mt-4 flex flex-col space-y-4">
        <label className="font-serif">
          <input
            className="mr-2"
            type="checkbox"
            checked={showUpiDetails}
            onChange={handleUpiChange}
          />
          UPI
        </label>
        {showUpiDetails && (
          <div className="ml-4">
            <p>Accommodation: Hotel XYZ</p>
            <p>Location: New York City</p>
            <p>Rating: 4.5 stars</p>
          </div>
        )}
        {/* Credit Card */}
        <label className="font-serif ">
          <input
            className="mr-2"
            type="checkbox"
            checked={showCreditCardDetails}
            onChange={handleCreditCardChange}
          />
          Credit Card
        </label>
        {showCreditCardDetails && (
          <div className="ml-4">
            <p className="font-serif tracking-wider">CREDIT CARD NUMBER</p>
            <input
              className="outline-none border-black border-[2px]  text-sm w-[60%] placeholder:bg-gray-50 p-1 mt-1"
              type="tel"
              id="card-number"
              pattern="[0-9]{16}"
              maxlength="16"
            />
            <div className="flex mt-4 w-full " >
              <div className="w-[28%]">
                <p className="font-serif tracking-wider">EXPERY DATE</p>
                <input
                  className="outline-none border-black border-[2px]  text-sm w-full placeholder:bg-gray-50 p-1 mt-1"
                  type="tel"
                  id="card-number"
                  pattern="[0-9]{16}"
                  maxlength="16"
                />
              </div>
              <div className="ml-8 w-[28%]">
                <p className="font-serif tracking-wider">CVC/CVV</p>
                <input
                  className="outline-none border-black border-[2px]  text-sm w-full placeholder:bg-gray-50 p-1 mt-1"
                  type="tel"
                  id="card-number"
                  pattern="[0-9]{16}"
                  maxlength="16"
                />
              </div>
            </div>
          </div>
        )}
        {/* Online Banking India */}
        <label className="font-serif ">
          <input
            className="mr-2"
            type="checkbox"
            checked={showBankingDetails}
            onChange={handleBankingChange}
          />
          Online Banking India
        </label>
        {showBankingDetails && (
          <div className="ml-4">
            <p>Accommodation: Hotel XYZ</p>
            <p>Location: New York City</p>
            <p>Rating: 4.5 stars</p>
          </div>
        )}
        {/* PayU */}
        <label className="font-serif   ">
          <input
            className="mr-2"
            type="checkbox"
            checked={showPayUDetails}
            onChange={handlePayUChange}
          />
          PayU
        </label>
        {showPayUDetails && (
          <div className="ml-4">
            <p>Accommodation: Hotel XYZ</p>
            <p>Location: New York City</p>
            <p>Rating: 4.5 stars</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetailCard;
