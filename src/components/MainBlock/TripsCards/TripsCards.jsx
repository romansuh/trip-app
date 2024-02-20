import "./TripsCards.css"
import TripCard from "./TripCard";
import ButtonAddTrip from "./ButtonAddTrip";
import {useSelector} from "react-redux";

const getImageSourceOfTrip = (tripDestination) => {
    switch (tripDestination) {
        case "Odesa":
            return "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/41/20/0f/caption.jpg?w=300&h=300&s=1";
        case "Kyiv":
            return "https://turpoisk.ua/images/blog/kyiv/kyiv.jpg";
        case "Berlin":
            return "https://www.schengenvisainfo.com/wp-content/uploads/2018/06/Brandenburg-Gate.jpg";
        case "Tokyo":
            return "https://i.pinimg.com/736x/16/1d/b6/161db6128ef6ba946c0c13cb4b95a52f.jpg";
        case "London":
            return "https://media.timeout.com/images/104710350/image.jpg";
        case "Barcelona":
            return "https://www.inoutbarcelonatours.com/build/images/tours/BCNIN14AM/01-icono_1920.6c5f46e3.jpg";
        case "New-York":
            return "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg";
        case "Toronto":
            return "https://newcomershub.com/images/canada/toronto1_cn_tower.jpg";
        case "Hollywood":
            return "https://www.treksplorer.com/wp-content/uploads/things-to-do-in-hollywood-ca.jpg";
    }
}

const TripsCards = () => {
    const allTrips = useSelector(state => state.trips.trips)
    const searchedTrips = useSelector(state => state.trips.searchedTrips)

    const renderTrips = (tripsToRender) => {
        return tripsToRender.map((trip, index) => {
            const img = getImageSourceOfTrip(trip.address)
            return <TripCard key={index} {...trip} imageURL={img}/>
        })
    }

    return (
        <div className="trips-cards-btn-container">
            <div className="trips-cards-container">
                {searchedTrips.length !== 0 ? renderTrips(searchedTrips) : renderTrips(allTrips)}
            </div>

            <ButtonAddTrip/>
        </div>
    );
}

export default TripsCards;