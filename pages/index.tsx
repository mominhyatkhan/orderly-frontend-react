import Head from "next/head";
import login from "./components/LoginForm";
import homePage from "./components/Home";
import signupMain from "./components/signup/SignUpMain";
import emailVerify from "./components/signup/EmailVerify";
import setPassword from "./components/signup/SetPassword";
export default function Home() {
  return (
    <>
      <Head>
        <title>Orderly</title>
      </Head>
      <div className="flex h-screen ">
        <div className="flex bg-[#08101f] text-white w-1/3"> {login()}</div>
        <div className="flex justify-center bg-[#171f2d] text-white w-full h-full">
          {homePage()}
        </div>
      </div>
    </>
  );
}
