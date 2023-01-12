import { useDispatch, useSelector } from "react-redux";
import { setLoginState } from "../../../slices/loginSlice";
import { RootState } from "../../../store";

const SideBar = () => {
  const email = useSelector(
    (state: RootState) => state.signupState.signUpState.email
  );
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(
      setLoginState({
        email: "",
        password: "",
        isLogged: false,
      })
    );
    console.log("aya hoon");
  };
  return (
    <aside className="flex " aria-label="Sidebar">
      <div className="py-4 w-72 h-screen bg-[#08101F] dark:bg-[#08101F]">
        <span className="flex px-5 flex-row p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            <h1>Order</h1>
          </span>
          <span className="text-2xl ml-0.5 whitespace-nowrap dark:text-gray-400">
            <h1>ly</h1>
          </span>
          <span>
            <a onClick={logout} className="cursor-pointer">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                className="ml-28 w-8 h-8 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </a>
          </span>
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
              onClick={() => console.log("im OtC")}
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
