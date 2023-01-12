import Monitoring from "./assets/monitoring";
import Portfolio from "./assets/portfolio";
import Rightbar from "./assets/rightbar";
import SideBar from "./assets/sidebar";

function Dashboard() {
  return (
    <div className="flex bg-[#F6F8FD] h-fit">
     <div className=" ">
      <SideBar/>
      </div>
      <div className="w-full">
      <Portfolio/>
      </div>
     {/*  <div className="h-full">
      <Rightbar/>
      </div> */}
    </div>
  );
}
export default Dashboard;
