import { Dispatch, SetStateAction } from "react"

type Props={
    setMonitor: Dispatch<SetStateAction<boolean>>;
    isMonitor:boolean;
}
const MonitoringWallet:React.FC<Props> = ({setMonitor,isMonitor})=>{
    return <div className="flex h-full flex-col ml-40 mr-40 mt-28">
          <h1 className=" w-full text-3xl mb-8">Monitoring</h1>
          <div className="mt-4 ml-14 flex max-w-xs ">
                <button
                  onClick={() => setMonitor(!isMonitor)}
                  className="self-center bg-[#6b8068] w-36 h-10 hover:bg-emerald-700 text-white rounded"
                >
                  Add Monitoring
                </button>
              </div>
          <div className="flex bg-white h-full content-center justify-center items-center">
          </div>
        </div>
};
export default MonitoringWallet