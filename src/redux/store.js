import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './features/basketslice'

export const store = configureStore({
    reducer: {
         basket:basketReducer
    }
})