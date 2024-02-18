import "./SelectedTripCurrentWeatherCard.css";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import CountdownTimer from "./CountdownTimer";

const SelectedTripCurrentWeatherCard = () => {
    const selectedTrip = useSelector(state => state.trips.selectedTrip);

    const {address, currentDayWeather, tripStartDate} = useMemo(() => {
        return {
            address: selectedTrip.currentDayInfo?.address,
            currentDayWeather: selectedTrip.currentDayInfo?.days?.[0],
            tripStartDate: selectedTrip.trip?.date1,
        }
    }, [selectedTrip]);
    return (
        <div className="selected-trip-weather-wrapper">
            {Object.keys(selectedTrip.currentDayInfo).length === 0
                ?
                <span>Select trip</span>
                :
                <div className="selected-trip-weather-card">
                    <div className="selected-trip-weather-card-weekday">
                        <span>{new Date(currentDayWeather.datetime).getDay()}</span>
                    </div>

                    <div className="selected-trip-weather-card-icon-wrapper">
                        {currentDayWeather.icon}
                    </div>

                    <div className="selected-trip-weather-card-city">
                        <span>{address}</span>
                    </div>

                    <CountdownTimer targetDate={new Date(tripStartDate)}/>
                </div>
            }
        </div>
    );
}

export default SelectedTripCurrentWeatherCard;