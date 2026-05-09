import { useState } from "react"
import useTodo from "../store/useTodo";

function AddTodo()
{
    const addTodo = useTodo((state)=>state.addTodo)

    const [newTodo, setNewTodo]= useState("");
    return(
        <div>       
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
            <button 
            onClick={()=>{
                addTodo(newTodo);
                setNewTodo("");
            }}>Add</button>
        </div>
    )
}

export default AddTodo;