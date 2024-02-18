import "./TripsCards.css"
import TripCard from "./TripCard";
import ButtonAddTrip from "./ButtonAddTrip";
import {useSelector} from "react-redux";

const TripsCards = () => {
    const trips = useSelector(state => state.trips.trips)

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