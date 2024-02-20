import "./WeekForecast.css";
import {useSelector} from "react-redux";
import WeekForecastCard from "./WeekForecastCard";

const WeekForecast = () => {
    const selectedTripInfo = useSelector(state => state.trips.selectedTrip.info);

    const renderSelectedTripInfo = () => selectedTripInfo.days.map((day, index) => <WeekForecastCard key={index} {...day}/>)

    return (
        <div className="week-forecast-wrapper">
            <h4>Week</h4>
            <div className="week-forecast-container">
                {Object.keys(selectedTripInfo).length !== 0 ? renderSelectedTripInfo() : <span>Select trip to see forecast</span>}
            </div>
        </div>
    );
}

export default WeekForecast;