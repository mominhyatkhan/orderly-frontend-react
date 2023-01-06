import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginState } from "../../../slices/loginSlice";
import { setSignupState } from "../../../slices/signupSlice";
function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch( );
  const handleDispatch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoginState({
      email:email,
      password:password,
      isLogged:false
    }))
  };
  const handleSignup=()=>{
    dispatch(setSignupState({isSigned:true,signState:0}))
  }
  return (
    <div className="grid mt-36">
      <form
        onSubmit={(e) => {
          handleDispatch(e);
        }}
        className="flex"
      >
        <div className="grid w-4/5 grid-flow-row gap-y-6 self-center item-center text-center space-x-20">
          <label className="ml-16 text-3xl">Welcome Back</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            id="Email"
            className="bg-white w-80 h-14 px-3 py-4 border text-black text-sm rounded-lg focus:ring-blue-500 block placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            className="bg-white w-80 h-14 px-3 py-4 border text-black text-sm rounded-lg focus:ring-blue-500 block placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-[#6b8068] w-80 h-14 px-3 py-4 hover:bg-emerald-700 text-white rounded"
          >
            Login
          </button>
          <div className="flex gap-1 justify-center">
            <label>Have not account?</label>
            <a className="font-bold cursor-pointer" onClick={
          handleSignup
        }>Sign Up</a>
          </div>
        </div>
      </form>
      <div className="self-center">
        <a className="font-bold flex justify-center cursor-pointer">Forgot your Password ?</a>
      </div>
    </div>
  );
}
export default Login;
