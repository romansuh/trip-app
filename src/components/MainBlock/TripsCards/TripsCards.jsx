import "./TripsCards.css"
import TripCard from "./TripCard";
import ButtonAddTrip from "./ButtonAddTrip";
import {useSelector} from "react-redux";

const TripsCards = () => {
    const trips = useSelector(state => state.trips.trips)
    const searchedTrips = useSelector(state => state.trips.searchedTrips)

    const renderTrips = (tripsToRender) => {
        return tripsToRender.map((trip, index) => {
            return <TripCard key={index} {...trip}/>
        })
    }

    return (
        <div className="trips-cards-btn-container">
            <div className="trips-cards-container">
                {searchedTrips.length !== 0 ? renderTrips(searchedTrips) : renderTrips(trips)}
            </div>

            <ButtonAddTrip/>
        </div>
    );
}

export default TripsCards;