import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
        /*active: {
            id:'ABC',
            tittle: '',
            body: '',
            date: 1234,
            imageUrls: []
        }*/
    },
    reducers: {
        addNewEmpptyNote: (state, action) => {

        },
        setActivateNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmpptyNote,
    setActivateNote, 
    setNotes,
    updateNote,
    deleteNoteById
} = journalSlice.actions;			