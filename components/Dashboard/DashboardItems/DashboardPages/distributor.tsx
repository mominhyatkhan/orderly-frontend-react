import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import PriceCard from "../SubComponents/priceCards";
import "react-datepicker/dist/react-datepicker.css";

const Distributor = () => {
  const [search, setSearch] = useState<string>();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex p-10 flex-col w-4/6">
      <div className="flex">
        <div className="flex space-x-80 w-full">
          <h1 className="text-2xl">Distribution</h1>

          <div className="w-96 h-8 ">
            <div className="relative w-full flex flex-row bg-white text-sm p-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    clipRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-full pl-6">
                <input
                  type="text"
                  id="simple-Search"
                  onChange={(e) => {
                    setSearch(e.currentTarget.value);
                  }}
                  className=" w-full placeholder:text-gray-500"
                  placeholder="You can set up Addresses & Group in"
                  required
                />
              </div>
              <div className="">
                <a className="text-gray-400">Contacts</a>
                <a className="text-gray-400 ml-5">Close</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-4">
          <button
            type="button"
            className="bg-[#6b8068] w-36 h-8 hover:bg-emerald-700 text-white rounded"
          >
            Distribute
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-2 item-center mt-8">
        <div className="w-2/4 bg-white h-24">
          <PriceCard heading="Total distributed" price="0.00" />
        </div>
        <div className="w-2/4 bg-white h-24">
          <PriceCard heading="Total distributed" price="0.00" />
        </div>
      </div>
      <div className="flex flex-row space-x-2 mt-8">
        <div className="flex self-center w-2/4 bg-white h-10">
          <span className="self-center">
            <svg
              className="w-5 h-5 text-gray-500 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
          <select className="w-full bg-white ml-2 text-gray-600">
            <option>All Tokens</option>
          </select>
        </div>
        <div className="w-2/4 bg-white h-10">
          <div className="flex flex-row items-center">
            <DatePicker
              className="bg-white p-2 w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date!)}
            />
            <svg
              aria-hidden="true"
              fill="none"
              className="w-5 h-5 m-2 text-gray-500"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row  mt-6 items-center text-gray-400">
        <div className="space-x-2">
          <button className="h-10 w-16 bg-gray-200 rounded focus:bg-white">
            All
          </button>
          <button className="h-10 w-16 bg-gray-200 rounded focus:bg-white">
            In
          </button>
          <button className="h-10 w-16 bg-gray-200 rounded focus:bg-white">
            Out
          </button>
        </div>
        <div className="space-x-2 ml-8">
          <button className="h-10 w-16 bg-gray-200 rounded focus:bg-white">
            All
          </button>
          <button className="h-10 w-16 bg-gray-200 rounded focus:bg-white">
            Past
          </button>
          <button className="h-10 w-28 bg-gray-200 rounded focus:bg-white">
            Upcoming
          </button>
          <button className="h-10 w-40 bg-gray-200 rounded focus:bg-white">
            Pending Distribution
          </button>
        </div>
      </div>
      <div className="mt-10 bg-white">
        <div className="flex">
          <table className="border-separate w-full">
            <thead>
              <tr className="w-auto">
                <th className="font-light  text-gray-500">TX Hash</th>
                <th className="font-light  text-gray-500">Date</th>
                <th className="font-light  text-gray-500">From</th>
                <th className="font-light  text-gray-500">TO</th>
                <th className="font-light  text-gray-500">Quantity</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Distributor;
