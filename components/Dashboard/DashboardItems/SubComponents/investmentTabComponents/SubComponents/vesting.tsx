import React, { useState } from "react";
type props = {
  lockup: React.Dispatch<React.SetStateAction<number>>;
  percentofToken: React.Dispatch<React.SetStateAction<number>>;
  tokenPercentValue: number;
};
const VestingComponent: React.FC<props> = ({
  lockup,
  percentofToken,
  tokenPercentValue,
}) => {
  const [islockup, setIsLockup] = useState<boolean>(true);
  const [isTge, setIsTge] = useState<boolean>(true);
  return (
    <div className="flex flex-col bg-white rounded-lg  dark:bg-white space-y-2.5">
      <h1>Vesting Details</h1>
      <div className="mb-4 bg-white">
        <div className="flex flex-row w-full justify-between mb-8">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium leading-5 text-[#687780]"
          >
            Lockup Duration
          </label>
          <div className="flex flex-row items-center w-3/4 justify-end space-x-1">
            <h1 className="text-gray-300">Off</h1>
            <label className="relative inline-flex content-center items-center cursor-pointer">
              <input
                type="checkbox"
                checked={islockup}
                onChange={() => setIsLockup(!islockup)}
                className="sr-only peer "
              />
              <div className="w-7 h-4 bg-gray-100 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-[#6B8068] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#6B8068] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-200 peer-checked:bg-gray-200"></div>
            </label>
            <h1 className="text-gray-300">On</h1>
          </div>
        </div>
        {islockup && (
          <div className="h-14 flex flex-row appearance-none border items-center justify-between w-full bg-white py-2 pr-8 rounded-lg mb-2">
            <div className="ml-2 flex-grow border-r-2 w-1/4 ">
              <input
                type="text"
                placeholder="0"
                onChange={(e) => {
                  lockup(parseInt(e.currentTarget.value));
                }}
                id="lockup"
                className=" ml-2 bg-white w-2/6 h-7  rounded-md"
              />
              <label className="">years</label>
            </div>
            <div className="ml-2 flex-grow border-r-2 border- w-1/4">
              <input
                type="text"
                placeholder="0"
                onChange={(e) => {
                  lockup(parseInt(e.currentTarget.value));
                }}
                id="lockup"
                className="bg-white w-2/6 h-7  rounded-md"
              />
              <label className="">months</label>
            </div>
            <div className="ml-2 flex-grow border-r-2 border- w-1/4">
              <input
                type="text"
                placeholder="0"
                onChange={(e) => {
                  lockup(parseInt(e.currentTarget.value));
                }}
                id="lockup"
                className="bg-white w-2/6 h-7  rounded-md"
              />
              <label className="">weeks</label>
            </div>
            <div className="ml-2 flex-grow border- w-1/4">
              <input
                type="text"
                placeholder="0"
                onChange={(e) => {
                  lockup(parseInt(e.currentTarget.value));
                }}
                id="lockup"
                className="bg-white w-2/6 h-7  rounded-md"
              />
              <label className="ml-2">days</label>
            </div>
          </div>
        )}
        <div className="flex flex-row w-full justify-between">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium leading-5 text-[#687780]"
          >
            Token at TGE (%)
          </label>
          <div className="flex flex-row items-center w-3/4 justify-end space-x-1">
            <h1 className="text-gray-300">Off</h1>
            <label className="relative inline-flex content-center items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isTge}
                onChange={() => setIsTge(!isTge)}
                className="sr-only peer "
              />
              <div className="w-7 h-4 bg-gray-100 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-[#6B8068] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#6B8068] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-200 peer-checked:bg-gray-200"></div>
            </label>
            <h1 className="text-gray-300">On</h1>
          </div>
        </div>
        {isTge && (
          <div className="w-full flex flex-row justify-between items-center border p-2 rounded-md">
            <div className="w-5/6">
              <div className="mb-2">
                <input
                  type="range"
                  onChange={(e) =>
                    percentofToken(parseInt(e.currentTarget.value))
                  }
                  className=" w-full h-0.5 bg-gray-300 accent-[#6B8068] "
                />
              </div>
              <div className="flex flex-row justify-between">
                <h1>0</h1>
                <h1>100</h1>
              </div>
            </div>
            <div>
              <h1 className="border p-2 mr-3">{tokenPercentValue}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VestingComponent;
