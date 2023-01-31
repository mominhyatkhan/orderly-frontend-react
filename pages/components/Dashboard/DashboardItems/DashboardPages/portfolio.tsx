import { useDispatch, useSelector } from "react-redux";
import { setDashboardState } from "../../../../slices/dashboardSlice";
import { RootState } from "../../../../store";
import GlobalTokenTable from "../SubComponents/globalTokenTable";
import PreviousTokenTable from "../SubComponents/previousTokenTable";
import PriceCard from "../SubComponents/priceCards";
import UpcomingTokenTable from "../SubComponents/upcomingTokenTable";

const Portfolio = () => {
  const wallets = useSelector((state: RootState) => state.tokens.wallet);
  const dispatch = useDispatch();
  const changeState = (index: number) => {
    dispatch(setDashboardState(index));
  };
  return (
    <main className="flex justify-center h-full flex-col overflow-auto">
      <div className="w-full p-10 flex flex-row">
        <h1 className="text-2xl font-normal">Portfolio Overview</h1>
        <div className="flex justify-end self-end w-4/6 h-8 space-x-10">
          <select className="p-1">
            <option onClick={() => {}}>All Chains</option>
            <option>Ethereum</option>
            <option>Binance</option>
          </select>
          <select className="p-1">
            <option onClick={() => {}}>All wallet</option>
            {wallets &&
              wallets.map((wallet,index) => {
                return <option className=""><span>{wallet.symbol}</span> <span>{index+1}</span></option>;
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
      <div className="bg-white ml-20 mr-20 grid overflow-y-scroll  mt-2 ">
        <GlobalTokenTable />
      </div>
      <div className="overflow-auto mt-5">
        <footer className="m-20 bg-white w-5/6 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white">
          <span className="ml-16 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            0 Network(s) Configured
          </span>
          <ul className="mr-48 flex flex-wrap items-center mt-3 text-sm text-[#6B8068]-500 dark:text-[#6B8068] sm:mt-0">
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
