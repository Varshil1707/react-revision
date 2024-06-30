import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), text: 'Hello World' }]
}

export const toSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter(todo => todo.id != action.payload) 
         }
    }
})

export const { addTodo, removeTodo } = toSlice.actions

export default toSlice.reducer