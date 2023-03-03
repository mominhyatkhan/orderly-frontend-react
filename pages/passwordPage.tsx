import { useSelector } from "react-redux";
import { RootState } from "./store";

import { useRouter } from "next/router";

import PortfolioMonitoring from "../components/portfolioMonitor/portfolioSetup";
import SetPassword from "../components/homePage/authComponents/signup/SetPassword";
import Home from "../components/homePage/Home";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [istoken, setToken] = useState<boolean>(false);
  const isAccountCreated = useSelector(
    (state: RootState) => state.signupState.signUpState.confirmation
  );
  const router = useRouter();
  const { email, token } = router.query;
  const checkdata = async () => {
    try {
      console.log("verified user", email, token);
      const response = await axios.get(
        `http://localhost:8000/user/verify-token?email=${email}&token=${token}`
      );
      setToken(true);
    } catch (error) {
      setToken(false);
    }
  };
  checkdata();
  if (istoken)
    return (
      <>
        {isAccountCreated ? (
          <div className="w-screen bg-[#F6F8FD]">
            <div className="w-full">
              <PortfolioMonitoring />
            </div>
          </div>
        ) : (
          <div className="flex h-screen ">
            <div className="flex bg-[#08101f] text-white w-1/3">
              <SetPassword/>
            </div>
            <div className="flex justify-center bg-[#171f2d] text-white w-full h-full">
              <Home />
            </div>
          </div>
        )}
      </>
    );
  else return <div>phut yha say</div>;
}
export default HomePage;
