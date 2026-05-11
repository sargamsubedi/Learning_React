
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
    name:"todo-lists",  // defines localstorage name (check on inspect-application-localstorage-localhost)

    // storage: sessionStorage, // by default its localStorage , sessionStorage erases on tab close so used to store temporary data

    // partialize: (state)=>({ //persist only todos not id by default all data is persisted
    //     todos: state.todos
    // }),

    // onRehydrateStorage: ()=>( // runs when data is restored into store from storage
    //     console.log("data restored")
    // ),

    // version: 1, // we change this when our store schema changes (i.e now it has only todo and id in future it might have tags in it so the persisted data doesnt match the dataStructure of our store in that case we change version whenever there is schema(store dataStructure) change )
}
))

export default useTodo;