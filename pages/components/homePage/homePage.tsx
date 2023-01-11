import HomePage from "./Home";
import AuthenticationComponent from "./authComponents/authComponent";
import PortfolioMonitoring from "../portfolioMonitor/portfolioMonitor";

function FrontPage() {
  const isAccountCreated = false;
  return (
    <>
      {isAccountCreated ? (
        <PortfolioMonitoring />
      ) : (
        <div className="flex h-screen ">
          <div className="flex bg-[#08101f] text-white w-1/3">
            <AuthenticationComponent />
          </div>
          <div className="flex justify-center bg-[#171f2d] text-white w-full h-full">
            <HomePage />
          </div>
        </div>
      )}
    </>
  );
}
export default FrontPage;
