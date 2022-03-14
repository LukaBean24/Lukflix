import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-slice'
import watchlistSlice from './watchlist-slice'

const store = configureStore({
  reducer: { watchlist: watchlistSlice, ui: uiSlice },
  devTools: true,
})

export default store
