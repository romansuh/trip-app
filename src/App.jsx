import "./App.css";
import MainBlock from "./components/MainBlock/MainBlock";
import SelectedTripCurrentWeatherCard from "./components/SelectedTripCurrentWeatherCard/SelectedTripCurrentWeatherCard";

const App = () => {
    return (
        <div className="App">
            <MainBlock/>
            <SelectedTripCurrentWeatherCard/>
        </div>
    );
}

export default App;
