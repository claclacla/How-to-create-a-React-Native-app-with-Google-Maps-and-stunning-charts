import { createSlice } from '@reduxjs/toolkit';

export interface IAuthentication {
    key: string;
}

const authentication: IAuthentication = {
    key: "",
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authentication,
    reducers: {
        setKey(state, action) {
            state.key = action.payload
        },
        unsetKey(state) {
            state.key = ""
        }
    }
})

export const { setKey, unsetKey } = authenticationSlice.actions
export default authenticationSlice.reducer