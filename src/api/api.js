import * as axios from "axios";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
export const cityWeatherAPI={
    showWeather:(cityName)=>{
        return axios.get(
           `${baseUrl}q=${cityName},{state%20code}&appid=2d9d809ecaea6a6c46ae044067edba81`,
          );
    }
}

export const cityProfileAPI={
    showWeather:(cityId)=>{
        return axios.get(
            `${baseUrl}id=${cityId}&appid=2d9d809ecaea6a6c46ae044067edba81`,
          );
    }
}
