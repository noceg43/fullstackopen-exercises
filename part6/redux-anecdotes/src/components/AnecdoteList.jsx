import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, onVoteTap }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => onVoteTap(anecdote.id)}>vote</button>
            </div>
        </div>
    )
}

Anecdote.propTypes = {
    anecdote: PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired
    }).isRequired,
    onVoteTap: PropTypes.func.isRequired
}



const AnecdoteList = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes.sort((a, b) => b.votes - a.votes))

    const filter = useSelector(state => state.filter)

    const anecdotesToShow = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

    const vote = (id) =>
        dispatch(voteAnecdote(id))


    return (
        <div>
            {anecdotesToShow.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} onVoteTap={vote} />
            )}
        </div>
    )
}


export default AnecdoteList