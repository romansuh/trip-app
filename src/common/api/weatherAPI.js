const API_KEY = "S6U4YGBJA23EM25EGMLDSM83F";

export const createFromToWeatherQuery = (address, date1, date2) => {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}/${date1}/${date2}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
}

export const createTodayWeatherQuery = (address) => {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
}