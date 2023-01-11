import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const SideBar = () => {
  const email = useSelector(
    (state: RootState) => state.signupState.signUpState.email
  )
  return (
    <aside className="felx w-64 " aria-label="Sidebar">
      <div className="py-4 overflow-y-auto h-screen bg-[#08101F] dark:bg-[#08101F]">
        <span className="flex px-5 flex-row p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            <h1>Order</h1>
          </span>
          <span className="text-2xl ml-0.5 whitespace-nowrap dark:text-gray-400">
            <h1>ly</h1>
          </span>
          <svg
            className="ml-24 w-5 h-5 "
            aria-hidden="true"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
              fillRule="evenodd"
            ></path>
            <path
              clipRule="evenodd"
              d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        <a className="flex px-5 p-2 text-[#FFFFFF] font-thin text-sm mb-5">
          {email}
        </a>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-light text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Portfolio</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-light text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Monitoring</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-light text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Analyzer</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-light text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Distributor</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-light text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Investments Manager
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-light text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Calendar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-light text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Contacts</span>
            </a>
          </li>
          <li>
            <a
              onClick={()=>console.log("im OtC")}
              className="flex items-center p-2 text-base font-light text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">OTC</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default SideBar;
