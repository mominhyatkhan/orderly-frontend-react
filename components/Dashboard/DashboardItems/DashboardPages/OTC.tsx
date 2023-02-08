const OTC = () => {
  return (
    <div className="m-20 w-5/6">
      <div className="flex">
        <div>
          <h1 className="text-3xl">OTC</h1>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="bg-[#6b8068] w-44 h-10 hover:bg-emerald-700 text-white rounded"
          >
            New Offers
          </button>
        </div>
      </div>
      <div className="flex w-full mt-8 ">
          <div className=" space-x-2.5">
            <button className="w-16 h-8 bg-gray-200 rounded focus:bg-white">
              All
            </button>
            <button className="w-16 h-8 bg-gray-200 rounded focus:bg-white">
              In
            </button>
            <button className="w-16 h-8 bg-gray-200 rounded focus:bg-white">
             Out
            </button>
          </div>
        </div>
        <div className="w-full mt-20 bg-white">
    <div className="flex  mr-20">
      <table className="border-separate w-4/6">
        <thead>
          <tr>
            <th className="font-light  text-gray-500">LABEL</th>
            <th className="font-light  text-gray-500">COIN</th>
            <th className="font-light  text-gray-500">ADDRESS</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
    </div>
  );
};
export default OTC;
