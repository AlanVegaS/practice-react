//import { render }
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { renderHook } from "@testing-library/react";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

describe('Tesing in <LoginPage />', () => {
    test('should render component', () => {
        renderHook(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
    });
});