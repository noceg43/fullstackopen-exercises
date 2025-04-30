import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Blog = ({ blog, onLikePressed, onDelete, currentUser }) => {

    const [viewDetails, setViewDetails] = useState(false)


    const blogStyle = {
        border: '1px solid #aaa',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px'
    }

    const handleDelete = async () => {
        if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
            onDelete(blog.id)
        }
    }


    return (
        <div style={blogStyle}>
            {blog.title} {blog.author} <button onClick={() => setViewDetails(!viewDetails)}>{viewDetails ? 'hide' : 'view'}</button>
            {viewDetails &&
                <div>
                    <a href={blog
                        .url}>{blog.url}</a>
                    <div>
                        likes {blog.likes} <button onClick={onLikePressed}>like</button>
                    </div>
                    <div>{(blog.user && blog.user.name) ? blog.user.name : 'anonymous'}</div>
                    {currentUser && currentUser.username === blog.user.username &&
                        <div>
                            <button onClick={handleDelete}>remove</button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

Blog.displayName = 'Blog'
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    onLikePressed: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired
}
export default Blog