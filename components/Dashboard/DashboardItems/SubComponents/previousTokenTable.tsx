import { useState } from "react";

type Props = {
  heading: string[];
  price: string;
};

const PreviousTokenTable = () => {
  const [current, setCurrent] = useState<number>(1);
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
  const tempUpcoming = [
    {
      name: "Alex",
      expected: 1000,
      projectName: "euler",
      date: "25.08.2020",
      completed: "15",
      days: 31,
    },
  ];
  const tempPrevious = [
    {
      name: "Alex",
      projectName: "euler",
      TokenLeft: 1000,
      Got: 400,
      status: "success",
      lockedTokens: 600,
      date: "25.08.2020",
    },
  ];
  const tempMissed = [
    {
      name: "Alex",
      tokenMissed: 1000,
      projectName: "euler",
      expectedDate: 400,
      daysPast: 2,
    },
  ];
  const tempDistribution = [
    {
      name: "Alex",
      expected: 1000,
      recived: 1000,
      investedGroup: "team",
      distributedAmount: 300,
      completed: 15,
    },
  ];
  return (
    <div className="w-full">
      <div className="bg-white flex flex-row w-full">
        <div className="text-[11px] pl-4 pt-2 pb-2  space-x-2 text-gray-500 w-full">
          <a
            className="cursor-pointer font-medium hover:bg-gray-100"
            onClick={() => {
              setHeading(upcomingHeading), setCurrent(1);
            }}
          >
            Upcoming Token
          </a>
          <a
            className="cursor-pointer font-medium hover:bg-gray-100"
            onClick={() => {
              setHeading(previousHeading), setCurrent(2);
            }}
          >
            Previous Token
          </a>
          <a
            className="cursor-pointer font-medium hover:bg-gray-100"
            onClick={() => {
              setHeading(missedHeading), setCurrent(3);
            }}
          >
            Missed Distribution
          </a>
          <a
            className="cursor-pointer font-medium hover:bg-gray-100"
            onClick={() => {
              setHeading(pendingHeading), setCurrent(4);
            }}
          >
            Pending Distribution
          </a>
        </div>
        <div className="flex w-full justify-end flex-row space-x-4 text-[11px] mr-14 text-gray-500">
          <button>Next 30 Days</button> <button>Time Left</button>
        </div>
      </div>
      <div className="bg-white w-full mt-1 p-[24px]">
        <table className="table-auto bg-white border-spacing-4 w-full">
          <thead>
            <tr className=" font-extralight bg-gray-200 h-8">
              <th className="font-extralight text-[11px] text-left uppercase ">
                token name
              </th>
              {heading.map((item) => {
                return (
                  <th className="font-extralight text-[11px] text-left uppercase">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="">
            {current == 1 &&
              tempUpcoming.map((item) => {
                return (
                  <tr className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td>{item.expected}</td>
                    <td>{item.projectName}</td>
                    <td>{item.date}</td>
                    <td>{item.completed}</td>
                    <td>{item.days}</td>
                  </tr>
                );
              })}
            {current == 2 &&
              tempPrevious.map((item) => {
                return (
                  <tr className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td>{item.projectName}</td>
                    <td>{item.TokenLeft}</td>
                    <td>{item.Got}</td>
                    {item.status == "success" && (
                      <td>
                        <a className="bg-[#689F38] rounded-md p-1 border-2 text-[#689F38] border-[#689F38] bg-opacity-20  flex flex-row space-x-2 w-max pr-2">
                          <p> {item.status}</p>
                        </a>
                      </td>
                    )}
                    {item.status == "partialy" && (
                      <td>
                        <a className="rounded-md p-1 bg-[#F2BB4E] bg-opacity-20 border-2 text-[#F2BB4E] border-[#F2BB4E] flex flex-row space-x-2">
                          <p>{item.status}</p>
                        </a>
                      </td>
                    )}
                    {item.status == "failure" && (
                      <td>
                        <a className="rounded-md p-1 bg-[#E74C3C] bg-opacity-20 border-2 text-[#E74C3C] border-[#E74C3C]">
                          {item.status}
                        </a>
                      </td>
                    )}
                    <td>{item.lockedTokens}</td>
                    <td>{item.date}</td>
                  </tr>
                );
              })}
            {current == 3 &&
              tempMissed.map((item) => {
                return (
                  <tr className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td>{item.tokenMissed}</td>
                    <td>{item.projectName}</td>
                    <td>{item.expectedDate}</td>
                    <td className="text-[#E74C3C]">{item.daysPast} Day Ago</td>
                  </tr>
                );
              })}
            {current == 4 &&
              tempDistribution.map((item) => {
                return (
                  <tr className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td>{item.expected}</td>
                    <td>{item.recived}</td>
                    <td>{item.investedGroup}</td>
                    <td>{item.distributedAmount}</td>
                    <td>{item.completed}</td>
                    <td>
                      <a className="cursor-pointer text-[#6B8068] underline">
                        Distribute
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PreviousTokenTable;
