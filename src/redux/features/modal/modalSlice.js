import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  modalState: false,
  title : '',
  content : '',
  background : '#F9F5EB',
  foreground : '#fff',
  priority : 'normal',
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addModalState: (state , action ) => {
      state.modalState = action.payload
    },
    addTitle : (state , action ) => {
       state.title = action.payload
    },
    addContent : (state , action) =>{
        state.content = action.payload
    },
    addBackground : (state , action) =>{
        state.background = action.payload
    },
    addforeground : ( state , action ) =>{
        state.foreground = action.payload
    },
    addPriority : ( state , action ) =>{
        state.priority = action.payload
    }
  },
})

export const { addModalState, addTitle, addBackground, addContent, addPriority, addforeground } = modalSlice.actions

export default modalSlice.reducer 