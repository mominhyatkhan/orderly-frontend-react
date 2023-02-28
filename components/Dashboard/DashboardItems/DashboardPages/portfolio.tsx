import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getwallets, GetWallletData } from "../../../../pages/api/BackendApi";
import { RootState } from "../../../../pages/store";

import { setDashboardState } from "../../../../pages/slices/dashboardSlice";
import {
  addWallet,
  filterWallets,
  filterWalletsChains,
} from "../../../../pages/slices/tokenslice";

import GlobalTokenTable from "../SubComponents/globalTokenTable";
import PreviousTokenTable from "../SubComponents/previousTokenTable";
import PriceCard from "../SubComponents/priceCards";
import UpcomingTokenTable from "../SubComponents/upcomingTokenTable";
import { addwalletsfromDb } from "../../../../pages/slices/walletSlice";
import { setchainselection } from "../../../../pages/slices/cardsSlice";

const Portfolio = () => {
  const wallets = useSelector((state: RootState) => state.tokens.wallet);
  const email = useSelector((state: RootState) => state.isLogin.user.email);
  const cards = useSelector((state: RootState) => state.coinCards);
  const dispatch = useDispatch();
  const [isnetwork, setIsNetwork] = useState<boolean>(false);
  const [ischain, setIsChain] = useState<boolean>(false);
  const [isalltrue, setIsallTrue] = useState<boolean>(true);
  const changeState = (index: number) => {
    dispatch(setDashboardState(index));
  };
  function filterwalletchains(name: string, ischainSelected: boolean) {
    if (name == "all") {
      setIsallTrue(true);
    } else {
      setIsallTrue(false);
    }
    dispatch(
      filterWalletsChains({ name: name, ischainSelected: ischainSelected })
    );
    dispatch(
      setchainselection({ name: name, ischainSelected: ischainSelected })
    );
  }
  function filterwallet(
    address: string,
    name: string,
    iswalletSelected: boolean
  ) {
    console.log(address);
    dispatch(
      filterWallets({
        address: address,
        name: name,
        iswalletSelected: iswalletSelected,
      })
    );
  }
  useEffect(() => {
    (async () => {
      try {
        if (!wallets.length) {
          const response = await getwallets(email);
          if (response.data) {
            console.log("im response data", response.data);
            dispatch(addwalletsfromDb(response.data));
            response.data.map(async (item: any, index: number) => {
              let wallet: any = {
                state: true,
                chain: item.chain,
                isemail: item.isemail,
                istelegram: item.istelegram,
                name: "",
                symbol: "",
                tableState: true,
                monitorState: true,
                chainAddress: "",
                nativeValue: 0,
                totalTokenValue: 0,
                tokenlist: [],
              };
              const dataresponse = await GetWallletData(
                item.chain,
                item.address
              );
              if (item.chain == "0x1") {
                wallet.name = "Ethereum";
                wallet.symbol = "ETH";
              }
              dataresponse;
              if (item.chain == "0x38") {
                wallet.name = "Binance";
                wallet.symbol = "BSC";
              }
              if (item.chain == "0x89") {
                wallet.name = "Polygon";
                wallet.symbol = "MATIC";
              }
              wallet.chainAddress = item.address;
              wallet.nativeValue = dataresponse.TotalNative;
              wallet.totalTokenValue = dataresponse.totalTokenBalance;
              wallet.tokenlist = dataresponse.tokenList;
              console.log("wallet", index, ":", wallet);
              dispatch(addWallet(wallet));
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <main className="flex justify-center h-full flex-col overflow-auto">
      <div className="w-full p-10 flex flex-row  h-auto">
        <h1 className="text-2xl font-normal">Portfolio Overview</h1>
        <div className="  flex justify-end self-end w-4/6 h-8 space-x-10">
          <div
            className="z-30"
            onMouseEnter={() => setIsNetwork(true)}
            onMouseLeave={() => setIsNetwork(false)}
          >
            <button className={`w-32  group space-y-2 `}>
              <div className="flex justify-between ">
                <p className="pl-2 text-gray-500 ">All Networks</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <ul
                className={` pt-2 flex-col  rounded  ${
                  isnetwork ? "block" : "hidden"
                } shadow bg-white flex`}
              >
                <li
                  className="hover:bg-gray-200 w-full p-1 flex flex-row space-x-2 pl-2 items-center "
                  onClick={() => {
                    filterwalletchains("all", !isalltrue),
                      setIsallTrue(!isalltrue);
                  }}
                >
                  <input
                    id="email-checkbox"
                    type="checkbox"
                    checked={isalltrue}
                    className="w-4 h-4  accent-[#6B8068]"
                  />
                  <p>All Chains</p>
                </li>
                {cards.map((card) => {
                  return card.monintorState ? (
                    <li
                      className=" hover:bg-gray-200 w-full flex-row flex  space-x-2 items-center p-1 pl-2"
                      onClick={() => {
                        filterwalletchains(card.name, !card.ischainSelected);
                      }}
                    >
                      <input
                        id="email-checkbox"
                        type="checkbox"
                        checked={card.ischainSelected}
                        className="w-4 h-4  accent-[#6B8068]"
                      />
                      <p>{card.name}</p>
                    </li>
                  ) : (
                    <li
                      className="text-gray-300 hover:bg-gray-400 w-full p-1"
                      onClick={() => changeState(1)}
                    >
                      {card.name}
                    </li>
                  );
                })}
              </ul>
            </button>
          </div>
          <div
            className="z-30"
            onMouseEnter={() => setIsChain(true)}
            onMouseLeave={() => setIsChain(false)}
          >
            <button className="w-30 z-30 group">
              <div className="flex justify-between">
                <p className=" text-gray-500 ">All Wallets</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <ul
                className={` flex-col  rounded  ${
                  ischain ? "block" : "hidden"
                } shadow bg-white flex`}
              >
                {wallets &&
                  wallets.map((wallet, index) => {
                    console.log(wallet);
                    if (wallet.monitorState)
                      return (
                        <li
                          className="pt-2 hover:bg-gray-200 w-full p-1 flex flex-row space-x-2 items-center pl-2"
                          key={index}
                          onClick={() =>
                            filterwallet(
                              wallet.chainAddress,
                              wallet.name,
                              !wallet.tableState
                            )
                          }
                        >
                          <input
                            id="email-checkbox"
                            type="checkbox"
                            checked={wallet.tableState}
                            className="w-4 h-4  accent-[#6B8068]"
                          />
                          <p>
                            {wallet.symbol} {index + 1}
                          </p>
                        </li>
                      );
                  })}
              </ul>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 justify-center">
        <div className="grid self-center gap-x-6 grid-flow-col">
          <PriceCard heading="Liquid Value ($)" price="0" />
          <PriceCard
            heading="Liquid ATH ($ All-Time High Value)"
            price="0.00"
          />
          <PriceCard heading="Liquid ATL ($ All-Time Low Value)" price="0.00" />
        </div>
        <div className="grid self-center gap-x-6 grid-flow-col">
          <PriceCard heading="Locked Value ($)" price="0.00" />
          <PriceCard heading="Locked ATH ($)" price="0.00" />
          <PriceCard heading="Locked ATL ($)" price="0.00" />
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-3">
        <div className="bg-white">
          <UpcomingTokenTable />
        </div>
        <div className="bg-white">
          <PreviousTokenTable />
        </div>
      </div>
      <div className=" ml-20 mr-20 grid overflow-y-scroll h-96 mt-2 ">
        <GlobalTokenTable />
      </div>
      <div className="overflow-auto mt-10 self-center w-4/6">
        <footer className=" bg-white w-5/6 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white">
          <span className="ml-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {wallets.length} Network(s) Configured
          </span>
          <ul className=" flex flex-wrap items-center mt-3 text-sm text-[#6B8068]-500 dark:text-[#6B8068] sm:mt-0">
            <li>
              <button
                className="bg-[#6b8068] w-48 h-12 px-3 py-4 hover:bg-emerald-700 text-white rounded"
                onClick={() => changeState(4)}
              >
                Add Investment
              </button>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
};
export default Portfolio;
