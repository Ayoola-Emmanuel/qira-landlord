import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import client from '../../api'

const initialState = {
  formInput: {},
  currentUser: null,
  isLoading: false,
  error: null,
  isAuthenticated: false
  // token: null
}

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await client.post(
        `194.163.188.47:8090/landlord/register`,
        userData
      )
      return response.data
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

// export const { setFormInput, clearFormInput } = authSlice.actions

export default authSlice.reducer
