import PropTypes from 'prop-types'
import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {

    const handleCreate = async (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const author = event.target.author.value
        const url = event.target.url.value
        event.target.title.value = ''
        event.target.author.value = ''
        event.target.url.value = ''
        createBlog({ title, author, url })
    }

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

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
                />
            </div>
            <div>
                author
                <input
                    type="text"
                    value={author}
                    name="author"
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </div>
            <div>
                url
                <input
                    type="text"
                    value={url}
                    name="url"
                    onChange={({ target }) => setUrl(target.value)}
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
