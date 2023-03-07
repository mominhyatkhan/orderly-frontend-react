import GenralComponent from "./SubComponents/Genral";
import VestingComponent from "./SubComponents/vesting";
import DistributionType from "./SubComponents/distributionType";
import InvestmentType from "./SubComponents/investmentType";
import About from "./SubComponents/about";
import { useState } from "react";
type props = {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const InvestmentDetailModel: React.FC<props> = ({ isOpen }) => {
  const [chain, setChain] = useState<string>("");
  const [amountInvested, setAmountInvested] = useState<number>(0);
  const [investmentTrasactionLink, setInvestmentTransactionLink] =
    useState<string>("");
  const [lockup, setLockup] = useState<number>(0);
  const [percentOfToken, setPercentOfToken] = useState<number>(0);
  const [vestingPeriod, setVestingPeriod] = useState<number>(0);
  const [investmentType, setInvestmentType] = useState<string>("");
  const [investmentAddress, setInvestmentAddress] = useState<string>("");
  const [saftFile, setSaftFile] = useState<File>();
  const [website, setWebsite] = useState<string>("");
  const showdata = () => {
    console.log(
      "chain",
      chain,
      "amountInvested:",
      amountInvested,
      "investmentTrasactionLink",
      investmentTrasactionLink,
      "lockup:",
      lockup,
      "percentOfToken",
      percentOfToken,
      "vestingPeriod",
      vestingPeriod,
      "investmentType:",
      investmentType,
      "investmentAddress",
      investmentAddress,
      "saftFile",
      saftFile,
      "website",
      website
    );
  };
  const canceled = () => {
    setChain("");
    setAmountInvested(0);
    setInvestmentTransactionLink("");
    setLockup(0);
    setPercentOfToken(0);
    setVestingPeriod(0);
  };
  return (
    <div className=" w-full h-max rounded-lg shadow dark:bg-white">
      <div className=" space-y-8 m-10">
        <div className=" flex bg-white rounded-lg shadow">
          <h1 className=" text-2xl self-center">Add New Investment</h1>
          <button
            type="button"
            onClick={() => isOpen(false)}
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
        <GenralComponent
          Chain={setChain}
          amountInvested={setAmountInvested}
          investmentTransactionLink={setInvestmentTransactionLink}
        />
        <VestingComponent
          lockup={setLockup}
          percentofToken={setPercentOfToken}
          tokenPercentValue={percentOfToken}
        />
        <DistributionType />
        <InvestmentType
          setInvestmentType={setInvestmentType}
          setInvestmentAddress={setInvestmentAddress}
        />
        <About />
      </div>
      <div className="flex mt-20 justify-end self-end w-full">
        <div className="flex  space-x-6 mb-7 mr-8">
          <button
            onClick={canceled}
            type="button"
            className="bg-[#687780] w-40 h-10  hover:bg-gray-600 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={showdata}
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
