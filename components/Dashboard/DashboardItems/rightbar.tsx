import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../pages/store";

const Rightbar = () => {
  const email = useSelector(
    (state: RootState) => state.signupState.signUpState.email
  );
  const wallets = useSelector((state: RootState) => state.tokens.wallet);
  /*  
  const BncToken = useSelector((state: RootState) => state.tokens[1]);
  const dispatch=useDispatch()
  ethToken.nativeValue + BncToken.nativeValue; */
  const [nativetotal, setNativetotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(0);
    setNativetotal(0);
    wallets.map((wallet) => {
      setNativetotal(nativetotal + wallet.nativeValue);
      setTotal(total + wallet.totalTokenValue);
    });
  }, []);
  const dataDoughnut = {
    labels: ["JavaScript", "Python", "Ruby"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(133, 105, 241)",
          "rgb(164, 101, 241)",
          "rgb(101, 143, 241)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const configDoughnut = {
    type: "doughnut",
    data: dataDoughnut,
    options: {},
  };

  return (
    <aside className="flex  h-full" aria-label="Rightbar">
      <div className="py-4 w-72 overflow-y-auto h-screen bg-[#FFFFFF] dark:bg-[#FFFFFF]">
        <div className="p-5 mb-5">
          <h2 className="mb-3 text-[#687780] text-sm">Assets Balance</h2>

          <p className="font-bold">{total}</p>
          <p className="font-light text-sm">
            <span className="font-normal">{nativetotal}</span>
          </p>
        </div>
        <div className="text-black bg-[#F6F8FD]">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
            <canvas className="p-5" id="chartDoughnut"></canvas>
          </div>
        </div>
        {wallets &&
          wallets.map((wallet) => {
            if (wallet.monitorState)
              if (wallet.tableState && wallet.state)
                return (
                  <div className="text-black px-4 bg-[#F6F8FD] w-full flex flex-col mb-3 mt-3">
                    <div className="flex">
                      <h1>{wallet.symbol}</h1>
                      <h6 className="text-sm font-bold ml-2 self-center">
                        {wallet.nativeValue}
                      </h6>
                    </div>
                    <div className="mt-2">
                      <h6 className="text-sm">{wallet.totalTokenValue}</h6>
                    </div>
                  </div>
                );
          })}
      </div>
    </aside>
  );
};
export default Rightbar;
