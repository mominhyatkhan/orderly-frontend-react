import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassword } from "../../../../pages/slices/signupSlice";
import PasswordValidator from "password-validator";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function SetPassword() {
  const router = useRouter();
  const { email, token } = router.query;

  const [password, setpassword] = useState<string>("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [hasFourNonConsecutiveNumbers, setHasFourNonConsecutiveNumbers] =
    useState(false);
  const [hasFourCapitalAndLowerCase, setHasFourCapitalAndLowerCase] =
    useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setpassword(newPassword);
    setHasFourNonConsecutiveNumbers(
      /(?!(?:\d|[a-z])\1{3})\d{4}/i.test(newPassword)
    );
    setHasFourCapitalAndLowerCase(
      /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/g.test(newPassword)
    );
    setHasSymbol(/[!@#$%^&*(),.?":{}|<>]/.test(newPassword));
  };
  function handleTogglePassword() {
    setShowPassword(!showPassword);
  }

  const setPasswordDb = () => {
    dispatch(setPassword({ password }));
  };
  return (
    <div className="flex w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            hasFourNonConsecutiveNumbers &&
              hasFourCapitalAndLowerCase &&
              hasSymbol &&
              setPasswordDb;
        }}
        className="flex w-full"
      >
        <div className="flex justify-center flex-col w-full ">
          <div className="self-center items-center flex flex-col  gap-y-6">
            <label className="flex self-center text-4xl">Welcome</label>
            <p className="w-[394px] text-lg text-center">
              Set the password to protect your account
            </p>
            <div className="flex flex-row bg-white focus rounded-lg h-[56px] w-[320px]">
              {/*  <input
                
                onChange={handlePasswordChange}
                id="password"
                className="bg-white w-full text-black text-sm rounded-lg focus:outline-none  block p-2.5 placeholder-black dark:text-black "
                placeholder="Password"
                required
              /> */}
              <input
                type={showPassword ? "text" : "password"}
                className={`${
                  !hasFourNonConsecutiveNumbers ||
                  !hasFourCapitalAndLowerCase ||
                  !hasSymbol
                    ? "border-red-500"
                    : "border-gray-400"
                } bg-white w-full text-black text-sm rounded-lg focus:outline-none  block p-2.5 placeholder-black dark:text-black`}
                id="password"
                placeholder="******************"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className=" inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none justify-end"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 opacity-40" />
                ) : (
                  <EyeIcon className="h-5 w-5 opacity-40" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className=" bg-[#6b8068] h-[56px] w-[320px] hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
            >
              Let's Start
            </button>

            <div className="justify-center flex flex-col text-green-500 space-y-2">
              {/*   <label>Minimum 4 non-consecutive numbers</label>
              <label>Mininum 4 capital & lowercase letters</label>
              <label className="text-red-500 self-center">Symbols</label>
              <label className="text-red-500 mt-5 italic">
                Your password is not strong enough yet
              </label> */}
              <p
                className={`text-sm ${
                  hasFourNonConsecutiveNumbers
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Minimum 4 non-consecutive numbers
              </p>
              <p
                className={`text-sm ${
                  hasFourCapitalAndLowerCase ? "text-green-500" : "text-red-500"
                }`}
              >
                Minimum 4 capital & lowercase letters
              </p>
              <p
                className={`text-sm self-center ${
                  hasSymbol ? "text-green-500" : "text-red-500"
                }`}
              >
                Symbols
              </p>
            </div>

            <div className="flex gap-1 justify-center">
              <label>Have an account?</label>
              <a className="font-bold">Log In</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SetPassword;
