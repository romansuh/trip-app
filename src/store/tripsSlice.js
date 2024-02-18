import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    trips: [
        {
            address: "Odesa",
            date1: "2024-07-23",
            date2: "2024-08-1"
        }
    ],
    selectedTrip: {},
    status: "idle",
    error: '',
}

const tripsSlice = createSlice({
    name: "trips",
    initialState,
    reducers: {
        addTrip: (state, action) => {
            state.trips = [...state.trips, action.payload].sort((a, b) => a.date1 - b.date1)
        },
    },
});

export const {addTrip} = tripsSlice.actions;
export default tripsSlice.reducer