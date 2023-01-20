import Head from "next/head";
import HomePage from "./components/homePage/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Dashboard from "./components/Dashboard/dashboard";
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
