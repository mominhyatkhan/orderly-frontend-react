
import { useDispatch } from "react-redux";
import { setSignupState } from "../../../../pages/slices/signupSlice";


function EmailVerify() {
  const dispatch = useDispatch();
  const handleSignup = () => {
    dispatch(setSignupState({ isSigned: true, signState: 0 }));
  };
  const showPassword=()=>{
    dispatch(setSignupState({ isSigned: true, signState: 2 }))
  }




  return (
    <div className="grid ml-12">
      <div className="grid w-4/5 grid-flow-row gap-y-6 self-center item-center text-center">
        <label className="text-4xl">Sign Up</label>
        <p className=" text-white text-xl">
          The confirmation letter with the sign-in link has been sent to your
          email adddress: {"example@yahoo.com"}
        </p>
        <a className="text-green-900 font-bold py-2 px-4 text-center cursor-pointer" onClick={showPassword}>
          Open mail.yahoo.com
        </a>
        <div className="flex gap-2 justify-center">
          <label>Have not account?</label>
          <a className="font-bold cursor-pointer" onClick={handleSignup}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
export default EmailVerify;
