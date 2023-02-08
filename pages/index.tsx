import Head from "next/head";

import { useSelector } from "react-redux";
import Dashboard from "./dashboard";
import HomePage from "./HomePage";
import { RootState } from "./store";


export default function Home() {
  const isLogin = useSelector(
    (state: RootState) => state.isLogin.user.isLogged
  );

  return (
    <>
      <Head>
        <title>Orderly</title>
      </Head>
      {isLogin ? <Dashboard /> :  <HomePage />}
    </>
  );
}
