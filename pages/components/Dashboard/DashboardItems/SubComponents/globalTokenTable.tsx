import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
const GlobalTokenTable = () => {
  const data = useSelector((state: RootState) => state.tokens.wallet);

  return (
    <div className="relative overflow-auto shadow-md sm:rounded-lg max-h-96">
      <table className="w-full text-sm font-light text-gray-500 dark:text-gray-400">
        <thead className="font-normal text-gray-700 uppercase bg-white dark:bg-white dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3 w-48 text-start">
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
          {data &&
            data.map((item: any, index: number) => {
              if (item.tableState&&item.state)
                return item.tokenlist.map((token: any, tokenindex: number) => {
                  return token.map((final: any, finalIndex: number) => {
                    return (
                      <tr
                        key={token.id}
                        className="bg-white dark:bg-white dark:border-gray-200 "
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                        >
                          {index + 1}.{finalIndex + 1}
                        </th>
                        <td className="px-6 py-4 flex flex-col space-x-5 w-full">
                          <div className="flex flex-row space-x-2">
                            <img src={final.logo} className="w-5 h-5" />
                            <h1 className=" text-black">{final.name}</h1>
                          </div>
                          <h2 className="w-full mt-2">{item.name}</h2>
                        </td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">
                          {final.market_cap_change_percentage_24h}
                        </td>
                        <td className="px-6 py-4">
                          {final.balance / 10 ** final.decimals}
                        </td>
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
                  });
                });
            })}
        </tbody>
      </table>
    </div>
  );
};
export default GlobalTokenTable;
