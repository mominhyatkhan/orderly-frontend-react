import { useState } from "react";

export default function signupMain() {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="grid">
      <form
        onSubmit={(e) => {
          console.log("Submitted: ", email), e.preventDefault();
        }}
        className="flex"
      >
        <div className="grid ml-10 w-4/5 grid-flow-row gap-y-6 self-center">
          <label className="flex justify-center text-3xl">Sign Up</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            id="email"
            className="bg-white  border text-black text-sm rounded-lg focus:ring-blue-500 block p-2.5 placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="bg-[#6b8068]  hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Account
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
