import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false
}
const AuthSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
        },
        logOut: (state, action) => {
            state.isAuthenticated = false;
        }
    }
})

export const { login, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;