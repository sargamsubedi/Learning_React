
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../store/userSlice';

export default function User() {
const dispatch = useDispatch();
    const userName = useSelector(state=>state.user.name)
    const isLoggedIn = useSelector(state=>state.user.isLoggedIn)

  return (
    <div>
      <p>Welcome {userName} </p>
      <p> you status is : {isLoggedIn?"Logged In" : "Not Logged In"} </p>

      <button 
       disabled={isLoggedIn}
        onClick={()=>dispatch(logIn("Sargam"))}
       >Login </button>
    </div>
  )
}
