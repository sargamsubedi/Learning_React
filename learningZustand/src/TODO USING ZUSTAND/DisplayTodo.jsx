import useTodo from "../store/useTodo";
import AddTodo from "./AddTodo";

function DisplayTodo() {
    const todos = useTodo((state) => state.todos);

    return (
        <>
            <AddTodo />
        {

            
            todos.length?<div className="todolists">
                {

                    todos.length && todos.map((todo) => (
                        <div key={todo.id} 
                        // onClick={()=>toggleStatus(todo.id)}
                        >
                            {todo.id}: 
                            {`  ${todo.text}`}
                            <input type="checkbox" value={todo.status} />

                        </div>
                    ))
                }
            </div>: <p>No tasks added</p>
        }
        </>
    )
}

export default DisplayTodo;