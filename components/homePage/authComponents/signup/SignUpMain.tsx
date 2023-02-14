import { useState } from "react";
import { useDispatch } from "react-redux";
import { setemail, setSignupState } from "../../../../pages/slices/signupSlice";


function SignupMain() {
  const [mail, setmail] = useState<string>("");
  const dispatch = useDispatch();
  const switchLogin = () => {
    dispatch(setSignupState({ isSigned: false, signState: 0 }));
  };
    
  return (
    <div className="grid">
      <form
        onSubmit={() =>
         { dispatch(setSignupState({ isSigned: true, signState: 1,email:mail })),dispatch(setemail())}
        }
        className="flex"
      >
        <div className="grid w-4/5 grid-flow-row gap-y-6 self-center item-center text-center space-x-20">
          <label className="ml-16 text-3xl">Sign Up</label>
          <input
            type="email"
            onChange={(e) => {
              setmail(e.currentTarget.value);
            }}
            id="email"
            className="bg-white w-80 h-14 px-3 py-4 border text-black text-sm rounded-lg focus:ring-blue-500 block placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="bg-[#6b8068] w-80 h-14 px-3 py-4 hover:bg-emerald-700 text-white rounded"
          >
            Create Account
          </button>
          <div className="flex gap-1 justify-center">
            <label>Have an account?</label>
            <a className="font-bold cursor-pointer" onClick={switchLogin}>
              Log In
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupMain;
