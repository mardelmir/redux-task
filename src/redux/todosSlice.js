import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'; // Universally Unique Identifier, para garantizar un id único para cada tarea

export const todoSlice = createSlice({
    name: 'todo',
    initialState: { todo: [{ id: uuidv4(), text: 'Nueva tarea', completed: false }] },
    reducers: {
        addTask: (state, action) => {
            return {
                ...state,
                todo: [...state.todo, {
                    id: uuidv4(),
                    text: action.payload,
                    completed: false
                }]
            }
        },
        deleteTask: (state, action) => {
            return {
                ...state,
                todo: state.todo.filter(task => task.id !== action.payload)
            }
        },
        toggleComplete: (state, action) => {
            return {
                ...state,
                todo: state.todo.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
            }
        }
    }
})

export const textSlice = createSlice({
    name: 'text',
    initialState: { value: '' },
    reducers: {
        setTextValue: (state, action) => { return { ...state, value: action.payload } },
        clearTextValue: (state) => { return { ...state, value: '' } }
    }
})

export const { addTask, deleteTask, toggleComplete } = todoSlice.actions
export const { setTextValue, clearTextValue } = textSlice.actions

export const { reducer: todoReducer } = todoSlice
export const { reducer: textReducer } = textSlice