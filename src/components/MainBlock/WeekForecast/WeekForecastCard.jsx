import weatherIcons from "../../../common/icons/weatherIconsColor/weatherIcons";
import {getWeekdayByNumber} from "../../../common/data/tripsData";

const WeekForecastCard = ({
                              datetime,
                              tempmax,
                              tempmin,
                              icon
                          }) => {
    return (
        <div className="week-forecast-card">
            <div className="week-forecast-card-weekday-wrapper">
                <span>{getWeekdayByNumber(new Date(datetime).getDay())}</span>
            </div>

            <div className="week-forecast-card-icon-wrapper">
                <img className="week-forecast-card-icon" src={weatherIcons[icon]} alt="weather-icon"/>
            </div>

            <div className="week-forecast-card-temps-wrapper">
                <span>{tempmax}&deg;/{tempmin}&deg;</span>
            </div>
        </div>
    );
}

export default WeekForecastCard;