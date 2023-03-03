import { useSelector } from "react-redux";
import { RootState } from "./store";

import { useRouter } from "next/router";

import PortfolioMonitoring from "../components/portfolioMonitor/portfolioSetup";
import SetPassword from "../components/homePage/authComponents/signup/SetPassword";
import Home from "../components/homePage/Home";

function HomePage() {
  const isAccountCreated = useSelector(
    (state: RootState) => state.signupState.signUpState.confirmation
  );
  const router = useRouter();
  const { email, token } = router.query;
  /*   useEffect(()=>{
   
    const response=axios.get(`http://localhost:8000/user/verify?token=${token}`)
    console.log('verified user',response)
  },[]) */
  if (token == "helog")
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
              <SetPassword />
            </div>
            <div className="flex justify-center bg-[#171f2d] text-white w-full h-full">
              <Home />
            </div>
          </div>
        )}
      </>
    );
   else
   return(<div>
    phut yha say
   </div>) 
}
export default HomePage;
