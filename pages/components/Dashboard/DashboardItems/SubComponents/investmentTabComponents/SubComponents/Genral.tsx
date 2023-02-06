import React, { useState } from "react";
type props = {
  Chain: React.Dispatch<React.SetStateAction<string>>;
  amountInvested: React.Dispatch<React.SetStateAction<number>>;
  investmentTransactionLink: React.Dispatch<React.SetStateAction<string>>;
};
const GenralComponent: React.FC<props> = ({
  Chain,
  amountInvested,
  investmentTransactionLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg shadow dark:bg-white space-y-2.5">
        <h1>General</h1>
        <div className="relative">
          <select
            className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg"
            onClick={(e) => {setIsOpen(!isOpen),Chain(e.currentTarget.value)}}
          >
            <option>Select an Token</option>
            <option>Ethereum</option>
            <option>Binance</option>
            <option>Polygon</option>
          </select>
        </div>
      </div>
      <div className="mb-4 bg-white">
        <div className="flex flex-col h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 rounded-lg">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium text-gray-700"
          >
            Amount Invested
          </label>
          <input
          type='number'
            placeholder="$0.00"
            id="investmentLink"
            onChange={(e)=>{amountInvested(parseInt(e.currentTarget.value))}}
            className="bg-gray-100 w-full h-7 rounded-md "
          />
        </div>
      </div>
      <div className="mb-4 bg-white">
        <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Investment transaction link
          </label>
          <input
            placeholder="sbakdaksjdbkasbdj"
            id="investmentLink"
            onChange={(e)=>{investmentTransactionLink(e.currentTarget.value)}}
            className="bg-gray-100 w-full h-6  rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default GenralComponent;
