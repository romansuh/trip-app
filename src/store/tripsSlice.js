import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const setSelectedTripInfo = createAsyncThunk("trips/fetchTripData", async (queryToSelectedTrip) => {
    const response = await axios.get(queryToSelectedTrip);
    return response.data;
})

export const setSelectedTripCurrentWeather = createAsyncThunk("trips/fetchCurrentData", async (queryToSelectedTrip) => {
    const response = await axios.get(queryToSelectedTrip);
    return response.data;
})

const initialState = {
    trips: [
        {
            address: "Odesa",
            date1: "2024-07-23",
            date2: "2024-08-1"
        }
    ],
    selectedTrip: {
        trip: {},
        info: {},
        currentDayInfo: {},
    },
    status: "idle",
    error: "",
}

const tripsSlice = createSlice({
    name: "trips",
    initialState,
    reducers: {
        addTrip: (state, action) => {
            state.trips = [...state.trips, action.payload].sort((a, b) => a.date1 - b.date1)
        },
        setSelectedTrip: (state, action) => {
            state.selectedTrip.trip = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(setSelectedTripInfo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(setSelectedTripInfo.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(setSelectedTripInfo.fulfilled, (state, action) => {
                state.selectedTrip.info = action.payload;
                state.status = "succeeded";
                state.error = "";
            })
            .addCase(setSelectedTripCurrentWeather.pending, (state) => {
                state.status = "loading";
            })
            .addCase(setSelectedTripCurrentWeather.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(setSelectedTripCurrentWeather.fulfilled, (state, action) => {
                state.selectedTrip.currentDayInfo = action.payload;
                state.status = "succeeded";
                state.error = "";
            })
    },
});

export const {addTrip, setSelectedTrip} = tripsSlice.actions;
export default tripsSlice.reducer;