import Home from "./Home";
import AuthenticationComponent from "./authComponents/authComponent";
import PortfolioMonitoring from "../portfolioMonitor/portfolioSetup";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function HomePage() {
  const isAccountCreated = useSelector(
    (state: RootState) => state.signupState.signUpState.confirmation
  );
  return (
    <>
      {isAccountCreated ? (
        <div className="ml-10 w-screen bg-[#F6F8FD]">
          <div className="w-full"><PortfolioMonitoring /></div>
        </div>
      ) : (
        <div className="flex h-screen ">
          <div className="flex bg-[#08101f] text-white w-1/3">
            <AuthenticationComponent />
          </div>
          <div className="flex justify-center bg-[#171f2d] text-white w-full h-full">
            <Home />
          </div>
        </div>
      )}
    </>
  );
}
export default HomePage;