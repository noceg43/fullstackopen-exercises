import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'



const App = () => {
    const loggedInWindowKey = 'loggedNoteappUser'

    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState({ message: null, isError: false })

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')



    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs(blogs)
        )
        const loggedUserJSON = window.localStorage.getItem(loggedInWindowKey)
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const showMessage = (message, isError) => {
        console.log(message)
        setErrorMessage({ message: message, isError: isError })
        setTimeout(() => {
            setErrorMessage({ message: null, isError: false })
        }, 5000)
    }

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({
                username, password,
            })
            // save the user to local storage (not secure, but good enough for now)
            window.localStorage.setItem(
                loggedInWindowKey, JSON.stringify(user)
            )
            blogService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {

            showMessage('Wrong credentials', true)
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem(loggedInWindowKey)
        setUser(null)
        blogService.setToken
    }


    const handleCreate = async (event) => {
        event.preventDefault()
        const blogObject = {
            title: title,
            author: author,
            url: url
        }
        try {
            const newBlog = await blogService.create(blogObject)
            setBlogs(blogs.concat(newBlog))
            setTitle('')
            setAuthor('')
            setUrl('')
            showMessage('Blog created', false)
        } catch (exception) {
            showMessage('Failed to create blog', true)
        }
    }


    return (
        <div>
            <h2>{user === null ? 'Log in to application' : 'Hi, ' + user.name}</h2>
            {
                (errorMessage.message !== null) ?
                    <div style={{ color: errorMessage.isError ? 'red' : 'green' }}>
                        {errorMessage.message}
                    </div>
                    : null
            }
            {(user === null) ?
                <div>
                    <form onSubmit={handleLogin}>
                        <div>
                            username
                            <input
                                type="text"
                                value={username}
                                name="Username"
                                onChange={({ target }) => setUsername(target.value)}
                            />
                        </div>
                        <div>
                            password
                            <input
                                type="password"
                                value={password}
                                name="Password"
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </div>
                        <button type="submit">login</button>
                    </form>
                </div> :
                <div>
                    <div>
                        {user.name} logged in
                        <button onClick={handleLogout}>
                            logout
                        </button>
                    </div>
                    {blogs.map(blog =>
                        <Blog key={blog.id} blog={blog} />)}
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
                </div>


            }


        </div>
    )

}

export default App