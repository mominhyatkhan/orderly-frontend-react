import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import PortfolioMonitoring from "../../../portfolioMonitor/portfolioSetup";
import MonitoringWallet from "../SubComponents/monitoringTabComponents/monitoringWallet";
import NoWalletAdded from "../SubComponents/monitoringTabComponents/noWalletAdded";

const Monitoring = () => {
  const [isMonitor, setMonitor] = useState<boolean>(false);
  const wallet=useSelector((state:RootState)=>state.tokens.wallet)
  return (
    <>
      {isMonitor ? (
        <PortfolioMonitoring />
      ) : wallet.length ? (
        <MonitoringWallet setMonitor={setMonitor} isMonitor={isMonitor} />
      ) : (
        <NoWalletAdded setMonitor={setMonitor} isMonitor={isMonitor} />
      )}
    </>
  );
};
export default Monitoring;
