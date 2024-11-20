import { getCityCoordinates} from "./getCityCoordinates.js";
import { getWeatherData } from "./getWeatherData.js";
import { timestampToDate } from "./uniTimestampToDate.js";

const doSmthWithData = async (cityName) => {
    try {
        const coordinates = await getCityCoordinates(cityName);
        const data = await getWeatherData(coordinates.lat, coordinates.lon);
        console.log(data);
        const newData = data.list.map(time => {
            return {
                ...time,
                dt: timestampToDate(time.dt)
            };
        });
        console.log(newData);
        return newData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export {doSmthWithData};