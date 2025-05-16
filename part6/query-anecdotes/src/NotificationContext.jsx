import { createContext, useReducer, useContext } from 'react'
import PropTypes from 'prop-types'


const initialState = {
    message: null,
    show: false,
}


const notificationReducer = (state, action) => {
    console.log("NotificationReducer", action)
    switch (action.type) {
        case "SHOW_NOTIFICATION":
            return {
                ...state,
                message: action.payload.message,
                show: true,
            }
        case "HIDE_NOTIFICATION":
            return {
                ...state,
                message: null,
                show: false,
            }
        default:
            return state
    }
}

// Custom hooks moved to NotificationHooks.js

const NotificationContext = createContext()
export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, initialState)

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

NotificationContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}




export default NotificationContext