import { useState } from "react";

export default function login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="grid">
      <form
        onSubmit={(e) => {
          console.log("Submitted: ", email, " ", password), e.preventDefault();
        }}
        className="flex"
      >
        <div className="grid ml-10 w-4/5 grid-flow-row gap-y-6 self-center">
          <label className="flex justify-center text-3xl">Welcome Back</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            id="password"
            className="bg-white px-12px py-18px border text-black text-sm rounded-lg focus:ring-blue-500 block p-2.5 placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            className="bg-white px-12px py-18px border text-black text-sm rounded-lg focus:ring-blue-500 block p-2.5 placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-[#6b8068] px-12 py-3 hover:bg-emerald-700 text-white rounded"
          >
            Login
          </button>
          <div className="flex gap-1 justify-center">
            <label>Have not account?</label>
            <a className="font-bold">Sign Up</a>
          </div>
        </div>
      </form>
      <div className="self-center">
        <a className="font-bold flex justify-center">Forgot your Password ?</a>
      </div>
    </div>
  );
}
