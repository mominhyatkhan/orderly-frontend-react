import { useState } from "react";
import ContactModal from "../SubComponents/contactTabComponents/contactModal";

const Contacts = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="p-28 w-full h-screen">
      <div className="flex">
        <div>
          <h1 className="text-3xl">Contacts</h1>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="bg-[#6b8068] w-44 h-10 hover:bg-emerald-700 text-white rounded"
            onClick={()=>setModal(true)}
          >
            Add New Contacts
          </button>
        </div>
      </div>
      <div className="w-full overflow mt-10 bg-white">
        <div className="w-full">
          <div className="flex pt-3">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="font-light  text-gray-500">NAME</th>
                  <th className="font-light  text-gray-500">ADDRESS</th>
                  <th className="font-light  text-gray-500">TOKEN</th>
                  <th className="font-light  text-gray-500">ACTION</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div className="mt-20 font-medium text-[#6B8068] bg-white space-x-10 pb-2">
          <a className="cursor-pointer ml-10">+ Add Address</a>
          <a className="cursor-pointer">+ Add Group</a>
        </div>
      </div>
      {modal&&<div className="overlay-div absolute top-0 right-0 z-10 w-full bg-opacity-10 bg-gray-500 flex justify-end h-full">
          <div className="flex h-full overflow-auto max-w-[560px] bg-white justify-end">
            <ContactModal isOpen={setModal} />
          </div>
        </div>
}
    </div>
  );
};
export default Contacts;
