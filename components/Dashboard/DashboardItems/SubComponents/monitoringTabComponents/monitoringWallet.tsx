import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../pages/store";
import {
  changeMonitoring,
  filterWalletsChains,
  setemailNotification,
  settelegramNotification,
} from "../../../../../pages/slices/tokenslice";
import {
  setMonitorNotification,
  setportfolioMonitor,
} from "../../../../../pages/slices/cardsSlice";

import {
  setEmailNotification,
  setTelegramNotification,
} from "../../../../../pages/api/BackendApi";

type Props = {
  setMonitor: Dispatch<SetStateAction<boolean>>;
  isMonitor: boolean;
};
const MonitoringWallet: React.FC<Props> = ({ setMonitor, isMonitor }) => {
  const chains = useSelector((state: RootState) => state.coinCards);
  const wallets = useSelector((state: RootState) => state.tokens.wallet);
  const email = useSelector((state: RootState) => state.isLogin.user.email);
  const dispatch = useDispatch();
  const setProfileMonitor = (name: string, monitor: boolean) => {
    dispatch(setportfolioMonitor({ name, monitor }));
    dispatch(changeMonitoring({ name, monitor }));
    console.log(name, monitor);
  };
  const handleEmailNotificationChange = (
    name: string,
    chainAddress: string,
    isemail: boolean
  ) => {
    dispatch(
      setemailNotification({
        name: name,
        chainAddress: chainAddress,
        isemail: !isemail,
      })
    );
    setEmailNotification(email, name, chainAddress, !isemail);
  };
  const handleTelegramNotificationChange = (
    name: string,
    chainAddress: string,
    istelegram: boolean
  ) => {
    dispatch(
      settelegramNotification({
        name: name,
        chainAddress: chainAddress,
        istelegram: !istelegram,
      })
    );
    setTelegramNotification(email, name, chainAddress, !istelegram);
  };
  const handleAllnotification = (
    chainid: string,
    email: string,
    isnotification: boolean
  ) => {
    dispatch(
      setMonitorNotification({
        chainId: chainid,
        isnotification: isnotification,
      })
    );
  };

  return (
    <div className="flex h-full w-3/4 flex-col ml-40 mr-40 mt-28 ">
      <div className="flex flex-row items-center">
        <h1 className=" w-full text-3xl">Monitoring</h1>
        <div className="mt-4 ml-14 flex max-w-xs ">
          <button
            onClick={() => setMonitor(!isMonitor)}
            className="self-center bg-[#6b8068] w-36 h-10 hover:bg-emerald-700 text-white rounded"
          >
            Add Monitoring
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        {chains.map((item, index) => {
          return (
            <div key={item.chainId + index} className="mb-6">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex flex-row mb-1  text-xs text-gray-700 bg-white uppercase bg-whtie sm:rounded-lg  border-b ">
                  <div className="m-6 ml-10 w-3/6">
                    <h1 className="font-medium text-sm">{item.name}</h1>
                    <h4>{item.symbol}</h4>
                  </div>
                  <div className="ml-10 space-x-2 items-center flex flex-row justify-center">
                    <span className="ml-3 text-xs font-normal text-gray-400 dark:text-gray-400">
                      Notifications
                    </span>
                    <h1 className="text-gray-300">Off</h1>
                    <label className="relative inline-flex content-center items-center cursor-pointer">
                      <input
                        checked={item.isnotification}
                        type="checkbox"
                        onChange={() =>
                          handleAllnotification(
                            item.chainId,
                            email,
                            !item.isnotification
                          )
                        }
                        value=""
                        className="sr-only peer"
                      />

                      <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-0  rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-[#6B8068] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#6B8068] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-400 peer-checked:bg-gray-400"></div>
                    </label>
                    <h1 className="text-gray-300">On</h1>
                  </div>
                  <div className="ml-5 w-56 text-gray-400 flex items-center flex-row justify-center space-x-2 cursor-pointer">
                    <h1>Show in portfolio</h1>
                    <div
                      onClick={() => {
                        setProfileMonitor(item.name, !item.monintorState);
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        className={`${
                          item.monintorState
                            ? "text-green-700 fill-green"
                            : "text-gray-300"
                        } w-4 h-4`}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="m-6 ml-5 flex items-center flex-row space-x-2">
                    <svg
                      className="w-4 h-4 text-gray-300"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Icon" className="">
                        <path d="M4.251,9.031c-0,0 0.194,4.655 0.34,8.167c0.106,2.544 2.199,4.552 4.746,4.552c1.68,0 3.646,0 5.326,0c2.547,0 4.64,-2.008 4.746,-4.552c0.146,-3.512 0.34,-8.167 0.34,-8.167c0.018,-0.413 -0.304,-0.763 -0.718,-0.78c-0.413,-0.018 -0.763,0.304 -0.78,0.718c-0,-0 -0.194,4.655 -0.341,8.166c-0.072,1.741 -1.505,3.115 -3.247,3.115c-1.68,0 -3.646,0 -5.326,-0c-1.742,0 -3.175,-1.374 -3.247,-3.115c-0.147,-3.511 -0.341,-8.166 -0.341,-8.166c-0.017,-0.414 -0.367,-0.736 -0.78,-0.718c-0.414,0.017 -0.736,0.367 -0.718,0.78Z" />
                        <path d="M7.459,5.25l0.374,-1.12c0.374,-1.123 1.425,-1.88 2.609,-1.88c0.944,0 2.172,0 3.116,0c1.184,-0 2.235,0.757 2.609,1.88l0.374,1.12l3.459,0c0.414,-0 0.75,0.336 0.75,0.75c0,0.414 -0.336,0.75 -0.75,0.75l-16,0c-0.414,-0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.336,-0.75 0.75,-0.75l3.459,0Zm7.5,0l-0.215,-0.645c-0.17,-0.511 -0.647,-0.855 -1.186,-0.855c-0.944,-0 -2.172,-0 -3.116,0c-0.539,-0 -1.016,0.344 -1.186,0.855l-0.215,0.645l5.918,0Z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 bg-white">
                  <thead className="text-xs  text-gray-400 uppercase border-b">
                    <tr className="item-center w-auto">
                      <th
                        scope="col"
                        className="px-6 py-3 font-normal text-uppercase"
                      >
                        Address
                      </th>
                      <th scope="col" className=" font-normal text-uppercase">
                        TOKEN
                      </th>
                      <th
                        scope="col"
                        className="p-1 w-28 font-normal text-uppercase"
                      >
                        EMAIL NOTIFICATION
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 w-44 font-normal text-uppercase"
                      >
                        TELEGRAM NOTIFICATION
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-normal  text-uppercase"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>

                  {wallets.map((wallet) => {
                    if (wallet.symbol == item.symbol) {
                      return (
                        <tbody key={wallet.chainAddress}>
                          <tr
                            className="bg-white border-b"
                            key={wallet.chainAddress}
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-black"
                            >
                              {wallet.chainAddress}
                            </th>

                            <td className="px-6 py-4">
                              {wallet.tokenlist.length}
                            </td>
                            <td className="px-6 py-4">
                              <input
                                id="email-checkbox"
                                type="checkbox"
                                checked={wallet.isemail}
                                onChange={() =>
                                  handleEmailNotificationChange(
                                    wallet.chain,
                                    wallet.chainAddress,
                                    wallet.isemail
                                  )
                                }
                                className="w-4 h-4  accent-green-600"
                              />
                            </td>
                            <td className="px-6 py-4">
                              <input
                                id="telegram-checkbox"
                                type="checkbox"
                                checked={wallet.istelegram}
                                onChange={() =>
                                  handleTelegramNotificationChange(
                                    wallet.chain,
                                    wallet.chainAddress,
                                    wallet.istelegram
                                  )
                                }
                                className="w-4 h-4 accent-green-600"
                              />
                            </td>
                            <td className="px-6 py-4  w-max cursor:Pointer">
                              <a
                                href="#"
                                className="flex flex-row  space-x-2 w-max text-gray-400 cursor:Pointer"
                              >
                                <h1 className="text-xs ">Add In/Out</h1>
                                <svg
                                  aria-hidden="true"
                                  fill="none"
                                  className="w-4 h-4"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    }
                  })}
                </table>
                <div className="bg-white flex justify-center"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MonitoringWallet;
