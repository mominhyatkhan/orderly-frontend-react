import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";

const Rightbar = () => {
  const email = useSelector(
    (state: RootState) => state.signupState.signUpState.email
  );
/*   const ethToken = useSelector((state: RootState) => state.tokens[0]);
  const BncToken = useSelector((state: RootState) => state.tokens[1]);
  const dispatch=useDispatch()
  const total = ethToken.totalTokenValue + BncToken.totalTokenValue;
  const nativetotal = ethToken.nativeValue + BncToken.nativeValue; */
  return (
    <aside className="felx w-80 " aria-label="Rightbar">
      <div className="py-4 overflow-y-auto h-screen bg-[#FFFFFF] dark:bg-[#FFFFFF]">
        <div className="p-5 mb-5">
          <h2 className="mb-3 text-[#687780] text-sm">Assets Balance</h2>
          <p className="font-bold"></p>
          <p className="font-light text-sm">
           
            <span className="font-normal"></span>
          </p>
        </div>
        <div className="text-black px-4 bg-[#F6F8FD]">A pie chart</div>
       {/*  {ethToken.state && (
          <div onClick={()=>{dispatch(setBscTableState(false)),dispatch(setEtherTableState(true))}} className="text-black px-4 bg-[#F6F8FD] w-full flex flex-row mb-3 mt-3">
            <div className="flex flex-col">
              <h1>{ethToken.name}</h1>
              <h6 className="text-sm">{ethToken.nativeValue}</h6>
            </div>
            <div className="self-center">
              <h6 className="text-sm">{ethToken.totalTokenValue}</h6>
            </div>
          </div>
        )}
        {BncToken.state && (
          <div onClick={()=>{dispatch(setBscTableState(true)),dispatch(setEtherTableState(false))}} className="text-black px-4 bg-[#F6F8FD] w-full flex flex-row mb-3 mt-3">
            <div className="flex flex-col max-w-4">
              <h1>{BncToken.name}</h1>
              <h6 className="text-sm">{BncToken.nativeValue}</h6>
            </div>
            <div className="self-center">
              <h6 className="text-sm">{BncToken.totalTokenValue}</h6>
            </div>
          </div>
        )} */}
      </div>
    </aside>
  );
};
export default Rightbar;
