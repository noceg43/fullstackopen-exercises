import { createSlice, current } from '@reduxjs/toolkit'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const { id, votes } = action.payload
      console.log(current(state))

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
export const { voteAnecdote, addAnecdote, setAnecdotes } = anecdoteSlice.actions