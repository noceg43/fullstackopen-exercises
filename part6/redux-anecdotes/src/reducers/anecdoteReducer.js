import { createSlice, current } from '@reduxjs/toolkit'
import { getAll, createNew, updateVotes } from '../services/anecdotes'
import { setNotificationWithTimeout } from './notificationReducer'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    changeVote(state, action) {
      const { id, votes } = action.payload
      return state.map(anecdote =>
        anecdote.id === id
          ? { ...anecdote, votes: votes }
          : anecdote
      )
    },
    addAnecdote(state, action) {
      console.log(current(state))
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export default anecdoteSlice.reducer
export const { addAnecdote, setAnecdotes, changeVote } = anecdoteSlice.actions

export const initializeNotes = () => {
  return async dispatch => {
    const content = await getAll()
    dispatch(setAnecdotes(content))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await createNew(content)
    dispatch(addAnecdote(anecdote))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await updateVotes(anecdote.id, anecdote.votes + 1)
    dispatch(changeVote(updatedAnecdote))
    dispatch(setNotificationWithTimeout(`you voted '${anecdote.content}'`, 5))
  }
}