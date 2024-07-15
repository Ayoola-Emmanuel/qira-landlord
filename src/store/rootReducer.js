import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/auth'
// import eventReducer from './events/events'

export const rootReducer = combineReducers({
  auth: authReducer,
  // event: eventReducer
})
