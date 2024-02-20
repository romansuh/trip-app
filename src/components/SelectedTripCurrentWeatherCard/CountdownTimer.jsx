import {useState, useEffect} from 'react';

const CountdownTimer = ({targetDate}) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {days, hours, minutes, seconds};
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [targetDate]);

    return (
        <div className="selected-trip-weather-card-timer-wrapper">
            <div className="selected-trip-weather-card-timer-element-wrapper">
                <span className="selected-trip-weather-card-timer-element-time">{timeLeft.days}</span>
                <span className="selected-trip-weather-card-timer-element-type">DAYS</span>
            </div>

            <div className="selected-trip-weather-card-timer-element-wrapper">
                <span className="selected-trip-weather-card-timer-element-time">{timeLeft.hours}</span>
                <span className="selected-trip-weather-card-timer-element-type">HOURS</span>
            </div>

            <div className="selected-trip-weather-card-timer-element-wrapper">
                <span className="selected-trip-weather-card-timer-element-time">{timeLeft.minutes}</span>
                <span className="selected-trip-weather-card-timer-element-type">MINUTES</span>
            </div>

            <div className="selected-trip-weather-card-timer-element-wrapper">
                <span className="selected-trip-weather-card-timer-element-time">{timeLeft.seconds}</span>
                <span className="selected-trip-weather-card-timer-element-type">SECONDS</span>
            </div>
        </div>
    );
};

export default CountdownTimer;