import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../pages/store";
import { setDashboardState } from "../../pages/slices/dashboardSlice";
import { setLoginState } from "../../pages/slices/loginSlice";

import Cards from "./cards";
import PortfolioModal from "./PortfolioAddressModal";

function PortfolioMonitoring() {
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
    <div className="relative flex flex-col bg-[#F6F8FD] items-stretch h-full">
      <div className="flex flex-col space-x-20 w-full">
        <div className="flex flex-row space-x-20 m-24 ">
          <div>
            <label className="text-3xl">Setup Portfolio Monitoring</label>
          </div>
          <div className="w-2/3">
            <div className="relative w-full">
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
        <div>
          <div className="flex flex-row overflow-auto space-x-32 ml-3">
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
