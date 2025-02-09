const ErrorText = ({ error }) => {

    const style = {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        border: '1px solid red',
        borderRadius: 5,
        backgroundColor: 'lightgray'
    }


    return <p style={style}>{error}</p>
}

export default ErrorText