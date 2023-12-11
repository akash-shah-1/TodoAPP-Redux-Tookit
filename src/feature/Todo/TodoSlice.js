import { createSlice, nanoid } from "@reduxjs/toolkit";






const initialState ={
    todo :[]
}

export const todoSlice = createSlice({
    name : "Todo",
    initialState,
    reducers : {
        
        // --------Add Todo -----------
        addTodo : (state, action)=>{
              const newtodo = {
                id : nanoid(),
                task : action.payload
              } 
              return {
                ...state,
                todo: [...state.todo, newtodo], 
              };
        },

        //---------Remove Todo---------
        deleteTodo : (state,action)=>{
          const UpdatedTodo = state.todo.filter((Item)=>{
            return Item.id !== action.payload
          }) 
          return {
            ...state,
            todo: UpdatedTodo
          }
        },

        //-------Edit Todo -----------
        editTodo : (state,action)=>{
          console.log(action , state)
          const {id, data} = action.payload;
          const updatedTodo = state.todo.map((item)=>{
             item.id === id ? {...item, task : data} : item
          })
          return {
            ...state,
            todo : updatedTodo
          }
        }

    }
})


export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer