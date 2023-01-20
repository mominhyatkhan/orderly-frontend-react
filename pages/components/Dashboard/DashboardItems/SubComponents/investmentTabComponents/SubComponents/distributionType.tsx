import { useState } from "react";

const DistributionType=()=>
{
    const [isOpen, setIsOpen] = useState(false);
 return (

    <div className="flex flex-col bg-white rounded-lg shadow dark:bg-white space-y-2.5">
          <h1>Distribution Type</h1>
       
        <div className="relative">
          <select
            className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <option>Daily</option>
            <option>Monthly</option>
            <option>Quaterly</option>
            <option>Annually</option>
          </select>
        </div>
          <button
            type="button"
            className="bg-[#6b8068] w-full h-10  hover:bg-emerald-700 text-white rounded"
          >
            Construct Schedule
          </button>
        </div>
 )
}
export default DistributionType