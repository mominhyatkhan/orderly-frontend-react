import Portfolio from "./assets/portfolio";
import Rightbar from "./assets/rightbar";
import SideBar from "./assets/sidebar";

function Dashboard() {
  return (
    <main className="flex bg-[#F6F8FD]">
     <div className="h-full">
      <SideBar/>
      </div>
      <div className="w-full">
      <Portfolio/>
      </div>
      <div className="h-full">
      <Rightbar/>
      </div>
    </main>
  );
}
export default Dashboard;
