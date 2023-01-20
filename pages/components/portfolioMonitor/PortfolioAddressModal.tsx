import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWallet } from "../../slices/tokenslice";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  Name: string;
  Symbol: string;
  Img: string;
  Address: string[];
};
type Wallet = {
  state: boolean;
  name: string;
  symbol: string;
  tableState: boolean;
  address: string;
  nativeValue: number;
  totalTokenValue: number;
  tokenlist: [];
};
const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  Name,
  Symbol,
  Img,
  Address,
}) => {
  const [wallet, setWallet] = React.useState<Wallet>();
  const [address, setAdress] = React.useState<string>("");
  const dispatch = useDispatch();
  const saveAddress = () => {
    
    
    setWallet({
      state: true,
      name: Name,
      symbol: Symbol,
      tableState: true,
      address: address,
      nativeValue: 0,
      totalTokenValue: 0,
      tokenlist: [],
    });
    dispatch(addWallet(wallet));
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
                onChange={(e) => setAdress(e.currentTarget.value)}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-gray-100 dark:bg-gray-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              ></label>
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
