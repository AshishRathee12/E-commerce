import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from '../../Components/Cart/Slice'

export const store = configureStore({
    reducer:ItemsReducer
})