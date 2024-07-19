import { signWithGoogle, loginWithEmailPassword, logoutFireBase } from '../../../src/firebase/providers';
import { checkingCredential, login, logout } from '../../../src/store/auth';
import { checkingAuthentication, startGoogleSignIn, startLoginEmailPassword, startLogout } from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers')

describe('Testing AuthThunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should invoke checkingCredential', async () => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
    })

    test('startGoogleSignIn should called to checkingCredential and login', async () => {
        const loginData = { ok: true, ...demoUser }

        await signWithGoogle.mockResolvedValue(loginData)
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startGoogleSignIn should called to checkingCredential and logout', async () => {
        const loginData = { ok: false, errorMessage: 'Login error' }

        await signWithGoogle.mockResolvedValue(loginData)
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('startLoginEmailPassword should called loginWithEmailPassword login', async () => {
        const loginData = { ok: true, ...demoUser }
        const userData = { email: loginData.email, password: '1234' }

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginEmailPassword(userData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startLogout should called logout', async() => {
        await startLogout()(dispatch);

        expect(logoutFireBase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
    })
})