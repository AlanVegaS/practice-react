import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
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
        savingNewNotes: (state, action) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            console.log(JSON.stringify(action));
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActivateNote: (state, action) => {
            state.active= action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActivateNote, 
    setNotes,
    updateNote,
    deleteNoteById,
    savingNewNotes
} = journalSlice.actions;			