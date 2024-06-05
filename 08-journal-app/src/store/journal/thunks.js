import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActivateNote, savingNewNotes, setNotes } from "./";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        console.log('starNewNote');
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FireBaseDB, `${uid}/journal/notes`))

        dispatch(savingNewNotes())

        const setDocResp = await setDoc(newDoc, newNote)

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActivateNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid)

        dispatch(setNotes(notes))
    }
}