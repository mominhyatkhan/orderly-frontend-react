import { group } from "console";
import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../pages/store";
type Props = {
  individualaddress: string;
  setInvestmentType: Dispatch<SetStateAction<string>>;
  setInvestmentAddress: Dispatch<SetStateAction<string>>;
};
const InvestmentType: React.FC<Props> = ({
  individualaddress,
  setInvestmentType,
  setInvestmentAddress,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const groups = useSelector((state: RootState) => state.contact.groups);
  const [groupName, setGroupName] = useState<string>("");

  return (
    <div className="flex flex-col bg-white rounded-lg dark:bg-white space-y-5">
      <h1>Investment Type</h1>
      <div className="flex flex-col w-full bg-gray-100 h-14 rounded-lg">
        <h1 className="px-4 text-sm font-medium text-gray-700 mt-1">
          Investment Type
        </h1>
        <select
          className=" bg-gray-100 rounded-lg px-4 py-2 pr-8 "
          onClick={() => setIsOpen(!isOpen)}
          onChange={(e) => {
            setInvestmentType(e.currentTarget.value),
              setGroupName(e.currentTarget.value);
          }}
        >
          <option>Individual</option>
          {groups.map((group) => {
            console.log(group.members);
            return <option>{group.name}</option>;
          })}
        </select>
      </div>
      <div className=" bg-gray-100 appearance-none w-full bg-gray-100 hover:border-gray-500  rounded-lg">
        <label className="block text-sm px-4 py-2 pr-8 font-medium leading-5 text-gray-700 w-full">
          Address
        </label>
        {groupName === "" ||groupName==='Individual'? (
          <div className="bg-gray-200 h-15 flex flex-row bg-gray-100 w-full rounded-md px-4 py-2 space-x-2 mb-1 justify-between">
            <h1
              // onChange={(e)=>{setInvestmentAddress(e.target.value)}}
              placeholder="3454345Qw53Vcx3999CX5344EW534 Myself"
              className=""
    
            >
              {individualaddress}
            </h1>
            <h2 className="text-gray-400">Myself</h2>
          </div>
        ) : (
          groups.map((group) => {
            if (groupName === group.name) {
              return group.members.map((member) => (
                <div className="bg-gray-200 h-10 flex flex-row bg-gray-100 w-full rounded-md px-4 py-2 pr-8 space-x-2 mb-1">
                  <h1
                    // onChange={(e)=>{setInvestmentAddress(e.target.value)}}
                    placeholder="3454345Qw53Vcx3999CX5344EW534 Myself"
                    className=""
                    key={member.id} // add a key prop to avoid warning
                  >
                    {member.address}
                  </h1>
                  <h2 className="text-gray-400">{member.name}</h2>
                </div>
              ));
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};
export default InvestmentType;
