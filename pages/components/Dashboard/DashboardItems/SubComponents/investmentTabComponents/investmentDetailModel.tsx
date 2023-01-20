import Dropdown from "./SubComponents/vesting";
import GenralComponent from "./SubComponents/Genral";
import InvestmentModalInput from "./SubComponents/Genral";
import VestingComponent from "./SubComponents/vesting";
import DistributionType from "./SubComponents/distributionType";
import InvestmentType from "./SubComponents/investmentType";
import About from "./SubComponents/about";

const InvestmentDetailModel = () => {
  return (
    <div className="bg-white w-3/6 rounded-lg shadow dark:bg-white ">
      <div className="h-auto space-y-8 m-10">
        <div className=" flex bg-white rounded-lg shadow h-full">
          <h1 className=" text-2xl self-center">Add New Investment</h1>
          <button
            type="button"
            className=" top-3 right-2.5 text-[#6B8068] bg-transparent hover:bg-white-200 hover:text-black-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
       <GenralComponent/>
       <VestingComponent/>
       <DistributionType/>
        <InvestmentType/>
        <About/>
      </div>
      <div className="flex mt-20 justify-end self-end w-full">
     <div className="flex  space-x-6 mb-7 mr-8">
      <button
            type="button"
            className="bg-[#687780] w-40 h-10  hover:bg-emerald-700 text-white rounded"
          >
             Cancel
          </button>
          <button
            type="button"
            className="bg-[#6b8068] w-40 h-10  hover:bg-emerald-700 text-white rounded"
          >
             Add
          </button>
          </div>
      </div>
    </div>
  );
};
export default InvestmentDetailModel;
