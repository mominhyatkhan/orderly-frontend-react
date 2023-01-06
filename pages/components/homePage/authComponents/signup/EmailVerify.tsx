import { useDispatch } from "react-redux";
import { setSignupState } from "../../../../slices/signupSlice";

function EmailVerify() {
  const dispatch=useDispatch();
  const handleSignup=()=>{
    dispatch(setSignupState({isSigned:true,signState:0}))
  }
  return (
    <div className="grid ml-12">
      <div className="grid w-4/5 grid-flow-row gap-y-6 self-center item-center text-center">
        <label className="text-3xl">Sign Up</label>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The confirmation letter with the sign-in link has been sent to your
          email adddress: {"example@yahoo.com"}
        </p>
        <a className="text-white font-bold py-2 px-4 text-center cursor-pointer">Open mail.yahoo.com</a>
        <div className="flex gap-2 justify-center">
          <label>Have not account?</label>
          <a className="font-bold cursor-pointer"onClick={
          handleSignup
        }>Sign Up</a>
        </div>
      </div>
    </div>
  );
}
export default EmailVerify;
