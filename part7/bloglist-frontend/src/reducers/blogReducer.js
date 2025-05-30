import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import { setNotificationWithTimeout } from './notificationReducer'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload
    },
  }
})

export default blogSlice.reducer
export const { setBlogs } = blogSlice.actions

export const initializeBlogs = () => {
  return async dispatch => {
    const content = await blogService.getAll()
    dispatch(setBlogs(content))
  }
}

export const createBlog = content => {
  return async dispatch => {
    try {
      await blogService.create(content)
      await dispatch(initializeBlogs())
      dispatch(setNotificationWithTimeout('Blog created successfully', 5))
    }
    catch (exception) {
      console.error(exception)
      dispatch(setNotificationWithTimeout('Failed to create blog', 5))
    }
  }
}

export const likeBlog = (blogObject) => {
  return async dispatch => {
    try {
      await blogService.update(blogObject.id, {
        ...blogObject,
        likes: blogObject.likes + 1
      })
      await dispatch(initializeBlogs())
      dispatch(setNotificationWithTimeout('Blog liked successfully', 5))
    }
    catch (exception) {
      console.error(exception)
      dispatch(setNotificationWithTimeout('Failed to like blog', 5))
    }
  }
}

export const deleteBlog = (id) => {
  return async dispatch => {
    try {
      await blogService.remove(id)
      await dispatch(initializeBlogs())
      dispatch(setNotificationWithTimeout('Blog removed successfully', 5))
    }
    catch (exception) {
      console.error(exception)
      dispatch(setNotificationWithTimeout('Failed to remove blog', 5))
    }
  }
}


