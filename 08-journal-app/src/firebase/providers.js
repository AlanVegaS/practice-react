import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const signWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FireBaseAuth, googleProvider)
        //const credentials = GoogleAuthProvider.credentialFromResult(result)
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.log(error);
        const errorMessage = error.message

        return {
            ok: false,
            errorMessage
        }
    }
}