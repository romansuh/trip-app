import "./WeekForecast.css";
import {useSelector} from "react-redux";
import WeekForecastCard from "./WeekForecastCard";

const WeekForecast = () => {
    const selectedTripInfo = useSelector(state => state.trips.selectedTrip.info);
    const status = useSelector(state => state.trips.status);

    const renderContent = () => {
        if (status === "succeeded") {
            return selectedTripInfo?.days?.map((day, index) => <WeekForecastCard key={index} {...day}/>)
        }

        let msgToClient = "Select trip to see each day forecast";

        if (status === "loading") {
            msgToClient = "Loading data..."
        }

        if (status === "error") {
            msgToClient = "Error occurred fetching data, check console for info"
        }

        return <p className="week-forecast-placeholder">{msgToClient}</p>


    };
    return (
        <div className="week-forecast-wrapper">
            <h4>Week</h4>
            <div className="week-forecast-container">
                {renderContent()}
            </div>
        </div>
    );
}

export default WeekForecast;