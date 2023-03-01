import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../pages/store";
import { setDashboardState } from "../../pages/slices/dashboardSlice";
import { setLoginState } from "../../pages/slices/loginSlice";

import Cards from "./cards";
import PortfolioModal from "./PortfolioAddressModal";

function PortfolioMonitoring() {
  const [isInfo, setInfo] = useState<boolean>(false);
  const cards = useSelector((state: RootState) => state.coinCards);
  const [search, setSearch] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [chainId, setChainId] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [address, setAddress] = useState<string[]>([]);
  const [background, setbackground] = useState<string[]>([
    "bg-white",
    "bg-white",
    "bg-white",
  ]);

  const setWallet = (
    name: string,
    symbol: string,
    chainId: string,
    image: string,
    address: string[]
  ) => {
    setName(name);
    setSymbol(symbol);
    setChainId(chainId);
    setImage(image);
    setAddress(address);
    setModal(!modal);
  };
  const closeModal = () => setModal(false);
  return (
    <div className="relative flex flex-col bg-[#F6F8FD] w-full h-full">
      <div className="flex flex-col space-x-20 w-max">
        <div className="flex flex-col mt-24 ml-24 mb-[24px]">
          <div className="flex flex-row space-x-[52px] w-full">
            <div className="flex items-center w-[252px] h-[28]">
              <h1 className="w-full text-xl">Setup Portfolio Monitoring</h1>
            </div>
            <div className="flex flex-col w-[584px] h-[34px]">
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="#6B8068"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-Search"
                  onChange={(e) => {
                    setSearch(e.currentTarget.value);
                  }}
                  className="bg-white text-black text-sm rounded-lg  w-full pl-10 p-3.5 dark:placeholder-black dark:text-black "
                  placeholder="Search by network names"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-1 mt-5 flex-row justify-end">
            <p className="font-bold text-sm">Why do we need this?</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
              onClick={() => setInfo(true)}
              onMouseLeave={() => setInfo(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <div className="flex absolute m-4 ">
              <div
                className={`${
                  isInfo ? "block" : "hidden"
                } bg-white w-[253px] h-[144px] ml-2 absolute flex z-32`}
              >
                <p className="mt-[13px] ml-[22px] w-[213px] h-[118px] font-normal text-[10px]">
                  Adding an address to your portfolio allows us to know what to
                  monitor when you add an investment for tracking. This is only
                  required if you want to use Orderly to monitor your
                  investments and receive notifications when tokens arrive.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-max overflow-auto space-x-[24px] mt-10">
            {cards.map((item, index) => (
              <div
                className={`cursor-pointer rounded  ${background[index]}`}
                key={index}
                onClick={() => {
                  setWallet(
                    item.name,
                    item.symbol,
                    item.chainId,
                    item.image,
                    item.addreses
                  );
                  background[index] = "bg-[#6B8068]";
                }}
              >
                <Cards
                  name={item.name}
                  symbol={item.symbol}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {modal && (
        <div className="overlay-div absolute z-10 w-full  bg-opacity-5 bg-gray-800 flex justify-end">
          <div className="flex h-screen w-96 bg-white justify-end">
            <PortfolioModal
              isOpen={modal}
              onClose={closeModal}
              Name={name}
              Symbol={symbol}
              chainId={chainId}
              Img={image}
              Address={address}
              background={setbackground}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default PortfolioMonitoring;
