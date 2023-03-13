import { ChangeEvent, useState } from "react";
type Props = {
  tge: number;
};
const ConstructSchedule: React.FC<Props> = ({ tge }) => {
  return (
    <div className="">
      <div className="flex flex-col space-x-4 text-[#6B8068] font-medium">
        <div className="border rounded-lg p-3">
          <div className="space-y-2">
            <div className="flex flex-row space-x-2">
              <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Lockup
                </label>
                <input className="bg-gray-100 w-full h-6  rounded-md" />
              </div>
              <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                <select className="bg-gray-100 w-full h-full rounded-md">
                  <option>Select an chain</option>
                  <option>Ethereum</option>
                  <option>Binance</option>
                  <option>Polygon</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="h-14 bg-gray-100 appearance-none w-2/4 bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  TGE
                </label>
                <label className="bg-gray-100 w-full h-6  rounded-md">
                  {tge}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-6 cursor-pointer mt-10 mb-3">
          <a>+ Add Lockup</a>
          <a>+ Add Distribution</a>
          <a>+ Add TGE</a>
        </div>
      </div>
    </div>
  );
};
export default ConstructSchedule;
