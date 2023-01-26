import React, { useState } from "react";
type props = {
  lockup: React.Dispatch<React.SetStateAction<number>>;
  percentofToken: React.Dispatch<React.SetStateAction<number>>;
  vestingPeriod: React.Dispatch<React.SetStateAction<string>>;
};
const VestingComponent: React.FC<props> = ({
  lockup,
  percentofToken,
  vestingPeriod,
}) => {
 

  return (
    <div className="flex flex-col bg-white rounded-lg shadow dark:bg-white space-y-2.5">
      <h1>Vesting Details</h1>
      <div className="mb-4 bg-white">
        <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Lockup
          </label>
          <input
          type='number'
            placeholder="$0.00"
            onChange={(e)=>{lockup(parseInt(e.currentTarget.value))}}
            id="lockup"
            className="bg-gray-100 w-full h-6  rounded-md"
          />
        </div>
      </div>
      <div className="mb-4 bg-white">
        <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Percent of tokens
          </label>
          <input
          type='number'
          onChange={(e)=>{percentofToken(parseInt(e.currentTarget.value))}}
            placeholder="0%"
            id="percent of tokens"
            className="bg-gray-100 w-full h-6  rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col w-full bg-gray-100 h-14 ">
        <h1 className="block px-4 py-2 pr-8 text-sm font-medium leading-5 text-gray-700">
          Visiting period
        </h1>
        <select
          className="  bg-gray-100  px-4 py-2 pr-8 rounded-lg"
          onChange={(e)=>{vestingPeriod(e.currentTarget.value)}}
        >
          <option>none</option>
          <option>1 Month </option>
          <option>2 Months</option>
          <option>3 Months</option>
          <option>4 Months</option>
        </select>
      </div>
    </div>
  );
};

export default VestingComponent;
