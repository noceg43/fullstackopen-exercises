import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { createNew } from '../services/anecdotes'


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
        const newAnecdote = await createNew(content)

        dispatch(addAnecdote(newAnecdote))
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