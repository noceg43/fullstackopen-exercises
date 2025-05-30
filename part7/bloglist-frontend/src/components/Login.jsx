import { useField } from '../hooks/index'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../reducers/userLoggedReducer'

const Login = () => {
    const dispatch = useDispatch()

    const username = useField('text')
    const password = useField('password')

    const handleLogin = async (event) => {
        event.preventDefault()
        dispatch(loginUser(username.value, password.value))
        username.onReset()
        password.onReset()
    }
    const handleLogout = () => {
        dispatch(logoutUser())
    }

    const cUser = useSelector(state => state.userLogged)

    return cUser == null ? (<div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
            <div>
                username
                <input
                    {...username}
                />
            </div>
            <div>
                password
                <input
                    {...password}
                />
            </div>
            <button type="submit">login</button>
        </form>
    </div>) : <div>
        <h2>Hi, {cUser.name}</h2>
        <button onClick={handleLogout}>
            logout
        </button>
    </div>



}

export default Login