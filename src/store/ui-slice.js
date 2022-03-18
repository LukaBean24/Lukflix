import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuIsOpen: false,
  modalIsOpen: false,
  data: {},
  searchData: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.menuIsOpen = !state.menuIsOpen
    },
    openModal(state, action) {
      state.modalIsOpen = true
      state.data = action.payload
    },
    closeModal(state) {
      state.modalIsOpen = false
    },
    updateSearchData(state, action) {
      state.searchData = action.payload
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer
