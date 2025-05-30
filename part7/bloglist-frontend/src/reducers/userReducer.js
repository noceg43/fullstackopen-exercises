import { createSlice } from '@reduxjs/toolkit'
import usersService from '../services/users'

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
  }
})

export default usersSlice.reducer
export const { setUsers } = usersSlice.actions

export const initializeUsers = () => {
  return async dispatch => {
    const content = await usersService.getAll()
    dispatch(setUsers(content))
  }
}


