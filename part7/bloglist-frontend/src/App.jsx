import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser } from './reducers/userLoggedReducer'
import Login from './components/Login'
import Menu from './components/Menu'
import { Routes, Route, useMatch } from 'react-router-dom'
import Blogs from './components/Blogs'
import Users from './components/Users'
import UserDetails from './components/UserDetails'

const App = () => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification)
    const user = useSelector(state => state.userLogged)

    useEffect(() => {
        dispatch(initializeUser())
    }, [])


    const match = useMatch('/users/:id')
    const userId = match ? match.params.id : null

    return (
        <div>
            {
                (notification.show) ?
                    <div>
                        {notification.message}
                    </div>
                    : null
            }
            <Login />
            {(user !== null) ?
                <div>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Blogs />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/users/:id" element={<UserDetails id={userId} />} />
                    </Routes>
                </div> : null
            }
        </div>
    )
}

export default App