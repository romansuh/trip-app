import {useDispatch} from "react-redux";
import {
    setSelectedTrip,
    setSelectedTripCurrentWeather,
    setSelectedTripInfo
} from "../../../store/tripsSlice";
import {createFromToWeatherQuery, createTodayWeatherQuery} from "../../../common/api/weatherAPI";

const TripCard = ({
                      address,
                      date1,
                      date2
                  }) => {
    const dispatch = useDispatch();

    const handleTripCardSelect = () => {
        dispatch(setSelectedTrip({
            address: address,
            date1: date1,
            date2: date2,
        }))

        dispatch(setSelectedTripInfo(createFromToWeatherQuery(address, date1, date2)))
        dispatch(setSelectedTripCurrentWeather(createTodayWeatherQuery(address, date1, date2)))
    }

    return (
        <div className="trip-card" tabIndex="1" onClick={handleTripCardSelect}>
            <div className="city-image-wrapper">
                <img className="city-image" src="#" alt="City image"/>
            </div>
            <p>{address}</p>
            <p>{new Date(date1).toLocaleDateString()}-{new Date(date2).toLocaleDateString()}</p>
        </div>
    );
}

export default TripCard;