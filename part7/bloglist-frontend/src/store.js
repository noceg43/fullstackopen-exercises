import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import userLoggedReducer from './reducers/userLoggedReducer'
import blogsReducer from './reducers/blogReducer'
import usersReducer from './reducers/userReducer'

const store = configureStore({
    reducer: {
        notification: notificationReducer,
        userLogged: userLoggedReducer,
        blogs: blogsReducer,
        users: usersReducer
    }
})

export default store