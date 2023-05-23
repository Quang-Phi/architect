import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../redux/reducers/dataSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})