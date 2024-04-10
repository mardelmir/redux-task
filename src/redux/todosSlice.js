import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'; // Universally Unique Identifier, para garantizar un id único para cada tarea

const initialState = {
    todo: [
        {
            id: uuidv4(),
            text: 'Nueva tarea',
            completed: false
        }
    ]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.todo = [...state.todo, {
                id: uuidv4(),
                text: action.payload,
                completed: false
            }]
        },
        deleteTask: (state, action) => {
            state.todo = state.todo.filter(task => task.id !== action.payload)
        }
    }
})

export const textSlice = createSlice({
    name: 'text',
    initialState: { value: '' },
    reducers: {
        setTextValue: (state, action) => {
            state.value = action.payload
        },
        clearTextValue: (state) => {
            state.value = ''
        }
    }
})

export const { addTask, deleteTask } = todoSlice.actions
export const { setTextValue, clearTextValue } = textSlice.actions

export const { reducer: todoReducer } = todoSlice
export const { reducer: textReducer } = textSlice
