import { Dispatch, SetStateAction } from "react"

type Props={
    setMonitor: Dispatch<SetStateAction<boolean>>;
    isMonitor:boolean;
}
const NoWalletAdded:React.FC<Props> = ({setMonitor,isMonitor})=>{
    return <div className="flex h-full flex-col ml-40 mr-40 mt-28">
          <h1 className=" w-full text-3xl mb-8">Monitoring</h1>
          <div className="flex bg-white h-full content-center justify-center items-center">
            <div className="mt-40 mb-80 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 ml-28 mb-2 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <h1 className="max-w-xs text-gray-400">
                You have not setuped monitoring yet
              </h1>
              <h1 className="max-w-xs text-gray-300">
                Start monitoring network, token or full portfolio. Note we
                anonymize all data.
              </h1>
              <div className="mt-4 ml-14 flex max-w-xs ">
                <button
                  onClick={() => setMonitor(!isMonitor)}
                  className="self-center bg-[#6b8068] w-36 h-10 hover:bg-emerald-700 text-white rounded"
                >
                  Add Monitoring
                </button>
              </div>
            </div>
          </div>
        </div>
};
export default NoWalletAdded