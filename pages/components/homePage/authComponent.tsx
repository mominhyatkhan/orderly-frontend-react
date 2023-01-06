import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Login from "./authComponents/Login"
import Signup from "./authComponents/Signup"

function AuthenticationComponent(){
    const IsSigned=useSelector(( (state: RootState) => state.signupState.signUpState.isSigned))
    return (
        <>
        {IsSigned?<Signup/>:<Login/>}
        </>
    )
}
export default AuthenticationComponent