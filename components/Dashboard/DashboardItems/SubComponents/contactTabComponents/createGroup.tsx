import { Dispatch, SetStateAction, useState } from "react"
import { useSelector } from "react-redux"
import { addGroupList } from "../../../../../pages/api/BackendApi"
import { RootState } from "../../../../../pages/store"
type Props={
  setReload:Dispatch<SetStateAction<boolean>>;
  setIsGroup:Dispatch<SetStateAction<boolean>>;
  reload:boolean;

}
const CreateGroup: React.FC<Props> =({setReload,setIsGroup,reload})=>{
    const [name,setName]=useState<string>('')
    const email=useSelector((state:RootState)=>state.isLogin.user.email)
    const handleGroup=async ()=>{
      try{
      let response=await  addGroupList(name,email);
      setIsGroup(false)
        setReload(!reload)
    }  
    catch(error)
    {
      console.log(error)
    }  
    console.log(email,name)
    }
return (
    <div className="flex justify-center space-x-2 ">
        <div>
        <input
          type="text"
          placeholder="Enter Group Name..."
          className="bg-gray-100 w-full h-10 rounded-md "
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
        <button
            type="button"
            className="bg-[#6b8068] w-40 h-10  hover:bg-emerald-700 text-white rounded"
            onClick={handleGroup}
          >
            Create Group
          </button>
        </div>
    </div>
)
}
export default CreateGroup