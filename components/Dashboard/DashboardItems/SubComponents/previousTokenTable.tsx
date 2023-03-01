import { useState } from "react";

type Props = {
  heading: string[];
  price: string;
};

const PreviousTokenTable = () => {
  const [heading, setHeading] = useState<string[]>([
    "expected Amount",
    "Project Name",
    "Unlock date",
    "Completed (%)",
    "Days Left",
  ]);
  const upcomingHeading = [
    "expected Amount",
    "Project Name",
    "Unlock date",
    "Completed (%)",
    "Days Left",
  ];
  const previousHeading = [
    "Project Name",
    "Token (left) Amount",
    "Got",
    "Status",
    "locked Tokens",
    "Date",
  ];
  const missedHeading = [
    "Token Missed",
    "project Name",
    "Expected Date",
    "Days Past",
  ];
  const pendingHeading = [
    "Expected",
    "Received",
    "investment Group",
    "Distribution Amount",
    "Completed (%)",
    "Action",
  ];

  return (
    <div className="w-full">
      <div className="bg-white flex flex-row w-full">
        <div className="text-[11px] pl-4 pt-2 pb-2  space-x-2 text-gray-500 w-full">
          <a
            className="cursor-pointer font-medium"
            onClick={() => setHeading(upcomingHeading)}
          >
            Upcoming Token
          </a>
          <a
            className="cursor-pointer font-medium"
            onClick={() => setHeading(previousHeading)}
          >
            Previous Token
          </a>
          <a
            className="cursor-pointer font-medium"
            onClick={() => setHeading(missedHeading)}
          >
            Missed Distribution
          </a>
          <a
            className="cursor-pointer font-medium"
            onClick={() => setHeading(pendingHeading)}
          >
            Pending Distribution
          </a>
        </div>
        <div className="flex w-full justify-end flex-row space-x-4 text-[11px] mr-14 text-gray-500"><button>Next 30 Days</button> <button>Time Left</button></div>
      </div>
      <div className="bg-white w-full mt-1">
        <table className="border-separate bg-white border-spacing-4 w-full">
          <thead>
            <tr className=" font-extralight">
              <th className="font-extralight text-[10px] text-left uppercase">
                token name
              </th>
              {heading.map((item) => {
                return (
                  <th className="font-extralight text-[10px] text-left uppercase">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[11px]">asd</td>
              <td className="text-[11px]">asd</td>
              <td className="text-[11px]">fasd</td>
              <td className="text-[11px]">asd</td>
              <td className="text-[11px]">asdfs</td>
              <td className="text-[11px]">asda</td>
              <td className="text-[11px]">asda</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PreviousTokenTable;
