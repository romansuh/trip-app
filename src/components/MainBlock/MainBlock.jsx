import "./MainBlock.css";
import TripsCards from "./TripsCards/TripsCards";
import InputSearchTrip from "./InputSearchTrip";
import WeekForecast from "./WeekForecast/WeekForecast";
import { GoogleLogin } from '@react-oauth/google';

const MainBlock = () => {
    return (
        <div className="main-block">
            <h1 className="main-block-header">Weather <b>Forecast</b></h1>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    alert("Login succeeded");
                    console.log(credentialResponse)
                }}
                onError={() => {
                    alert("Login failed")
                }}
            />
            <InputSearchTrip/>
            <TripsCards/>
            <WeekForecast/>
        </div>
    );
}

export default MainBlock;