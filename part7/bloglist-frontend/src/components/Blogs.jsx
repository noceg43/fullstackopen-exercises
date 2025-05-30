import React from 'react';
import BlogForm from './BlogForm';
import Togglable from './Togglable';
import { createBlog } from '../reducers/blogReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    initializeBlogs,
    deleteBlog,
    likeBlog
} from '../reducers/blogReducer';
import Blog from './Blog';


const Blogs = () => {
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.userLogged)

    useEffect(() => {
        dispatch(initializeBlogs())
    }, [])



    const onCreateBlog = async (blogObject) => {
        dispatch(createBlog(blogObject))
    }

    const updateBlog = async (blogObject) => {
        dispatch(likeBlog(blogObject))
    }

    const removeBlog = async (id) => {
        dispatch(deleteBlog(id))
    }

    const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)
    return (<div>{
        sortedBlogs.map(blog =>
            <Blog key={blog.id}
                blog={blog}
                onLikePressed={() => updateBlog(blog)}
                onDelete={() => removeBlog(blog.id)}
                currentUser={user}
            />
        )}

        < Togglable buttonLabel='new blog'>
            <BlogForm createBlog={onCreateBlog} />
        </Togglable>
    </div >)
}

export default Blogs;