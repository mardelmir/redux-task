import { configureStore } from '@reduxjs/toolkit'
import { todoReducer, textReducer } from './todosSlice.js'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        text: textReducer
    }
})