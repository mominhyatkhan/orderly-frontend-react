
import GlobalTokenTable from "../smallComponents/globalTokenTable";
import PriceCard from "../smallComponents/priceCards";
import Table from "../smallComponents/upcomingTokenTable";

const Portfolio = () => {
  return (
    <main className="flex justify-center flex-col">
      <div className="p-10 ">
        <h1 className="text-2xl font-normal">Portfolio Overview</h1>
      </div>
      <div className="flex flex-col gap-y-6 justify-center">
        <div className="grid self-center gap-x-6 grid-flow-col">
          <PriceCard heading='Liquid Value ($)' price='0' />
          <PriceCard heading='Liquid ATH ($ All-Time High Value)' price='0.00'/>
          <PriceCard heading='Liquid ATL ($ All-Time Low Value)' price='0.00'/>
        </div>
        <div className="grid self-center gap-x-6 grid-flow-col">
          <PriceCard heading='Locked Value ($)' price='0.00'/>
          <PriceCard heading='Locked ATH ($)' price='0.00'/>
          <PriceCard heading='Locked ATL ($)' price='0.00'/>
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-3">
        <div className="bg-white">
          <Table />
        </div>
        <div className="bg-white">
          <Table />
        </div>
      </div>
      <div className="bg-white ml-20 mr-20 grid overflow-y-scroll mt-2 ">
        <GlobalTokenTable />
      </div>
    </main>
  );
};
export default Portfolio;
