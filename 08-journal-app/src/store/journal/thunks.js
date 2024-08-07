import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActivateNote, savingNewNotes, setNotes, setSaving, updatedNote, setPhotosToActiveNote, deleteNoteById } from "./";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
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

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc(FireBaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: false });

        dispatch(updatedNote(note))
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }
        const photosUrls = await Promise.all(fileUploadPromises)
        dispatch(setPhotosToActiveNote(photosUrls))
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(FireBaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
        dispatch(deleteNoteById(note.id))
    }
}