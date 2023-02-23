import { useDispatch } from "react-redux";
import { setDashboardState } from "../../pages/slices/dashboardSlice";
import { setLoginState } from "../../pages/slices/loginSlice";

const PortfolioFooter = () => {
  const dispatch = useDispatch();

  const showDashboard = () => {
    dispatch(
      setLoginState({
        isLogged: true,
      })
    );
  };
  const showMonitor = () => {
    dispatch(setDashboardState(1));
  };
  return (
    <div className="m-20 bg-white w-5/6 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white">
      <span className="ml-16 text-sm text-gray-500 sm:text-center dark:text-gray-400">
        0 Network(s) Configured
      </span>
      <ul className="mr-48 flex flex-wrap items-center mt-3 text-sm text-[#6B8068]-500 dark:text-[#6B8068] sm:mt-0">
        <li>
          <a onClick={showMonitor} className="mr-4 hover:underline md:mr-6">
            Skip this step
          </a>
        </li>
        <li>
          <button
            className="bg-[#6b8068] w-48 h-12 px-3 py-4 hover:bg-emerald-700 text-white rounded"
            onClick={showDashboard}
          >
            Setup Portfolio
          </button>
        </li>
      </ul>
    </div>
  );
};
export default PortfolioFooter;
