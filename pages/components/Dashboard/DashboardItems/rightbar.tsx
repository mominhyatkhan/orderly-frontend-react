import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";

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
        <div className="text-black px-4 bg-[#F6F8FD]">A pie chart</div>
        {wallets &&
          wallets.map((wallet) => {
            if (wallet.tableState)
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
