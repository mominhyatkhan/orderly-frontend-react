import { Dispatch, SetStateAction, useState } from "react";
type Props = {
  setIsScheduleAdded: Dispatch<SetStateAction<boolean>>;
  tge: number;
  setLockups: Dispatch<SetStateAction<number[]>>;
  lockups: number[];
  setPercentage: Dispatch<SetStateAction<number[]>>;
  percentages: number[];
};
const DynamicDistribution: React.FC<Props> = ({
  setIsScheduleAdded,
  tge,
  setLockups,
  setPercentage,
  lockups,
  percentages,
}) => {
  const handleLockupInputChange = (index: number, value: number) => {
    const newInputs = [...lockups];
    newInputs[index] = value;
    setLockups(newInputs);
  };
  const handleNewLockup = () => {
    setLockups([...lockups, 0]);
    setPercentage([...percentages, 0]);
  };
  const handlePercentageInputChange = (index: number, value: number) => {
    const newInputs = [...percentages];
    newInputs[index] = value;
    setPercentage(newInputs);
  };
  return (
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
            <label className="bg-gray-100 w-full h-6  rounded-md">{tge}</label>
          </div>
          <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Period
            </label>
            <input className="bg-gray-100 w-full h-6  rounded-md" />
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col space-y-2">
            {lockups.map((lockup, index) => {
              return (
                <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Lockup
                  </label>

                  <input
                    type="number"
                    key={index}
                    value={lockup}
                    onChange={(e) =>
                      handleLockupInputChange(index, parseInt(e.target.value))
                    }
                    className="bg-gray-100 w-full h-6  rounded-md"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col space-y-2">
            {percentages.map((percentage, index) => {
              return (
                <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Percentage
                  </label>
                  <input
                    type="number"
                    key={index}
                    value={percentage}
                    onChange={(e) =>
                      handlePercentageInputChange(
                        index,
                        parseInt(e.target.value)
                      )
                    }
                    className="bg-gray-100 w-full h-6  rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex space-x-2 cursor-pointer text-[#6B8068]">
        <a onClick={handleNewLockup}>+ Add Lockup</a>
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
  );
};
export default DynamicDistribution;
