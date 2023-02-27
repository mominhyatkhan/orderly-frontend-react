import { useEffect } from "react";
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

const Portfolio = () => {
  const wallets = useSelector((state: RootState) => state.tokens.wallet);
  const email = useSelector((state: RootState) => state.isLogin.user.email);
  const cards = useSelector((state: RootState) => state.coinCards);
  const dispatch = useDispatch();

  const changeState = (index: number) => {
    dispatch(setDashboardState(index));
  };
  function filterwalletchains(name: any) {
    dispatch(filterWalletsChains(name));
  }
  function filterwallet(address: string, name: string) {
    console.log(address);
    dispatch(filterWallets({ address, name }));
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
          <button className=" w-36 z-30 group">
            <p className=" text-gray-500 ">All Networks</p>
            <ul className="pt-2 flex rounded hidden group-focus:block flex-col justify-center shadow bg-white flex">
              <li
                className="hover:bg-gray-200 w-full p-1"
                onClick={() => filterwalletchains("all")}
              >
                All Chains
              </li>
              {cards.map((card) => {
                return card.monintorState ? (
                  <li
                    className=" hover:bg-gray-200 w-full p-1"
                    onClick={() => {
                      filterwalletchains(card.name), changeState(0);
                    }}
                  >
                    {card.name}
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

          <button className="w-36 z-30 group">
            <p className=" text-gray-500 ">All wallet</p>
            <ul className="flex rounded hidden group-focus:block flex-col justify-center shadow bg-white flex ">
              {wallets &&
                wallets.map((wallet, index) => {
                  console.log(wallet);
                  if (wallet.monitorState)
                    return (
                      <li
                        className=" hover:bg-gray-200 w-full p-1"
                        key={index}
                        onClick={() =>
                          filterwallet(wallet.chainAddress, wallet.name)
                        }
                      >
                        <span>{wallet.symbol}</span> <span>{index + 1}</span>
                      </li>
                    );
                })}
            </ul>
          </button>
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
