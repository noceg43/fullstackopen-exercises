import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        if (content.trim() === '') {
            alert('Anecdote cannot be empty')
            return
        }
        event.target.content.value = ''
        dispatch(createAnecdote(content))
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