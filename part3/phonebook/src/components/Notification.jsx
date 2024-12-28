const Notification = ({ message}) => {
    if (message === null) {
      return null
    }

    if (message.isError == null){
      message.isError = false
    }
  
    return (
        // className use the error theme from css
      <div style={
        {
          "color": message.isError ? "red" : "green",
          "background": "lightgrey",
          "fontSize": 20,
          "borderStyle": "solid",
          "borderRadius": 5,
          "padding": 10,
          "marginBottom": 10
        }
      }>
        {message.message}
      </div>
    )
  }

export default Notification