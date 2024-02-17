import "./MainBlock.css";
import TripsCards from "./TripsCards/TripsCards";
import InputSearchTrip from "./InputSearchTrip";
import WeekForecast from "./WeekForecast/WeekForecast";

const MainBlock = () => {
    return (
        <div className="main-block">
            <h1 className="main-block-header">Weather <b>Forecast</b></h1>

            <InputSearchTrip/>
            <TripsCards/>
            <WeekForecast/>
        </div>
    );
}

export default MainBlock;