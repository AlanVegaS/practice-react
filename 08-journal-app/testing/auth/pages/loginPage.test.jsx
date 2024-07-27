import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { fireEvent, render, screen } from "@testing-library/react"
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockstartLoginEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginEmailPassword: ({ email, password }) => {
        return () => mockstartLoginEmailPassword({ email, password })
    }
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('Tesing in <LoginPage />', () => {

    beforeEach(() => jest.clearAllMocks());

    test('should render component', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        //screen.debug();
        expect(screen.getAllByText('Sign in').length).toBeGreaterThanOrEqual(1);
    });

    test('Google button should call startGoogleSignIn function', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-signin-button');
        fireEvent.click(googleBtn);
        //screen.debug();
        expect(mockStartGoogleSignIn).toHaveBeenCalled();
    })

    test('Submit should call startLoginWithEmailPassword', () => {
        const email = 'alan.vega@outlook.es';
        const password = '123456';
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: 'Email' });
        fireEvent.change(emailField, { target: { name: 'email', value: email } });

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } });

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm)

        expect(mockstartLoginEmailPassword).toHaveBeenCalledWith({
            email,
            password
        });

        screen.debug();
    })
});