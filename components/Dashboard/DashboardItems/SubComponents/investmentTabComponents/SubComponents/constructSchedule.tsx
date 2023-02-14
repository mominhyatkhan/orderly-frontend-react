import { ChangeEvent, useState } from "react";

const ConstructSchedule = () => {
  const [fields, setFields] = useState([
    [
      { name: "TGE", value: 0 },
      { name: "Lockup", value: 0 },
      { name: "Lockup Duration", value: "" },
    ],
  ]);
  const handleAddField = () => {
    setFields([
      ...fields,
      [
        { name: "TGE", value: 0 },
        { name: "Lockup", value: 0 },
        { name: "Lockup Duration", value: "" },
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
  return (
    <div className="">
      <div className="flex flex-col space-x-4 text-[#6B8068] font-medium">
        <div className="">
          {fields.map((fieldArray, index1) => (
            <div key={index1} className="grid grid-cols-2 w-full">
              {fieldArray.map((field: any, index2) => (
                <div key={index2} className="w-2/3 p-2">
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
        <div className="space-x-6 cursor-pointer mt-10 mb-3">
          <a onClick={handleAddField}>+ Add Lockup</a>
          <a onClick={handleAddField}>+ Add Distribution</a>
          <a onClick={handleAddField}>+ Add TGE</a>
        </div>
      </div>
    </div>
  );
};
export default ConstructSchedule;
