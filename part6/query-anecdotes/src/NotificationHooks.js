import { useContext } from 'react'
import NotificationContext from './NotificationContext'

export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}


let previoustimer

export const useShowNotification = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    const dispatch = notificationAndDispatch[1]

    const showNotification = (message, timeout = 5) => {
        dispatch({
            type: "SHOW_NOTIFICATION",
            payload: { message },
        })
        if (previoustimer) {
            clearTimeout(previoustimer)
        }

        previoustimer = setTimeout(() => {
            previoustimer = null
            dispatch({
                type: "HIDE_NOTIFICATION",
            })
        }, timeout * 1000)
    }

    return showNotification
}