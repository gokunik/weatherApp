import { HomeRedirect } from "@/components/HomeRedirect";
import { Transition } from "@/components/Trasition";
import { useGetPhotos, useGetWeatherData } from "@/services/queries";
import { EnteredData, OnSearchChange } from "@/types";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { TopBar } from "./components/TopBar";
import {
  DEFAULT_LOCATION,
  DEFAULT_LOCATION_DATA,
  DEFAULT_LOCATION_NAME,
} from "@/const";
import defaultBg from "@/assets/images/default_bg.jpeg";
import { Head } from "./components/Head";
import { ForecastSection } from "./components/TodayForecast";
import { AdditionalData } from "./components/AdditionalInfo";
import { WeatherForecast } from "./components/WeatherForecast";

export const Assignment: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<string>(
    DEFAULT_LOCATION_NAME
  );
  const [locationData, setLocationData] = useState<EnteredData>(
    DEFAULT_LOCATION_DATA
  );
  const [coords, setCoords] = useState<{ lat: number; lon: number }>(
    DEFAULT_LOCATION
  );

  const [photoLoading, setPhotoLoading] = useState<boolean>(false);

  const bgRef = useRef<HTMLDivElement>(null);

  const [photoURL, setPhotoURL] = useState<string>("");

  const {
    data: weatherData,
    isLoading: weatherDataIsLoading,
    isFetching: weatherDataIsFetching,
    refetch: refetchWeather,
  } = useGetWeatherData(coords);

  const {
    data: photoData,
    isLoading: photoDataIsLoading,
    isFetching: photoDataIsFetching,
    refetch: refetchPhotos,
  } = useGetPhotos(currentLocation);

  const onSearchChange: OnSearchChange = (enteredData: EnteredData) => {
    setLocationData({
      label: enteredData.label.split(", ")[0],
      region: enteredData.region,
      value: enteredData.value,
      country: enteredData.country,
    });
    const coordinates = enteredData.value.split(" ");
    setCoords({
      lat: Number(coordinates[0]),
      lon: Number(coordinates[1]),
    });
    setCurrentLocation(enteredData.region ?? enteredData.label);
  };

  const onImageLoad = () => {
    if (bgRef.current !== null) {
      bgRef.current.style.backdropFilter = "blur(5px)";
      setTimeout(() => {
        if (bgRef.current !== null) {
          bgRef.current.style.backgroundImage = `url(${photoURL})`;
          bgRef.current.style.backdropFilter = "blur(0px)";
        }
      }, 600);

      setPhotoLoading(false);
    }
  };

  useEffect(() => {
    if (!photoDataIsFetching && !weatherDataIsFetching) {
      if (photoData === undefined) return;
      const randomIndex = Math.floor(Math.random() * photoData.photos.length);
      setPhotoURL(photoData.photos[randomIndex].src.large2x);
    }
  }, [photoDataIsFetching, weatherDataIsFetching]);

  useEffect(() => {
    refetchWeather();
    refetchPhotos();
    setPhotoLoading(true);
  }, [currentLocation, JSON.stringify(coords)]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${defaultBg})` }}
        ref={bgRef}
        className="min-h-screen w-screen flex justify-center items-center  bg-cover bg-center transition-[background-image] duration-[0.5s]"
      >
        {photoDataIsLoading ||
        weatherDataIsLoading ||
        weatherData === undefined ? (
          <Spinner width="100%" height="100px" />
        ) : (
          <div className="relative w-full min-h-screen md:h-min md:min-h-max md:max-w-[500px] shadow-lg p-1 md:px-4 md:py-2  mx-autoh-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm md:bg-opacity-95 bg-opacity-100 border border-gray-100">
            {weatherDataIsFetching && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg z-50 flex justify-center items-center">
                <Spinner width="60px" height="60px" />
              </div>
            )}
            <TopBar onSearchChange={onSearchChange} />
            <Head
              info={{
                locationData,
                photoURL,
                weatherData: {
                  icon: weatherData?.[0].weather[0].icon ?? "unknown",
                  description:
                    weatherData?.[0].weather[0].description ?? "unknown",
                  temperature: weatherData?.[0].main.temp ?? 0,
                },
              }}
              photoIsLoading={photoLoading}
            />
            <div className="mt-4">
              <ForecastSection forecaseData={weatherData[1].list} />
            </div>
            <div className="my-5 border-y">
              <AdditionalData data={weatherData[0]} />
            </div>
            <div className="mt-4">
              <WeatherForecast forecaseData={weatherData[1]} />
            </div>
          </div>
        )}
        <img
          src={photoURL}
          alt="background"
          onLoad={onImageLoad}
          style={{
            position: "fixed",
            top: "-9999px", // Position off-screen
            left: "-9999px",
          }}
        />
      </div>

      <HomeRedirect />
      <Transition className="slide slide-in" />
    </>
  );
};
