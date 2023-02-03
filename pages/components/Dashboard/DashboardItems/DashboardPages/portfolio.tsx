import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getwallets, GetWallletData } from "../../../../api/hello";
import { setDashboardState } from "../../../../slices/dashboardSlice";
import {
  addWallet,
  addWalletDB,
  filterWallets,
  filterWalletsChains,
} from "../../../../slices/tokenslice";
import { RootState } from "../../../../store";
import GlobalTokenTable from "../SubComponents/globalTokenTable";
import PreviousTokenTable from "../SubComponents/previousTokenTable";
import PriceCard from "../SubComponents/priceCards";
import UpcomingTokenTable from "../SubComponents/upcomingTokenTable";

const Portfolio = () => {
  const wallets = useSelector((state: RootState) => state.tokens.wallet);
  const email = useSelector((state: RootState) => state.isLogin.user.email);
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
            response.data.map(async (item: any, index: number) => {
              let wallet: any = {
                state: true,
                name: "",
                symbol: "",
                tableState: true,
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
      <div className="w-full p-10 flex flex-row">
        <h1 className="text-2xl font-normal">Portfolio Overview</h1>
        <div className="flex justify-end self-end w-4/6 h-8 space-x-10">
          <select className="p-1">
            <option onClick={() => filterwalletchains("all")}>
              All Chains
            </option>
            <option onClick={() => filterwalletchains("Ethereum")}>
              Ethereum
            </option>
            <option onClick={() => filterwalletchains("Binance")}>
              Binance
            </option>
          </select>
          <select className="p-1">
            <option onClick={() => filterwallet("", "all")}>All wallet</option>
            {wallets &&
              wallets.map((wallet, index) => {
                console.log(wallet);
                return (
                  <option
                    className=""
                    key={index}
                    onClick={() =>
                      filterwallet(wallet.chainAddress, wallet.name)
                    }
                  >
                    <span>{wallet.symbol}</span> <span>{index + 1}</span>
                  </option>
                );
              })}
          </select>
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
