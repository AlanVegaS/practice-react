import { collection, deleteDoc, getDoc, getDocs } from "firebase/firestore/lite";
import { FireBaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNotes } from "../../../src/store/journal";
import { startNewNote } from "../../../src/store/journal";

describe('Testing in Journal thunks', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('startNewNote should create a new blank note', async () => {
        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid: uid } });

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNotes());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            "body": "",
            "title": "",
            "date": expect.any(Number),
            "id": expect.any(String),
            "imageUrls": expect.any(Array)
        }))

        //delete firebase
        const collectionRef = collection(FireBaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));

        await Promise.all(deletePromises); 
    })
}) 