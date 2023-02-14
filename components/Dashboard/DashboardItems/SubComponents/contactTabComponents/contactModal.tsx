import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactInGroup } from "../../../../../pages/slices/contactSlice";
import { RootState } from "../../../../../pages/store";

type props = {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ContactModal: React.FC<props> = ({ isOpen }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [group, setGroup] = useState("");
  const dispatch = useDispatch();
  const groups = useSelector((state: RootState) => state.contact.groups);
  const handleContact = () => {
    dispatch(addContactInGroup({ group: group, name: name, address: address }));
  };

  return (
    <div className="bg-white w-full h-max rounded-lg dark:bg-white">
      <div className=" flex bg-white rounded-lg p-10">
        <h1 className=" text-2xl self-center">Add New Contact</h1>
        <button
          type="button"
          onClick={() => isOpen(false)}
          className=" top-3 right-2.5 text-[#6B8068] bg-transparent hover:bg-white-200 hover:text-black-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-200 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="h-5/6 space-y-8 m-10">
        <input
          type="text"
          placeholder="Name"
          className="bg-gray-100 w-full h-14 rounded-md "
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="bg-gray-100 w-full h-14 rounded"
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          className="w-full h-14 bg-gray-100 font-light pl-2 text-gray-500"
          onChange={(e) => setGroup(e.target.value)}
        >
          <option>Select Group</option>
          {groups.map((group) => {
            return <option>{group.name}</option>;
          })}
        </select>
      </div>
      <div className="flex mt-20 justify-end self-end w-full">
        <div className="flex  space-x-6 mb-7 mr-8">
          <button
            type="button"
            className="bg-[#687780] w-40 h-10  hover:bg-gray-600 text-white rounded"
            onClick={() => isOpen(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-[#6b8068] w-40 h-10  hover:bg-emerald-700 text-white rounded"
            onClick={handleContact}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactModal;
