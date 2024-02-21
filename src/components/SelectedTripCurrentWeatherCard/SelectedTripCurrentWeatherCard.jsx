import "./SelectedTripCurrentWeatherCard.css";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import CountdownTimer from "./CountdownTimer";
import weatherIcons from "../../common/icons/weatherIconsColor/weatherIcons";
import {getWeekdayByNumber} from "../../common/data/tripsData";

const SelectedTripCurrentWeatherCard = () => {
    const selectedTrip = useSelector(state => state.trips.selectedTrip);
    const status = useSelector(state => state.trips.status);

    const {address, currentDayWeather, tripStartDate} = useMemo(() => {
        return {
            address: selectedTrip.currentDayInfo?.address,
            currentDayWeather: selectedTrip.currentDayInfo?.days?.[0],
            tripStartDate: selectedTrip.trip?.date1,
        }
    }, [selectedTrip]);

    const renderContent = () => {
        if (status === "succeeded" &&
            typeof currentDayWeather !== "undefined" &&
            currentDayWeather !== null &&
            Object.keys(currentDayWeather)?.length !== 0) {
            return (
                <div
                    className="selected-trip-weather-wrapper-masking"
                    style={
                        {
                            backgroundImage: `url("trip-app/assets/weatherIconsMono/${currentDayWeather.icon}.svg"), url("trip-app/assets/weatherIconsMono/${currentDayWeather.icon}.svg"), url("trip-app/assets/weatherIconsMono/${currentDayWeather.icon}.svg")`
                        }
                    }
                >
                    <div className="selected-trip-weather-card">
                        <div className="selected-trip-weather-card-weather-info">
                            <div className="selected-trip-weather-card-weekday">
                                <span>{getWeekdayByNumber(new Date(currentDayWeather.datetime).getDay())}</span>
                            </div>

                            <div className="selected-trip-weather-card-icon-temp-wrapper">
                                <img
                                    className="selected-trip-weather-card-icon"
                                    src={weatherIcons[currentDayWeather.icon]}
                                    alt="weather-icon"
                                />
                                <span className="selected-trip-weather-card-temp">
                                {currentDayWeather.temp}
                                    <sup>
                                    <sup className="selected-trip-weather-card-temp-celcius">&deg;C</sup>
                                </sup>
                            </span>
                            </div>

                            <div className="selected-trip-weather-card-city">
                                <span>{address}</span>
                            </div>
                        </div>


                        <CountdownTimer targetDate={new Date(tripStartDate)}/>
                    </div>
                </div>
            );
        }

        let msgToClient = "Select trip to see today forecast"

        if (status === "loading") {
            msgToClient = "Loading data..."
        }

        if (status === "error") {
            msgToClient = "Error occurred fetching data, check console for info"
        }

        return <p className="selected-trip-weather-card-placeholder">{msgToClient}</p>
    }

    return (
        <div className="selected-trip-weather-wrapper">
            {renderContent()}
        </div>
    );
}

export default SelectedTripCurrentWeatherCard;