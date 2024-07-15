import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootReducer'
import { LOCAL_STORAGE_KEY } from '../api'

const persistConfig = {
  key: LOCAL_STORAGE_KEY,
  storage,
  version: 1,
  // Optionally, you can whitelist specific reducers to be persisted
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
