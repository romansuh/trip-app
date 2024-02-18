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
            <div>
                <span>{timeLeft.days}</span> days{' '}
                <span>{timeLeft.hours}</span> hours{' '}
                <span>{timeLeft.minutes}</span> minutes{' '}
                <span>{timeLeft.seconds}</span> seconds
            </div>
        </div>
    );
};

export default CountdownTimer;