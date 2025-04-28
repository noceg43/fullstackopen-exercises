import PropTypes from 'prop-types'
import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleCreate = async (event) => {
        event.preventDefault()
        
        // Use the state variables instead of accessing the DOM
        const blogData = {
            title,
            author,
            url
        }

        createBlog(blogData)

        // Clear the form by resetting state
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    return (<div>
        <h2>Create New</h2>
        <form onSubmit={handleCreate}>
            <div>
                title
                <input
                    type="text"
                    value={title}
                    name="title"
                    onChange={({ target }) => setTitle(target.value)}
                    placeholder="title"
                />
            </div>
            <div>
                author
                <input
                    type="text"
                    value={author}
                    name="author"
                    onChange={({ target }) => setAuthor(target.value)}
                    placeholder="author"
                />
            </div>
            <div>
                url
                <input
                    type="text"
                    value={url}
                    name="url"
                    onChange={({ target }) => setUrl(target.value)}
                    placeholder="url"
                />
            </div>
            <button type="submit">create</button>
        </form>
    </div>)
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}

export default BlogForm