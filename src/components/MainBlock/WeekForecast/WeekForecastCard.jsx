const WeekForecastCard = ({
                              datetime,
                              tempmax,
                              tempmin,
                              icon
                          }) => {
    return (
        <div className="week-forecast-card">
            <div className="week-forecast-card-weekday-wrapper">
                <span>{new Date(datetime).getDay()}</span>
            </div>

            <div className="week-forecast-card-icon-wrapper">
                {icon}
            </div>

            <div className="week-forecast-card-temps-wrapper">
                <span>{tempmax}&deg;/{tempmax}&deg;</span>
            </div>
        </div>
    );
}

export default WeekForecastCard;