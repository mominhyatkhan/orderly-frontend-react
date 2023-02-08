const AllTokenCalender=()=>
{
    return ( 
        <div className="flex flex-row space-x-10 w-full">
        <div className="mt-20 w-full  bg-white">
    <div className="flex justify-start">
      <table className="border-separate w-full">
        <thead>
          <tr>
            <th className="font-light  text-gray-500">Upcoming Token</th>
            <th className="font-light  text-gray-500">Stage</th>
            <th className="font-light  text-gray-500">Start Date</th>
            <th className="font-light  text-gray-500">Goal</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
    <div className="w-full mt-20 bg-white">
    <div className="flex justify-end mr-20">
      <table className="border-separate w-full">
        <thead>
          <tr>
            <th className="font-light  text-gray-500">Upcoming Token</th>
            <th className="font-light  text-gray-500">Stage</th>
            <th className="font-light  text-gray-500">Start Date</th>
            <th className="font-light  text-gray-500">Goal</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
  </div>
      )
}
export default AllTokenCalender