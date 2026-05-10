
// pending add togglestatus logic
import { create } from "zustand";

const useTodo = create((set)=>({
    
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
            const changedTodo = state.todos.filter((todo)=>todo.id!=id)
            
            return{
                todos: changedTodo
            }
        })
    }
}))

export default useTodo;