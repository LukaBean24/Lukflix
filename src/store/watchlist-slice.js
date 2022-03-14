import { createSlice } from '@reduxjs/toolkit'

const initialState = { watchlist: [] }

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovie(state, action) {
      let existingMovie = state.watchlist.find(
        (movie) => movie.id === action.payload.id
      )
      if (existingMovie) {
        return state.watchlist
      } else {
        state.watchlist.push(action.payload)
      }
    },

    removeMovie(state, action) {
      state.watchlist.filter((movie) => movie.id !== action.payload.id)
    },
  },
})

export const watchlistActions = watchlistSlice.actions

export default watchlistSlice.reducer
