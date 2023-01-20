import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Rightbar from "./DashboardItems/rightbar";
import SideBar from "./DashboardItems/sidebar";
import Analyzer from "./DashboardItems/DashboardPages/analyzer";
import Calender from "./DashboardItems/DashboardPages/Calendar";
import Contacts from "./DashboardItems/DashboardPages/contacts";
import Distributor from "./DashboardItems/DashboardPages/distributor";
import InvestmentsManager from "./DashboardItems/DashboardPages/investmentsManager";
import Monitoring from "./DashboardItems/DashboardPages/monitoring";
import OTC from "./DashboardItems/DashboardPages/OTC";
import Portfolio from "./DashboardItems/DashboardPages/portfolio";

function Dashboard() {
  const dashboard = useSelector(
    (state: RootState) => state.dashboard.dashboardState
  );
  return (
    <div className="flex bg-[#F6F8FD] h-fit">
      <div className=" ">
        <SideBar />
      </div>
      {(() => {
        switch (dashboard) {
          case 0:
            return (
              <>
                <div className="w-full">
                  <Portfolio />
                </div>
                <div className="h-full">
                  <Rightbar />
                </div>{" "}
              </>
            );
          case 1:
            return (
              <div className="w-full">
                <Monitoring />
              </div>
            );
          case 2:
            return (
              <div className="w-full">
                <Analyzer />
              </div>
            );

          case 3:
            return (
              <div className="w-full">
                <Distributor />
              </div>
            );
          case 4:
            return (
              <div className="w-full">
                <InvestmentsManager />
              </div>
            );
          case 5:
            return (
              <div className="w-full">
                <Calender />
              </div>
            );
          case 6:
            return (
              <div className="w-full">
                <Contacts />
              </div>
            );
          case 7:
            return (
              <div className="w-full">
                {" "}
                <OTC />
              </div>
            );
        }
      })()}
    </div>
  );
}
export default Dashboard;
