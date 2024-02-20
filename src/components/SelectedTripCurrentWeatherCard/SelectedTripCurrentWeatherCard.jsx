import "./SelectedTripCurrentWeatherCard.css";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import CountdownTimer from "./CountdownTimer";
import weatherIcons from "../../common/assets/weatherIconsColor/weatherIcons";
import {getWeekdayByNumber} from "../../common/data/tripsData";

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
                <div
                    className="selected-trip-weather-wrapper-masking"
                    style={
                        {
                            backgroundImage: `url("/trip-app/src/common/assets/weatherIconsMono/${currentDayWeather.icon}.svg")`
                        }
                    }
                >
                    <div className="selected-trip-weather-card">
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

                        <CountdownTimer targetDate={new Date(tripStartDate)}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default SelectedTripCurrentWeatherCard;