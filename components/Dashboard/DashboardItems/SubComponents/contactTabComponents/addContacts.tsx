import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import {
  addContactInGroup,
  addGroupList,
} from "../../../../../pages/api/BackendApi";
import { RootState } from "../../../../../pages/store";
type Props = {
  contacts: any[];
  groups: any[];
  setIsContact: Dispatch<SetStateAction<boolean>>;
  setReload:Dispatch<SetStateAction<boolean>>;
  reload:boolean;
};
const AddContactsInGroup: React.FC<Props> = ({
  contacts,
  groups,
  setIsContact,
  setReload,
  reload
}) => {
  const [name, setName] = useState<string>("");
  const email = useSelector((state: RootState) => state.isLogin.user.email);
  const [contactAddress, setContactAddress] = useState<string>("");
  const [contactError, setContactError] = useState<boolean>(false);
  const handleGroup = async () => {
    try {
      let response = await addContactInGroup(name, email, contactAddress);
      console.log("im response",response)
      setIsContact(false);
      setReload(!reload)
    } catch (error) {
      setContactError(true);
    }
    console.log(email, name, contactAddress);
  };
  return (
    <div className="flex flex-row justify-center space-x-2 shadow">
      <div className="flex">
        <select
          onChange={(e) => setContactAddress(e.target.value)}
          className="text-gray-600 "
        >
          <option>select Contact</option>
          {contacts.map((contact) => {
            return (
              <option key={contact._id} value={contact.address} className="text-gray-600">
                <h1 className="text-gray-600">{contact.name}</h1>
                <h2 className="text-xs text-gray-500">{contact.address}</h2>
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex">
        <select
          onChange={(e) => setName(e.currentTarget.value)}
          className="flex text-gray-600"
        >
          {groups.map((group) => {
            return (
              <option>
                <div className="flex flex-col">
                  <h1 className="text-gray-600">{group.name}</h1>
                </div>
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col">
        <button
          type="button"
          className="bg-[#6b8068] w-40 h-10  hover:bg-emerald-700 text-white rounded"
          onClick={handleGroup}
        >
          Add contact
        </button>
        {contactError && <label className="text-red-300">Data Not Added</label>}
      </div>
    </div>
  );
};
export default AddContactsInGroup;
