
import { create } from "zustand";
import { persist } from "zustand/middleware";

//persist stores the states in localstorage and on-refresh the data isnt lost 
// its structure persist(storelogic, config object ) more about config object is below..
const useTodo = create(persist((set)=>({
    
    id:0,
    todos:[],
    addTodo : (todo)=>{
        set((state)=>({
            //TODO: Insert the todo in todos and increase the id count
           todos: [...state.todos,{id:state.id, text:todo , status: false}],
           id: state.id + 1
        }))
    },
    toggleStatus: (id)=>{
        set((state)=>{
        
            const changedTodo = state.todos.map((todo)=>{
                if(todo.id===id){
                    return {...todo,status:!todo.status}
                }
                return todo;
        })
            
            return{
                todos: changedTodo
        }})
    },
    deleteTodo: (id)=>{
        set((state)=>{
            const changedTodo = state.todos.filter((todo)=>todo.id!==id)
            
            return{
                todos: changedTodo
            }
        })
    }
}),
//this is config 
{
    name:"todo-lists"  // defines localstorage name (check on inspect-application-localstorage-localhost)
}
))

export default useTodo;