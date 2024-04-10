import { registrerUserWithEmailPassword, signWithGoogle, loginWithEmailPassword } from "../../firebase/providers"
import { checkingCredential, login, logout } from "./"

export const startLoginEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredential())
        const { ok, uid, photoURL, errorMessage } = await loginWithEmailPassword({ email, password })

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, photoURL, errorMessage }))
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredential())
        const result = await signWithGoogle()
        console.log(result);
        if (!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        console.log('startCreatingUserWithEmailPassword');
        dispatch(checkingCredential());
        const { ok, uid, photoURL, errorMessage } = await registrerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}