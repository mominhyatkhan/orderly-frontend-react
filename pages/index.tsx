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
      <div className="grid grid-flow-col h-screen ">
        <div className="grid bg-[#08101f] text-white"> {login()}</div>
        <div className="grid place-items-center bg-[#171f2d] text-white h-full col-span-2">
          {homePage()}
        </div>
      </div>
    </>
  );
}
