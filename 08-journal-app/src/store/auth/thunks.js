import { registrerUserWithEmailPassword, signWithGoogle } from "../../firebase/providers"
import { checkingCredential, login, logout } from "./"

export const checkingAuthenticate = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredential())
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

export const startCreatingUserWithEmailPassword = ({email, password, displayName})  => {
    console.log('startCreatingUserWithEmailPassword'+ email + password);
    return async(dispatch) => {
        console.log('startCreatingUserWithEmailPassword');
        dispatch(checkingCredential());
        console.log('startCreatingUserWithEmailPassword');
        const resp = await registrerUserWithEmailPassword({email, password, displayName});
        console.log(resp);
    }
}