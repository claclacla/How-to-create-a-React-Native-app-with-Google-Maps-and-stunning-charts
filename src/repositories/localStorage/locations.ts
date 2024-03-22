import { createSlice } from '@reduxjs/toolkit';

export interface ILocalStorageLocation {
    latitude: number
    longitude: number
    name: string
}

const locations: ILocalStorageLocation[] = [];

    /*
    reducers: {
        setLocalStorageLocations(state, action) {
            state = action.payload
        },
    }
    */

const locationsSlice = createSlice({
    name: 'locations',
    initialState: locations,
    reducers: {}
})

//export const { setLocalStorageLocations } = locationsSlice.actions
export default locationsSlice.reducer