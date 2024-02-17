import "./TripsCards.css"
import TripCard from "./TripCard";
import ButtonAddTrip from "./ButtonAddTrip";
import {useState} from "react";

const TripsCards = () => {
    const [trips, setTrips] = useState([
        {
            address: "Berlin",
            date1: "2024-07-23",
            date2: "2024-08-1"
        }
    ]);

    return (
        <div className="trips-cards-container">
            {trips.map((trip, index) => {
                return <TripCard key={index} {...trip}/>
            })}

            <ButtonAddTrip/>
        </div>
    );
}

export default TripsCards;