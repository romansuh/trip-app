import "./App.css";
import MainBlock from "./components/MainBlock/MainBlock";
import SelectedTripCurrentWeatherCard from "./components/SelectedTripCurrentWeatherCard/SelectedTripCurrentWeatherCard";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTrips} from "./store/tripsSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedTrips = JSON.parse(localStorage.getItem("storedTrips"));

        if (storedTrips !== null) {
            dispatch(setTrips(storedTrips));
        }
    }, [])

    return (
        <div className="App">
            <MainBlock/>
            <SelectedTripCurrentWeatherCard/>
        </div>
    );
}

export default App;
