import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  show: false
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      const message = action.payload
      return {
        message: message,
        show: true
      }
    },
    clearNotification() {
      return {
        message: '',
        show: false
      }
    }
  }
})

export default notificationSlice.reducer
export const { setNotification, clearNotification } = notificationSlice.actions

export const setNotificationWithTimeout = (message, timeout) => {
  return async (dispatch) => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout * 1000)
  }
}