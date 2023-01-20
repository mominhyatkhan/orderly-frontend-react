import InvesterDetail from "../SubComponents/investmentTabComponents/investmentDetailForm";
import InvestmentDetailModel from "../SubComponents/investmentTabComponents/investmentDetailModel";

const InvestmentsManager = () => {
  return (
    <div className="mt-20 ml-32 w-5/6 h-auto">
      <div className="flex">
        <div className="flex  w-full">
        <h1 className="text-3xl">Investments Manager</h1>
        </div>
        <div className="flex w-5/6 justify-end">
         <div className="flex justify-center">
          <button className="flex self-center text-sm space-x-1">
            <span className=" text-gray-400">sort:</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
          </button>

          <button
            type="button"
            className="inline-flex justify-center font-medium  px-4 py-2 text-sm  text-gray-700"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Date
            <svg
              className=" h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            type="button"
            className="bg-[#6b8068] w-48 h-8 hover:bg-emerald-700 text-white rounded"
          >
            Add New Investment
          </button>
        </div>
        </div>
      </div>
      <div className="mt-10 w-full">
        <InvesterDetail/>
      </div>
      <InvestmentDetailModel/>
    </div>
  );
};
export default InvestmentsManager;
