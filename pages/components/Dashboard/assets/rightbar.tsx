import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Rightbar = () => {
  const email = useSelector(
    (state: RootState) => state.signupState.signUpState.email
  );
  const total = useSelector(
    (state: RootState) => state.tokens[0].totalTokenValue
  );
  const totaleth = useSelector(
    (state: RootState) => state.tokens[0].nativeValue
  );
  return (
    <aside className="felx w-80 " aria-label="Rightbar">
      <div className="py-4 overflow-y-auto h-screen bg-[#FFFFFF] dark:bg-[#FFFFFF]">
        <div className="p-5 mb-5">
          <h2 className="mb-3 text-[#687780] text-sm">Assets Balance</h2>
          <p className="font-bold">{total}</p>
          <p className="font-light text-sm">{totaleth}<span className="font-normal">  eth</span></p>
        </div>
        <div className="text-black px-4 bg-[#F6F8FD]">A pie chart</div>
      </div>
    </aside>
  );
};
export default Rightbar;
