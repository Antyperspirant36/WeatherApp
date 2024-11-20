import {doSmthWithData} from "./getImportantData.js";
const data = await doSmthWithData("Warszawa");
const dataList = data.list;
const prepng = "../icons/";
const png = ".png";
console.log(data);

const setData = () => {
    for (let i = 0; i < 8; i++) {
        const iconSrc = "../icons/" + dataList[i].weather[0].icon + png;
        const img = `<img src="${iconSrc}" alt="Weather Icon" style="max-width: 100px;" class="m-auto">`; 
        document.getElementById(`hour${i+1}`).innerHTML = dataList[i].dt;
        document.getElementById(`iconWeatherTime${1+i}`).innerHTML = img;
        document.getElementById(`temp${i+1}`).innerHTML = dataList[i].main.temp + "°C";
    }
    
}
setData();
