import { ChangeEvent, useState } from "react";

const ConstructSchedule = () => {
  return (
    <div className="">
      <div className="flex flex-col space-x-4 text-[#6B8068] font-medium">
        <div className=""></div>
        <div className="space-x-6 cursor-pointer mt-10 mb-3">
          <a>+ Add Lockup</a>
          <a>+ Add Distribution</a>
          <a>+ Add TGE</a>
        </div>
      </div>
    </div>
  );
};
export default ConstructSchedule;
