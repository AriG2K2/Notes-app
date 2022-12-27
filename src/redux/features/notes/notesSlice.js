import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  notesArray: [],
  searchValue : '',
  enableToEdit : false,
  searchedNotesArray : [],
  searched : false ,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes: (state , action ) => {
      state.notesArray = action.payload
    },
    latest: (state) => {
      state.notesArray.sort((a,b)=>b.id - a.id)
    },
    oldest : (state) => {
      state.notesArray.sort((a,b)=>a.id - b.id)
    },
    normal : (state) => {
      state.notesArray.sort((a,b)=>b.priority.localeCompare(a.priority))
    },
    high : (state) =>{
      state.notesArray.sort((a,b)=>a.priority.localeCompare(b.priority))
    },
    addSearchvalue : (state , action ) => {
      state.searchValue = action.payload
    },
    filterSearch : (state) => {
      state.searchedNotesArray = state.notesArray.filter((x)=> x.title.toLowerCase().includes(state.searchValue.toLowerCase()) || x.content.toLowerCase().includes(state.searchValue.toLowerCase())) 
    },
    editNote : (state , action) =>{
      state.enableToEdit = action.payload
    },
    isSearched : ( state , action ) => {
      state.searched = action.payload
    }
  },
})

export const { addNotes, latest, oldest,normal,high,addSearchvalue,filterSearch, editNote, isSearched } = notesSlice.actions

export default notesSlice.reducer 