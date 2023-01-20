const Contacts = () => {
  return (
    <div className="m-20 w-5/6">
      <div className="flex">
        <div>
          <h1 className="text-3xl">Contacts</h1>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="bg-[#6b8068] w-44 h-10 hover:bg-emerald-700 text-white rounded"
          >
            Add New Contacts
          </button>
        </div>
      </div>
      <div className="w-full mt-20 bg-white">
        <div className="flex  mr-20">
          <table className="border-separate w-4/6">
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
        <div className="mt-20 text-sm ml-16 text-[#6B8068] space-x-6">
          <a>+ Add Address</a>
          <a>+ Add Group</a>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
