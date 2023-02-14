import AllTokenCalender from "../SubComponents/calenderTabComponents/calenderForAllTokens";

const Calender = () => {
  return (
    <div className="m-16 w-5/6 ">
      <div className="flex w-full">
        <div>
          <h1 className="text-3xl">Calender</h1>
        </div>
        <div className="flex w-full justify-end">
          <div className="">
            <button className="w-11 h-8 bg-gray-200 rounded focus:bg-white">
              All
            </button>
            <button className="w-44 h-8 bg-gray-200 rounded focus:bg-white">
              UpcommingTokens
            </button>
            <button className="w-48 h-8 bg-gray-200 rounded focus:bg-white">
              Ongoing Tokens
            </button>
          </div>
        </div>
      </div>
    <AllTokenCalender/>
    </div>
  );
};
export default Calender;
