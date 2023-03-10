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
  const [background,setbackground]=useState<string[]>(['bg-white','bg-white','bg-white'])
  const dispatch = useDispatch();

  const showDashboard = () => {
    dispatch(
      setLoginState({
        isLogged: true,
      })
    );
  };
  const showMonitor = () => {
    dispatch(setDashboardState(1));
  };
  const setWallet = (
    name: string,
    symbol: string,
    chainId:string,
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
    
      <div className="relative flex flex-col bg-[#F6F8FD] items-stretch h-screen">
        <div className="flex flex-col space-x-20 w-full h-5/6">
          <div className="flex flex-row space-x-20 m-24 ">
            <div>
              <label className="text-3xl">Setup Portfolio Monitoring</label>
            </div>
            <div className="w-2/3">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                  className="bg-white text-black text-sm rounded-lg  w-full pl-10 p-2.5 dark:placeholder-black dark:text-black "
                  placeholder="Search by network names"
                  required
                />
              </div>
            </div>
          </div>
          <div >
            <div className="flex flex-row overflow-auto space-x-32">
              {cards.map((item, index) => (
                <div
                className={`cursor-pointer ml-20 rounded  ${background[index]}`} 
                  key={index}
                  onClick={() =>
                   {setWallet(
                      item.name,
                      item.symbol,
                      item.chainId,
                      item.image,
                      item.addreses
                    )
                    background[index]='bg-[#6B8068]'
                   }
                  }
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
        {modal&&<div className="overlay-div absolute z-10 w-full  bg-opacity-5 bg-gray-800 flex justify-end">
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
        </div>}
        
        <footer className="m-20 bg-white w-5/6 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white">
            <span className="ml-16 text-sm text-gray-500 sm:text-center dark:text-gray-400">
              0 Network(s) Configured
            </span>
            <ul className="mr-48 flex flex-wrap items-center mt-3 text-sm text-[#6B8068]-500 dark:text-[#6B8068] sm:mt-0">
              <li>
                <a
                  onClick={showMonitor}
                  className="mr-4 hover:underline md:mr-6"
                >
                  Skip this step
                </a>
              </li>
              <li>
                <button
                  className="bg-[#6b8068] w-48 h-12 px-3 py-4 hover:bg-emerald-700 text-white rounded"
                  onClick={showDashboard}
                >
                  Setup Portfolio
                </button>
              </li>
            </ul>
          </footer>
      </div>
  );
}
export default PortfolioMonitoring;
