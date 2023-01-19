import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
const GlobalTokenTable = () => {
  const data = useSelector((state:RootState)=>state.tokens[0].tokenlist)
  const cards = useSelector((state: RootState) => state.coinCards);
  const token = useSelector((state: RootState) => state.tokens);
  const apikey = "J1IXZNAEZW3JEQWX3J4WM7JBAUGJUSD8BP";
  const bscApiKey = "7W8WQYR6D9ACWR3Y5P7EDJK121X24PXE4D";
  const [address, setAddress] = useState<string>("");
  const [result, setResult] = useState<number[]>([]);

  return (
    <div className="relative overflow-auto shadow-md sm:rounded-lg max-h-96">
      <table className="w-full text-sm font-light text-gray-500 dark:text-gray-400">
        <thead className="font-normal text-gray-700 uppercase bg-white dark:bg-white dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              NAME
            </th>
            <th scope="col" className="px-6 py-3">
              PRICE
            </th>
            <th scope="col" className="px-6 py-3">
              24
            </th>
            <th scope="col" className="px-6 py-3">
              HOLDINGS
            </th>
            <th scope="col" className="px-6 py-3">
              PROFIT/LOSS
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => {
            console.log(item, "yeh item hs");
            return (
              <tr
                key={item.id}
                className="bg-white dark:bg-white dark:border-gray-200 "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  {item.market_cap_change_percentage_24h}
                </td>
                <td className="px-6 py-4">{item.balance/10**(item.decimals)}</td>
                <td></td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default GlobalTokenTable;
