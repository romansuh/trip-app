const TripCard= ({address, date1, date2}) => {

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