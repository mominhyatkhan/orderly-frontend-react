import { BlobOptions } from "buffer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getGroupList } from "../../../../pages/api/BackendApi";
import {
  addGroupContact,
  addPersonalContact,
} from "../../../../pages/slices/contactSlice";
import { RootState } from "../../../../pages/store";
import AddContactsInGroup from "../SubComponents/contactTabComponents/addContacts";
import ContactModal from "../SubComponents/contactTabComponents/contactModal";
import CreateGroup from "../SubComponents/contactTabComponents/createGroup";

const Contacts = () => {
  const [modal, setModal] = useState<boolean>(false);
  const personalContact = useSelector(
    (state: RootState) => state.contact.personal
  );
  const Group = useSelector((state: RootState) => state.contact.groups);
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.isLogin.user.email);
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [isContact, setIsContact] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  let group;
  async function fetchData() {
    let data = await getContacts(email);
    console.log(data);
    dispatch(addPersonalContact({ data }));
    group = await getGroupList(email);
    dispatch(addGroupContact({ group }));
    console.log("im personal", personalContact, "im Group", Group);
  }
  useEffect(() => {
    fetchData();
  }, [reload]);

  return (
    <div className="p-28 w-full">
      <div className="flex">
        <div>
          <h1 className="text-3xl">Contacts</h1>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="bg-[#6b8068] w-44 h-10 hover:bg-emerald-700 text-white rounded"
            onClick={() => setModal(true)}
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
                <tr className="border-b">
                  <th className="font-light text-gray-500">NAME</th>
                  <th className="font-light  text-gray-500">ADDRESS</th>
                  <th className="font-light  text-gray-500">TOKEN</th>
                  <th className="font-light  text-gray-500">ACTION</th>
                </tr>
              </thead>
              <tbody className="">
                {personalContact.map((personal, index) => {
                  return (
                    <tr
                      key={personal.address + index}
                      className="h-auto w-auto m-10 border-b"
                    >
                      <td className="text-center">{personal.name}</td>
                      <td className="flex justify-center">
                        {personal.address}
                      </td>
                      <td></td>
                      <td className="flex justify-center">
                        <svg
                          className="w-4 h-4 text-gray-300"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          xmlSpace="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Icon" className="">
                            <path d="M4.251,9.031c-0,0 0.194,4.655 0.34,8.167c0.106,2.544 2.199,4.552 4.746,4.552c1.68,0 3.646,0 5.326,0c2.547,0 4.64,-2.008 4.746,-4.552c0.146,-3.512 0.34,-8.167 0.34,-8.167c0.018,-0.413 -0.304,-0.763 -0.718,-0.78c-0.413,-0.018 -0.763,0.304 -0.78,0.718c-0,-0 -0.194,4.655 -0.341,8.166c-0.072,1.741 -1.505,3.115 -3.247,3.115c-1.68,0 -3.646,0 -5.326,-0c-1.742,0 -3.175,-1.374 -3.247,-3.115c-0.147,-3.511 -0.341,-8.166 -0.341,-8.166c-0.017,-0.414 -0.367,-0.736 -0.78,-0.718c-0.414,0.017 -0.736,0.367 -0.718,0.78Z" />
                            <path d="M7.459,5.25l0.374,-1.12c0.374,-1.123 1.425,-1.88 2.609,-1.88c0.944,0 2.172,0 3.116,0c1.184,-0 2.235,0.757 2.609,1.88l0.374,1.12l3.459,0c0.414,-0 0.75,0.336 0.75,0.75c0,0.414 -0.336,0.75 -0.75,0.75l-16,0c-0.414,-0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.336,-0.75 0.75,-0.75l3.459,0Zm7.5,0l-0.215,-0.645c-0.17,-0.511 -0.647,-0.855 -1.186,-0.855c-0.944,-0 -2.172,-0 -3.116,0c-0.539,-0 -1.016,0.344 -1.186,0.855l-0.215,0.645l5.918,0Z" />
                          </g>
                        </svg>
                      </td>
                    </tr>
                  );
                })}

                {Group.map((group: any) => {
                  return (
                    <>
                      <tr>{group.name}</tr>
                      <tr>{group.contactId}</tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-5 flex justify-center pl-5 pb-5 ">
          {isGroup && (
            <CreateGroup
              setReload={setReload}
              reload={reload}
              setIsGroup={setIsGroup}
            />
          )}
          {isContact && (
            <AddContactsInGroup
              contacts={personalContact}
              groups={Group}
              setIsContact={setIsContact}
              setReload={setReload}
              reload={reload}
            />
          )}
        </div>
        <div className=" font-medium text-[#6B8068] bg-white space-x-10 pb-2">
          <a
            className="cursor-pointer ml-10"
            onClick={() => {
              setIsContact(!isContact), setIsGroup(false);
            }}
          >
            + Add Address
          </a>
          <a
            className="cursor-pointer"
            onClick={() => {
              setIsGroup(!isGroup), setIsContact(false);
            }}
          >
            + Add Group
          </a>
        </div>
      </div>
      {modal && (
        <div className="overlay-div absolute top-0 right-0 z-10 w-full bg-opacity-10 bg-gray-500 flex justify-end h-full">
          <div className="flex h-full overflow-auto max-w-[560px] bg-white justify-end">
            <ContactModal isOpen={setModal} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Contacts;
