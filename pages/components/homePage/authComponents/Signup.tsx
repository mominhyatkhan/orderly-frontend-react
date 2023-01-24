import SignupMain from "./signup/SignUpMain";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import EmailVerify from "./signup/EmailVerify";
import SetPassword from "./signup/SetPassword";
import Router from "next/router";
import PortfolioMonitoring from "../../portfolioMonitor/portfolioSetup";
function Signup() {
  const signstate = useSelector(
    (state: RootState) => state.signupState.signUpState.signState
  );
  
  return (
    <>
      {(() => {
        switch (signstate) {
          case 0:
            return <SignupMain />;
          case 1:
            return <EmailVerify/>;
          case 2:
            return <SetPassword />;
          default:
            <SignupMain />;
        }
      })()}
    </>
  );
}
export default Signup;
