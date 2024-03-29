import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        userData: null,
        didTryAutoLogin: false
    },
    reducers: {
        authenticate: (state, action) => {
            const { payload } = action;
            state.token = payload.token;
            state.userData = payload.userData;
            state.didTryAutoLogin = true;
        },
        setDidTryAutoLogin: (state) => {
            state.didTryAutoLogin = true;
        },
        logout: (state) => {
            state.token = null;
            state.userData = null;
            state.didTryAutoLogin = false;
        },
        updateLoggedInUserData: (state, action) => {
            state.userData = { ...state.userData, ...action.payload.userData };
        }
    }
})

export const { authenticate, setDidTryAutoLogin, logout, updateLoggedInUserData } = authSlice.actions;

export default authSlice.reducer;