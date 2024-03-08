/* eslint-disable @typescript-eslint/no-explicit-any */
import { ForecastData } from "@/types/weatherApiType";
import { WeatherData } from "@/types/weatherApiType";
import axios from "axios";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/";

// import { createClient } from "pexels";

// const client = createClient(import.meta.env.VITE_PIXELS_API_KEY);

const weatherInstance = axios.create({
  baseURL: WEATHER_API_URL,
});

const geoInstance = axios.create({
  baseURL: GEO_API_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_GEO_DATA_API,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});

const photoInstance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: import.meta.env.VITE_PIXELS_API_KEY,
  },
});

export const getWeather = async (coords: {
  lat: number;
  lon: number;
}): Promise<WeatherData> => {
  return await weatherInstance
    .get(
      `weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${
        import.meta.env.VITE_OPEN_WEATHER_KEY
      }`
    )
    .then((res) => res.data);
};

export const getForecast = async (coords: {
  lat: number;
  lon: number;
}): Promise<ForecastData> => {
  return await weatherInstance
    .get(
      `forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${
        import.meta.env.VITE_OPEN_WEATHER_KEY
      }`
    )
    .then((res) => res.data);
};

export const getWeatherData = async (coords: { lat: number; lon: number }) => {
  return await Promise.all([getWeather(coords), getForecast(coords)]);
};

export const getGeoData = async (locationInput: any) => {
  return await geoInstance
    .get(`cities?minPopulation=10000&namePrefix=${locationInput}`)
    .then((res) => res.data);
};

export const getPhotos = async (query: any) => {
  return photoInstance
    .get(`search?query=${query}&per_page=50&page=1&orientation=landscape`)
    .then((response) => response.data);

  // return (await client.photos.search({
  //   query,
  //   per_page: 50,
  //   orientation: "landscape",
  // })) as any;
};
