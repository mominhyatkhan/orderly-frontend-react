import { ChangeEvent, useState } from "react";
import ConstructSchedule from "./constructSchedule";
type Props = {};
const DistributionType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScheduleAdded, setIsScheduleAdded] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [ShowConstruct, setShowConstruct] = useState(false);
  const [fields, setFields] = useState([
    [
      { name: "TGE", value: 0 },
      { name: "Lockup", value: 0 },
      { name: "Percentage", value: 0 },
      { name: "Period", value: "" },
    ],
  ]);
  const handleAddField = () => {
    setFields([
      ...fields,
      [
        { name: "TGE", value: 0 },
        { name: "Lockup", value: 0 },
        { name: "Percentage", value: 0 },
        { name: "Period", value: "" },
      ],
    ]);
  };
  const handleChange = (
    index1: number,
    index2: number,
    field: string | number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = [...fields];
    //@ts-ignore
    newFields[index1][index2][field] = e.target.value;
    console.log(fields, e.target.value);
    setFields(newFields);
  };
  const addSchedule = () => {
    console.log(fields);
  };
  const handledistribution = (value: string) => {
    if (value == "Dynamic distribution") {
      setShowSchedule(true);
      setShowConstruct(false);
    } else {
      setShowSchedule(false);
      console.log(value);
    }
  };
  return (
    <div className="flex flex-col bg-white rounded-lg dark:bg-white space-y-2.5">
      <div className="flex flex-row w-full">
        <label
          htmlFor="investmentLink"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
         Vesting Period
        </label>
        <div className="flex flex-row items-center w-3/4 justify-end space-x-1">
          <h1 className="text-gray-300">Off</h1>
          <label className="relative inline-flex content-center items-center cursor-pointer">
            <input
              type="checkbox"
              // onChange={() =>
              //   handleAllnotification(
              //     item.chainId,
              //     email,
              //     !item.isnotification
              //   )
              // }
              className="sr-only peer "
            />
            <div className="w-7 h-4 bg-gray-100 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-[#6B8068] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#6B8068] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-200 peer-checked:bg-gray-200"></div>
          </label>
          <h1 className="text-gray-300">On</h1>
        </div>
      </div>
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
        {isScheduleAdded &&
          fields.map((fieldArray, index) => {
            return (
              <div key={index} className="ml-5 flex flex-row">
                {fieldArray.map((field) => {
                  return (
                    <div className="flex flex-col w-1/4  m-2">
                      <h1 className="text-xs text-gray-500">{field.name}</h1>
                      <h1>{field.value}</h1>
                    </div>
                  );
                })}
                <a className="self-center h-full text-4xl font-thin mr-2">X</a>
              </div>
            );
          })}
      </div>

      {ShowConstruct ? (
        <div>
          <a
            className="flex justify-end text-4xl font-thin mr-2 cursor-pointer"
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
      )}
      {showSchedule && (
        <div className="flex flex-col space-x-4 text-[#6B8068] font-medium">
          <div className="">
            {fields.map((fieldArray, index1) => (
              <div key={index1} className="grid grid-cols-2 w-full">
                {fieldArray.map((field: any, index2) => (
                  <div key={index2} className="w-1/2 p-2">
                    <label className="text-sm font-medium">{field.name}</label>
                    <input
                      className="border border-gray-400 p-2 w-56"
                      type={
                        field.name === "Percentage" || field.name === "TGE"
                          ? "number"
                          : "text"
                      }
                      placeholder={`Enter ${field.name}`}
                      value={field.value}
                      onChange={(e) => handleChange(index1, index2, "value", e)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="space-x-4 cursor-pointer">
            <a onClick={handleAddField}>+ Add Lockup</a>
            <a
              onClick={() => {
                setIsScheduleAdded(true), addSchedule;
              }}
            >
              + Add Schedule
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default DistributionType;
