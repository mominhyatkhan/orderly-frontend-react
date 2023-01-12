import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Rightbar = () => {
  const email = useSelector(
    (state: RootState) => state.signupState.signUpState.email
  );
  return (
    <aside className="felx w-80 " aria-label="Rightbar">
      <div className="py-4 overflow-y-auto h-screen bg-[#FFFFFF] dark:bg-[#FFFFFF]">
        <h2 className="p-4 text-[#687780] text-sm">Assets Balance</h2>
        <div className="text-black px-4 bg-[#F6F8FD]">A pie chart</div>
      </div>
    </aside>
  );
};
export default Rightbar;
