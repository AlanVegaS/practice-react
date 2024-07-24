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
            console.log('new note : '+JSON.stringify(action));
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActivateNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = ''
        },
        updatedNote: (state, action) => {
            state.isSaving = false;

            state.notes = state.notes.map(note => {
                return note.id === action.payload.id ?
                    action.payload :
                    note;
            })

            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        deleteNoteById: (state, action) => {
            state.active = null
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
        clearNotesLogout: (state, action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActivateNote,
    setNotes,
    setSaving,
    updatedNote,
    deleteNoteById,
    setPhotosToActiveNote,
    savingNewNotes,
    clearNotesLogout
} = journalSlice.actions;			