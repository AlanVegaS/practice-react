import { registrerUserWithEmailPassword, signWithGoogle, loginWithEmailPassword, logoutFireBase } from "../../firebase/providers"
import { clearNotesLogout } from "../journal"
import { checkingCredential, login, logout } from "./"

export const checkingAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredential());
    }
}

export const startLoginEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredential())
        const resp = await loginWithEmailPassword({ email, password })
        console.log('resp '+JSON.stringify(resp));
        const { ok, uid, photoURL, errorMessage, displayName } = resp
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login(resp))
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
        dispatch(checkingCredential());
        const { ok, uid, photoURL, errorMessage } = await registrerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        //dispatch(checkingCredential())
        await logoutFireBase()
        dispatch(clearNotesLogout())
        dispatch(logout());
    }
}