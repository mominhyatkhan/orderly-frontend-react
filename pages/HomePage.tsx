
import { useSelector } from "react-redux";

import AuthenticationComponent from "../components/homePage/authComponents/authComponent";
import Home from "../components/homePage/Home";

import { RootState } from "./store";

function HomePage() {
  const isAccountCreated = useSelector(
    (state: RootState) => state.signupState.signUpState.confirmation
  );
  return (
    <> 
        <div className="flex h-screen ">
          <div className="flex bg-[#08101f] text-white w-1/3">
            <AuthenticationComponent />
          </div>
          <div className="flex justify-center bg-[#171f2d] text-white w-full h-full">
            <Home />
          </div>
        </div>
    </>
  );
}
export default HomePage;
