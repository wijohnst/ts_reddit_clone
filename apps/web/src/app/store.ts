import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from '../features/application/applicationSlice'
import { createReduxEnhancer } from 'addon-redux'

export const store = configureStore({
  reducer: {
    application: applicationReducer,
  },
  enhancers: [createReduxEnhancer()],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
