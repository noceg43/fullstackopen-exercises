import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import loginService from '../services/login'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const loggedInWindowKey = 'loggedNoteappUser'

const userLoggedSlice = createSlice({
    name: 'userLogged',
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload
        },
        clearUser() {
            return null
        }
    }
})

export default userLoggedSlice.reducer
export const { setUser, clearUser } = userLoggedSlice.actions

export const initializeUser = () => {
    return async dispatch => {
        const loggedUserJSON = window.localStorage.getItem(loggedInWindowKey)
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            dispatch(setUser(user))
            blogService.setToken(user.token)
        } else {
            dispatch(clearUser())
        }
    }
}

export const loginUser = (username, password) => {
    return async dispatch => {
        try {
            const user = await loginService.login({
                username, password,
            })
            window.localStorage.setItem(
                loggedInWindowKey, JSON.stringify(user)
            )
            blogService.setToken(user.token)
            dispatch(setUser(user))
            dispatch(setNotificationWithTimeout(`Welcome ${user.name}`, 5))
        } catch (exception) {
            dispatch(setNotificationWithTimeout('Wrong credentials', 5))
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        window.localStorage.removeItem(loggedInWindowKey)
        blogService.setToken(null)
        dispatch(clearUser())
    }
}