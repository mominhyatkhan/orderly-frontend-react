import { useSelector } from "react-redux";
import InvestmentsManager from "../components/Dashboard/DashboardItems/DashboardPages/investmentsManager";
import Analyzer from "../components/Dashboard/DashboardItems/DashboardPages/analyzer";
import Calender from "../components/Dashboard/DashboardItems/DashboardPages/Calendar";
import Contacts from "../components/Dashboard/DashboardItems/DashboardPages/contacts";
import Distributor from "../components/Dashboard/DashboardItems/DashboardPages/distributor";
import Monitoring from "../components/Dashboard/DashboardItems/DashboardPages/monitoring";
import OTC from "../components/Dashboard/DashboardItems/DashboardPages/OTC";
import Portfolio from "../components/Dashboard/DashboardItems/DashboardPages/portfolio";
import Rightbar from "../components/Dashboard/DashboardItems/rightbar";
import SideBar from "../components/Dashboard/DashboardItems/sidebar";
import { RootState } from "./store";

function Dashboard() {
  const dashboard = useSelector(
    (state: RootState) => state.dashboard.dashboardState
  );
  return (
    <div className="flex bg-[#F6F8FD] ">
      <div className="">
        <SideBar />
      </div>
      <div className="w-full">
        {(() => {
          switch (dashboard) {
            case 0:
              return (
                <div className="flex flex-row">
                  <div className="w-full">
                    <Portfolio />
                  </div>
                  <div className="h-full">
                    <Rightbar />
                  </div>
                </div>
              );
            case 1:
              return (
                <div className="w-full h-screen">
                  <Monitoring />
                </div>
              );
            case 2:
              return (
                <div className="w-full h-screen">
                  <Analyzer />
                </div>
              );

            case 3:
              return (
                <div className="w-full h-screen">
                  <Distributor />
                </div>
              );
            case 4:
              return (
                <div className="w-full h-screen">
                  <InvestmentsManager />
                </div>
              );
            case 5:
              return (
                <div className="w-full h-screen">
                  <Calender />
                </div>
              );
            case 6:
              return (
                <div className="w-full h-screen">
                  <Contacts />
                </div>
              );
            case 7:
              return (
                <div className="w-full h-screen ">
                  {" "}
                  <OTC />
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}
export default Dashboard;
