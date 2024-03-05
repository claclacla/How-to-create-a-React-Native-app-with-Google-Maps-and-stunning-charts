/*
import { configureStore } from '@reduxjs/toolkit';

interface IAuthentication {
    key: string;
}

const authentication: IAuthentication = {
    key: "",
};

const reducer = (state: IAuthentication = authentication, action: any) => {
    switch (action.type) {
        case 'SET_KEY':
            return { ...state, key: state.key };
        case 'UNSET_KEY':
            return { ...state, key: "" };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: reducer,
});

export default store;
*/

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