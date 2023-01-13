import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBscState, setEtherState, setPolygonState } from "../../slices/tokenslice";

const TokenList = () => {
  const [ether, setEther] = useState<boolean>(true);
  const [bsc, setBsc] = useState<boolean>(true);
  const [polygon, setPolygon] = useState<boolean>(true);
  const dispatch = useDispatch();
  const changeEther = () => {
    setEther(!ether);
    console.log("ehter", ether);
    dispatch(setEtherState( ether));
  };
  const changeBsc = () => {
    setBsc(!bsc);
    dispatch(setBscState(bsc));
  };
  const changePolygon = () => {
    setPolygon(!polygon);
    dispatch(setPolygonState(polygon));
  };
  return (
    <>
      <ul className="w-48 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg dark:bg-white dark:border-gray-200 dark:text-black">
        <li className="w-full border-b border-white rounded-t-lg dark:border-gray-200">
          <div className="flex items-center pl-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              value=""
              onChange={changeEther}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Ether
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-200">
          <div className="flex items-center pl-3">
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              onChange={changeBsc}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-text-black"
            >
              BSC
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-200">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              onChange={changePolygon}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-text-black"
            >
              Polygon
            </label>
          </div>
        </li>
      </ul>
    </>
  );
};
export default TokenList;
