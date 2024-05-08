import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { onAuthStateChanged } from "firebase/auth";
import { FireBaseAuth } from "../firebase/config";


export const useCheckAuths = () => {

    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FireBaseAuth, async (user) => {
            if (!user) return dispatch(logout())
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }))
        });
    }, []);

    return status
}