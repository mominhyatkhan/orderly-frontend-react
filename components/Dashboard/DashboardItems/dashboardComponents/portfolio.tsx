import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../pages/store";

import GlobalTokenTable from "../SubComponents/globalTokenTable";
import PreviousTokenTable from "../SubComponents/previousTokenTable";
import PriceCard from "../SubComponents/priceCards";
import UpcomingTokenTable from "../SubComponents/upcomingTokenTable";

const Portfolio = () => {
  const data = useSelector((state: RootState) => state.tokens);
  const dispatch = useDispatch();
  return (
    <main className="flex justify-center flex-col">
      <div className="w-full p-10 flex flex-row">
        <h1 className="text-2xl font-normal">Portfolio Overview</h1>
        {/* <div className="flex justify-end self-end w-4/6" ><select>
          <option onClick={()=>{dispatch(setBscTableState(true)),dispatch(setEtherTableState(true))}} >All wallet</option>
          <option onClick={()=>{dispatch(setBscTableState(false)),dispatch(setEtherTableState(true))}} >Ethereum</option>
          <option onClick={()=>{dispatch(setBscTableState(true)),dispatch(setEtherTableState(false))}} >BSC</option>
  </select></div> */}
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
      <div className="bg-white ml-20 mr-20 grid overflow-y-scroll mt-2 ">
        <GlobalTokenTable />
      </div>
    </main>
  );
};
export default Portfolio;
