import { useEfect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
    const { status } = useSelector((state) => state.auth);

    return status;
};