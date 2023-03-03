import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassword } from "../../../../pages/slices/signupSlice";
import PasswordValidator from "password-validator";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
const schema = new PasswordValidator();
schema
  .is()
  .min(8) // Minimum length of 8 characters
  .has()
  .uppercase(4) // Minimum of 4 uppercase letters
  .has()
  .lowercase(4) // Minimum of 4 lowercase letters
  .has()
  .digits(4) // Minimum of 4 digits
  .has()
  .symbols(); // Requires symbols

function validatePassword(password: string): boolean {
  const validationResult = schema.validate(password, {
    list: true,
  }) as string[];
  return validationResult.length === 0;
}

function SetPassword() {
  const [password, setpassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  function handleTogglePassword() {
    setShowPassword(!showPassword);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newPassword = event.target.value;
    setPassword(newPassword);
    console.log(newPassword);
    if (!validatePassword(newPassword)) {
      setPasswordError(
        "Minimum 4 non-consecutive numbers  Mininum 4 capital & lowercase letters"
      );
    } else {
      setPasswordError("");
    }
  }

  return (
    <div className="flex w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            !passwordError && dispatch(setPassword({ password }));
        }}
        className="flex w-full"
      >
        <div className="flex justify-center flex-col w-full ">
          <div className="self-center items-center flex flex-col  gap-y-6">
            <label className="flex self-center text-4xl">Welcome</label>
            <p className="w-[394px] text-lg text-center">Set the password to protect your account</p>
            <div className="flex flex-row bg-white focus rounded-lg h-[56px] w-[320px]">
              <input
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordChange}
                id="password"
                className="bg-white w-full text-black text-sm rounded-lg focus:outline-none  block p-2.5 placeholder-black dark:text-black "
                placeholder="Password"
                required
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
            {passwordError && (
              <div className="justify-center flex flex-col text-green-500">
                <label>Minimum 4 non-consecutive numbers</label>
                <label>Mininum 4 capital & lowercase letters</label>
                <label className="text-red-500 self-center">Symbols</label>
                <label className="text-red-500 mt-5 italic">
                  Your password is not strong enough yet
                </label>
              </div>
            )}
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
