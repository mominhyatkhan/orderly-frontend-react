import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
const GlobalTokenTable = () => {
  const [data, setData] = useState<Array<Object>>([]);
  const cards = useSelector((state: RootState) => state.coinCards);
  const apikey = "J1IXZNAEZW3JEQWX3J4WM7JBAUGJUSD8BP";
  const [address, setAddress] = useState<string>("");
  const [result, setResult] = useState<string>("");
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      let a: any[] = [];
      response.data.map(async (item: any) => {
        if (item.id == "ethereum") {
          a.push(item);
          console.log(item);
          
        }
      });
      setData(a);
      console.log(address);
      const holdings = await axios.get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apikey}`
      );
      setResult(holdings.data.result);
    } catch (error) {
      console.error(error);
    }
  }
  function getAddress() {
    cards.map((item) => {
      if (item.name == "Ethereum") {
        console.log("idher");
        setAddress(item.addreses[0]);
      }
    });
  }
  useEffect(() => {
    getAddress();
    address && fetchData();
  }, [address]);

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
            if (item.id === "ethereum")
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
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.current_price}</td>
                  <td className="px-6 py-4">
                    {item.market_cap_change_percentage_24h}
                  </td>
                  <td className="px-6 py-4"> {result}</td>
                  <td className="px-6 py-4"></td>
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
