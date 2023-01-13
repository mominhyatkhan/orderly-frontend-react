import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Analyzer from "./assets/smallComponents/sidebarComponents/analyzer";
import Calender from "./assets/smallComponents/sidebarComponents/Calendar";
import Contacts from "./assets/smallComponents/sidebarComponents/contacts";
import Distributor from "./assets/smallComponents/sidebarComponents/distributor";
import InvestmentsManager from "./assets/smallComponents/sidebarComponents/investmentsManager";
import Monitoring from "./assets/smallComponents/sidebarComponents/monitoring";
import OTC from "./assets/smallComponents/sidebarComponents/OTC";
import Portfolio from "./assets/smallComponents/sidebarComponents/portfolio";
import Rightbar from "./assets/rightbar";
import SideBar from "./assets/sidebar";

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
                <Monitoring />;
              </div>
            );
          case 2:
            return (
              <div className="w-full">
                <Analyzer />;
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
                <InvestmentsManager />;
              </div>
            );
          case 5:
            return (
              <div className="w-full">
                <Calender />;
              </div>
            );
          case 6:
            return (
              <div className="w-full">
                <Contacts />;
              </div>
            );
          case 7:
            return (
              <div className="w-full">
                {" "}
                <OTC />;
              </div>
            );
        }
      })()}
    </div>
  );
}
export default Dashboard;
