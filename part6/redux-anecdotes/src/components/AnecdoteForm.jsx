import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'



const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const add = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        if (content.trim() === '') {
            alert('Anecdote cannot be empty')
            return
        }
        event.target.content.value = ''

        dispatch(addAnecdote(content))
    }


    return (<form onSubmit={add}>
        <div>
            <input name='content' />
        </div>
        <button type='submit'>
            create
        </button>
    </form>)
}


export default AnecdoteForm