import { Dispatch, SetStateAction, useState } from "react";
type Props={
  setInvestmentType:Dispatch<SetStateAction<string>>;
  setInvestmentAddress:Dispatch<SetStateAction<string[] | undefined>>
}
const InvestmentType:React.FC<Props>  = ({setInvestmentType,setInvestmentAddress}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white rounded-lg dark:bg-white space-y-5">
      <h1>Investment Type</h1>
      <div className="flex flex-col w-full bg-gray-100 h-14 ">
        <h1 className="px-4 text-sm font-medium text-gray-700">
          Investment Type
        </h1>
        <select
          className=" bg-gray-100  px-4 py-2 pr-8 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          onChange={(e)=>setInvestmentType(e.currentTarget.value)}
        >
          <option>Individual</option>
          <option>Guys Group</option>
          <option>Down Town</option>
          <option>Simps</option>
        </select>
      </div>
      <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
        <label className="block text-sm font-medium leading-5 text-gray-700">
          Address
        </label>
        <input
          placeholder="3454345Qw53Vcx3999CX5344EW534 Myself"
          className="bg-gray-100 w-full h-6  rounded-md"
        />
      </div>
    </div>
  );
};
export default InvestmentType;
