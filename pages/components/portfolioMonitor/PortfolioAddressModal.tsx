import { EvmChain, EvmNative } from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";
import * as React from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {  setEtherState,} from "../../slices/tokenslice";
import { RootState } from "../../store";
import TokenList from "./tokenList";

interface listItems {
  name: string;
  symbol: string;
  image: string;
  address: string[];
}
type Result = {
  token_address: string;
  name: string;
  symbol: string;
  logo?: string | undefined;
  thumbnail?: string | undefined;
  decimals: number;
  balance: string;
};
type Props = {
  isOpen: boolean;
  onClose: () => void;
  Name: string;
  Symbol: string;
  Img: string;
  Address: string[];
};

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  Name,
  Symbol,
  Img,
  Address,
}) => {
  const [tokenModel, setTokenModal] = React.useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [address, setAdress] = React.useState<string>("");
  const dispatch = useDispatch();
  const [nativeBalance, setNativeBalance] = React.useState<number>(0);
  const [result, setResult] = React.useState<Result>();
  const chainTokens = useSelector(
    (state: RootState) => state.tokens
  );
  const handleSelect = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedIndex(index);
    console.log(Address);
  };
  if (!isOpen) {
    return null;
  }
  const saveAddress = async () => {
    
    chainTokens.every(async(listItem,index)=>{
      listItem.state && await Moralis.start({
        apiKey:
          "yv2QT1y7W5ePG3KBqRrxTBgm8uUTowv8RRIctpmBdycaGmGi1bQxmD39W9TMJOzH",
        // ...and any other configuration
      });
      let chain
      console.log(listItem.name," inex ",index)
      if(listItem.name=='ETHERUM'){
       chain = EvmChain.ETHEREUM;
      }
      else if(listItem.name=='BSC'){
       chain=EvmChain.BSC;
      }
      const response = await Moralis.EvmApi.balance.getNativeBalance({
        address,
        chain,
      });
  
      const tokenResponse = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      });
  
      let balance = Number(response.result.balance) / 10 ** 18;
      let total = 0;
      tokenResponse.toJSON().map((item) => {
        total = total + Number(item.balance);
      });
      
      setNativeBalance(balance);
      dispatch(setEtherState(balance));
      /* dispatch(setTotal(total));
      dispatch(setAddress(address)); */
    })
    
  };
  return (
    <div className="bg-white h-auto w-96 ">
      <div className=" bg-white rounded-lg shadow dark:bg-white h-full">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-2.5 text-[#6B8068] bg-transparent hover:bg-white-200 hover:text-black-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
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
        <div className=" px-6 py-6 lg:px-8">
          <div className="flex space-x-2">
            <img src={Img}></img>
            <h3 className="mb-4 flex flex-col text-2xl font-medium text-black dark:text-black">
              {Name}
              <span className="text-sm">{Symbol}</span>
            </h3>
          </div>
          <form
            className="space-y-6 h-full"
            onSubmit={(e) => {
              e.preventDefault(), saveAddress();
            }}
          >
            <div className="relative">
              <input
                type="text"
                onChange={(e) => (
                  setAdress(e.currentTarget.value), setTokenModal(true)
                )}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-gray-100 dark:bg-gray-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              ></label>
              {tokenModel && <TokenList />}
            </div>
            <a className="mt-6 cursor-pointer text-[#6B8068]">
              + Add Additional Address
            </a>
            <div>
              <button type="submit">SAVE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;
