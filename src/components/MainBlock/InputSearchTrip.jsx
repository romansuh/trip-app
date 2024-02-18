import {useDispatch} from "react-redux";
import {setSearchedTrips} from "../../store/tripsSlice";

const InputSearchTrip = () => {
    const dispatch = useDispatch();

    const handleSearchTripSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());
        const searchedTrip = formJson.searchedTrip;

        dispatch(setSearchedTrips(searchedTrip));
    }

    return (
        <form onSubmit={handleSearchTripSubmit} className="search-input-form">
            <input className="search-trip-input" type="text" name="searchedTrip" placeholder="Search your trip"/>
            <input type="submit" hidden/>
        </form>
    );
}

export default InputSearchTrip;