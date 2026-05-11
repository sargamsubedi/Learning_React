import { useActionState } from "react";
import useTodo from "../store/useTodo";
import AddTodo from "./AddTodo";

function DisplayTodo() {
    const todos = useTodo((state) => state.todos);
    const toggleStatus= useTodo((state)=>state.toggleStatus);
    const deleteTodo= useTodo((state)=>state.deleteTodo);
    console.log(todos);
    return (
        <>
            <AddTodo />
        {

            
            todos.length?<div className="todolists">
                {
                    
                    todos.length && todos.map((todo) => (
                       
                        
                        <div key={todo.id} 
                            onClick={()=>toggleStatus(todo.id)}
                        >
                            <p>
                                {todo.id}:{`  ${todo.text}`}
                            </p>
                            <input type="checkbox" checked={todo.status} readOnly/>
                            {/* e.stopPropagation() this is to prevent event bubbling 
                            i.e when we click on delete the div is also clicked and it cause to change its status */}
                            <button onClick={(e)=>{
                                e.stopPropagation();
                                deleteTodo(todo.id)}}>Delete</button>

                        </div>
                    ))
                }
            </div>: <p>No tasks added</p>
        }
        </>
    )
}

export default DisplayTodo;