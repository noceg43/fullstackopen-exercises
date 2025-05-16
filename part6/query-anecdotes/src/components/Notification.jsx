import {useNotificationValue} from '../NotificationHooks'
import React from 'react'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const { message, show } = useNotificationValue()

  if (!show) return null

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification
