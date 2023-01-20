import PriceCard from "../SubComponents/priceCards";

const Analyzer = () => {
  return (
    <div className="m-20 w-5/6">
      <div>
        <h1 className="text-3xl">Analyzer</h1>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row">
          <div className="w-4/6 bg-white">chart</div>
          <div className="flex flex-col ml-5 space-y-6 w-2/6">
            <a
              href="#"
              className="block w-full h-24 p-6 bg-white hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-100"
            >
              <h5 className="mb-2 text-sm font-normal tracking-tight text-gray-900 dark:text-[#687780]">
                Invested Amount
              </h5>
              <p className="font-normal text-[#08101F]">$0.00</p>
            </a>
            <a
              href="#"
              className="block w-full h-24 p-6 bg-white hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-100"
            >
              <h5 className="mb-2 text-sm font-normal tracking-tight text-gray-900 dark:text-[#687780]">
                Earned Amount
              </h5>
              <p className="font-normal text-[#08101F]">$0.00</p>
            </a>
          </div>
        </div>
        <div>
          <div className="mt-10 bg-white">
            <div className="flex">
              <table className="border-separate w-full">
                <thead>
                  <tr>
                    <th className="font-light  text-gray-500">Date</th>
                    <th className="font-light  text-gray-500">
                      Invested Amount
                    </th>
                    <th className="font-light  text-gray-500">Profit/Loss</th>
                    <th className="font-light  text-gray-500">
                      Amount /<br /> % of Received
                    </th>
                    <th className="font-light  text-gray-500">
                      Amount /<br /> % of Locked
                    </th>
                    <th className="font-light  text-gray-500">Distribution</th>
                    <th className="font-light  text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analyzer;
