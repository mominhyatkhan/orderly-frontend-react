import { useState } from "react";

const InvestmentType = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white rounded-lg shadow dark:bg-white space-y-5">
      <h1>Investment Type</h1>
      <div className="flex flex-col w-full bg-gray-100 h-14 ">
        <h1 className="px-4 text-sm font-medium text-gray-700">
          Investment Type
        </h1>
        <select
          className=" bg-gray-100  px-4 py-2 pr-8 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <option>Individual</option>
          <option>Ethereum</option>
          <option>BitCoin</option>
          <option>Polygon</option>
        </select>
      </div>
      <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
        <label className="block text-sm font-medium leading-5 text-gray-700">
          Address
        </label>
        <input
          placeholder="0x000000000000000000"
          className="bg-gray-100 w-full h-6  rounded-md"
        />
      </div>
    </div>
  );
};
export default InvestmentType;
