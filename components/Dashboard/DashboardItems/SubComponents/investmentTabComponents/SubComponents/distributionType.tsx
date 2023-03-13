import { ChangeEvent, useState } from "react";
import ConstructSchedule from "./constructSchedule";
type Props = {};
const DistributionType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScheduleAdded, setIsScheduleAdded] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [ShowConstruct, setShowConstruct] = useState(false);
  const [isManual, setManual] = useState<boolean>(true);
  const [isvesting, setVesting] = useState<boolean>(true);
  const handledistribution = (value: string) => {
    if (value == "Dynamic distribution") {
      setShowSchedule(true);
      setShowConstruct(false);
    } else {
      setShowSchedule(false);
      setShowConstruct(true);
      console.log(value);
    }
  };
  console.log(isManual);
  return (
    <div className="flex flex-col bg-white rounded-lg dark:bg-white space-y-2.5">
      <div className="flex flex-row w-full justify-between">
        <label
          htmlFor="investmentLink"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Vesting Period
        </label>
        <div className="flex flex-row items-center space-x-1">
          <h1 className="text-gray-300">Off</h1>
          <label className="relative inline-flex content-center items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isvesting}
              className="sr-only peer "
              onChange={()=>setVesting(!isvesting)}
            />
            <div className="w-7 h-4 bg-gray-100 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-[#6B8068] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#6B8068] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-200 peer-checked:bg-gray-200"></div>
          </label>
          <h1 className="text-gray-300">On</h1>
        </div>
      </div>
      {isvesting&&<div>
        <h1>Distribution Type</h1>
        <div className="relative">
          <select
            className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            onChange={(e) => handledistribution(e.target.value)}
          >
            <option>select distribution</option>
            <option>Dynamic distribution</option>
            <option>Monthly</option>
            <option>Linear</option>
            <option>Quaterly</option>
            <option>Bi-Anual</option>
            <option>Anual Distribution</option>
          </select>
        </div>
        <div className="flex flex-col bg-gray-100">
          {isScheduleAdded && <div>fields</div>}
        </div>

        {showSchedule && (
          <div className="flex flex-col space-y-4">
            <div>
              <h1>Withdrawal</h1>
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex items-center">
                <input
                  checked={!isManual}
                  type="radio"
                  id="automatic"
                  name="mode"
                  value="automatic"
                  onChange={(e) => {
                    setManual(!isManual), console.log("auto", isManual);
                  }}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 accent-[#6b8068]"
                />
                <label
                  htmlFor="automatic"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Automatic to investment wallet
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={isManual}
                  type="radio"
                  id="manual"
                  name="mode"
                  value="manual"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 accent-[#6b8068]"
                  onChange={(e) => {
                    setManual(!isManual), console.log("manual", isManual);
                  }}
                />
                <label
                  htmlFor="manual"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Manual withdrawal
                </label>
              </div>
            </div>
            {isManual && (
              <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Portal
                </label>
                <input className="bg-gray-100 w-full h-6  rounded-md" />
              </div>
            )}
          </div>
        )}
        {!isManual ? (
          ShowConstruct ? (
            <div>
              <a
                className="flex justify-end text-xl font-thin mr-2 cursor-pointer"
                onClick={() => {
                  setShowConstruct(false), setShowSchedule(false);
                }}
              >
                X
              </a>
              <ConstructSchedule />
            </div>
          ) : (
            <button
              type="button"
              className="bg-[#6b8068] w-full h-10  hover:bg-emerald-700 text-white rounded"
              onClick={() => {
                setShowConstruct(true), setShowSchedule(false);
              }}
            >
              Construct Schedule
            </button>
          )
        ) : (
          ""
        )}
        {!isManual
          ? showSchedule && (
              <div className="flex flex-col font-medium border p-4">
                <div className="space-y-2 mb-2">
                  <div>
                    <h1>Heading</h1>
                  </div>
                  <div className="flex w-full flex-row space-x-2">
                    <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        TGE
                      </label>
                      <input className="bg-gray-100 w-full h-6  rounded-md" />
                    </div>
                    <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Period
                      </label>
                      <input className="bg-gray-100 w-full h-6  rounded-md" />
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Lockup
                      </label>
                      <input className="bg-gray-100 w-full h-6  rounded-md" />
                    </div>
                    <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Percentage
                      </label>
                      <input className="bg-gray-100 w-full h-6  rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 cursor-pointer text-[#6B8068]">
                  <a>+ Add Lockup</a>
                  <a
                    className="cursor-pointer text-[#6B8068]"
                    onClick={() => {
                      setIsScheduleAdded(true);
                    }}
                  >
                    + Add Schedule
                  </a>
                </div>
              </div>
            )
          : ""}
      </div>}
    </div>
  );
};
export default DistributionType;
