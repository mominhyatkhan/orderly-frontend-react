import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../pages/store";

import PortfolioMonitoring from "../../../portfolioMonitor/portfolioSetup";
import MonitoringWallet from "../SubComponents/monitoringTabComponents/monitoringWallet";
import NoWalletAdded from "../SubComponents/monitoringTabComponents/noWalletAdded";

const Monitoring = () => {
  const [isMonitor, setMonitor] = useState<boolean>(false);
  const wallet = useSelector((state: RootState) => state.tokens.wallet);
  return (
    <div>
      {isMonitor ? (
        <div className="flex flex-col space-y-[500px]">
          <PortfolioMonitoring />
          <div className="flex justify-end m-14">
            <button
              className="bg-[#6B8068] w-28 h-12 text-white rounded"
              onClick={() => setMonitor(false)}
            >
              Back
            </button>
          </div>
        </div>
      ) : wallet.length ? (
        <MonitoringWallet setMonitor={setMonitor} isMonitor={isMonitor} />
      ) : (
        <NoWalletAdded setMonitor={setMonitor} isMonitor={isMonitor} />
      )}
    </div>
  );
};
export default Monitoring;
