import {configureStore} from "@reduxjs/toolkit";
import tripsReducer from "./tripsSlice";

const store = configureStore({
    reducer: {
        trips: tripsReducer,
    }
})

export default store;