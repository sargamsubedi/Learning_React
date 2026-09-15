
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, logIn } from '../store/userSlice';

export default function User() {
const dispatch = useDispatch();
    const {name,isLoggedIn,loading,error} = useSelector(state=>state.user)


    if(loading) return <p>the data is loading...</p>

    if(error) return <p>{error} </p>

    //if everything is right
  return (
    <div>
      <p>Welcome {name} </p>
      <p> you status is : {isLoggedIn?"Logged In" : "Not Logged In"} </p>

      <button 
       disabled={isLoggedIn}
        onClick={()=>dispatch(logIn("Sargam"))}
       >Login </button>


       <button onClick={()=>dispatch(fetchUser(1))}> fetch User</button>
    </div>
  )
}
