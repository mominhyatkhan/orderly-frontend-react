import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSignupState } from "../../../../slices/signupSlice";

function SetPassword() {
  const [password, setpassword] = useState<string>("");
  const dispatch =useDispatch()
  return (
    <div className="grid">
      <form 
        onSubmit={(e) => {
          e.preventDefault(),dispatch(setSignupState({ confirmation:true}));
        }}
        className="flex"
      >
        <div className="grid ml-10 w-4/5 grid-flow-row gap-y-6 self-center">
          <label className="flex justify-center text-3xl">Welcome</label>
          <p>Set the password to protect your account</p>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.currentTarget.value);
            }}
            id="password"
            className="bg-white  border text-black text-sm rounded-lg focus:ring-blue-500 block p-2.5 placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-[#6b8068]  hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          
          >
            Let's Start
          </button>
          <div className="flex gap-1 justify-center">
            <label>Have an account?</label>
            <a className="font-bold">Log In</a>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SetPassword;
