import {useEffect} from "react";
import {createFromToWeatherRequest} from "../../../common/api/weatherAPI";
import axios from "axios";

const TripCard= ({address, date1, date2}) => {

    // useEffect(() => {
    //     const fetchTripData = async () => {
    //         const query = createFromToWeatherRequest(address, date1, date2);
    //
    //         const response  = await axios.get(query);
    //         console.log(response.data)
    //     }
    //
    //     fetchTripData();
    // }, [])

    return (
        <div className="trip-card">
            <div className="city-image-wrapper">
                <img className="city-image" src="#" alt="City image"/>
            </div>
            <p>{address}</p>
            <p>{new Date(date1).toLocaleDateString()}-{new Date(date2).toLocaleDateString()}</p>
        </div>
    );
}

export default TripCard;