import { createSlice } from '@reduxjs/toolkit'

const initialState = { menuIsOpen: false }

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.menuIsOpen = !state.menuIsOpen
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer
