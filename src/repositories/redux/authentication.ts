import { createSlice } from '@reduxjs/toolkit';

export interface IAuthentication {
    key: string;
    isLogged: boolean;
}

const authentication: IAuthentication = {
    key: "",
    isLogged: false
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authentication,
    reducers: {
        setKey(state, action) {
            state.key = action.payload
            state.isLogged = true
        },
        unsetKey(state) {
            state.key = ""
            state.isLogged = false
        }
    }
})

export const { setKey, unsetKey } = authenticationSlice.actions
export default authenticationSlice.reducer