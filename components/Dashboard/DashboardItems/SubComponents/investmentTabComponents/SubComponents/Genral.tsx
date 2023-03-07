import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../pages/store";
type props = {
  Chain: React.Dispatch<React.SetStateAction<string>>;
  amountInvested: React.Dispatch<React.SetStateAction<number>>;
  investmentTransactionLink: React.Dispatch<React.SetStateAction<string>>;
  tokenAddress: React.Dispatch<React.SetStateAction<string>>;
};
const GenralComponent: React.FC<props> = ({
  tokenAddress,
  Chain,
  amountInvested,
  investmentTransactionLink,
}) => {
  const wallets = useSelector((state: RootState) => state.tokens.wallet);
  const [isOpen, setIsOpen] = useState(false);
  const [chainName, setChainName] = useState("");
  const setchain = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    Chain(e.currentTarget.value);
    setChainName(e.currentTarget.value);
  };
  return (
    <>
      <h1>General</h1>
      <div className="mb-4 bg-white">
        <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Name
          </label>
          <input className="bg-gray-100 w-full h-6  rounded-md" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between space-x-3">
        <div className="flex flex-row bg-white rounded-lg dark:bg-white space-y-2.5  w-2/4">
          <div className="relative w-full">
            <select
              className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg"
              onClick={(e) => {
                setIsOpen(!isOpen), setchain(e);
              }}
            >
              <option>Select an chain</option>
              <option>Ethereum</option>
              <option>Binance</option>
              <option>Polygon</option>
            </select>
          </div>
        </div>

        <div className="relative w-2/4">
          <select
            className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg"
            onClick={(e) => {
              setIsOpen(!isOpen), tokenAddress(e.currentTarget.value);
            }}
          >
            <option>Select an Token</option>
            {wallets &&
              wallets.map((wallet) => {
                if (wallet.name == chainName)
                  return <option>{wallet.chainAddress}</option>;
              })}
          </select>
        </div>
      </div>
      <div className="mb-4 bg-white">
        <div className="flex flex-col h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 rounded-lg">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium text-gray-700"
          >
            Amount Invested
          </label>
          <input
            type="number"
            placeholder="$0.00"
            id="investmentLink"
            onChange={(e) => {
              amountInvested(parseInt(e.currentTarget.value));
            }}
            className="bg-gray-100 w-full h-7 rounded-md "
          />
        </div>
      </div>
      <div className="mb-4 bg-white">
        <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
          <label
            htmlFor="investmentLink"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Investment transaction link
          </label>
          <input
            placeholder="9188jaklz0918a-jz08180z5"
            id="investmentLink"
            onChange={(e) => {
              investmentTransactionLink(e.currentTarget.value);
            }}
            className="bg-gray-100 w-full h-6  rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default GenralComponent;
