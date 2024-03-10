import { WeatherIcon } from "@/components/WeatherIcon";
import { MONTH_NAMES } from "@/const";
import { EnteredData } from "@/types";
import { Spinner } from "@material-tailwind/react";

export const Head: React.FC<{
  photoIsLoading: boolean;
  info: {
    locationData: EnteredData;
    photoURL: string;
    weatherData: {
      description: string;
      icon: string;
      temperature: number;
    };
  };
}> = ({ info, photoIsLoading }) => {
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();

    const year = date.getFullYear();
    return `${MONTH_NAMES[month]} ${day}, ${year}`;
  };

  return (
    <div className="flex gap-2 justify-between px-4 mt-6 md:mt-5">
      <div className="font-serif max-w-[50%]">
        <h1
          className={`
          ${info.locationData.label.length > 10 && "text-2xl"}
          ${info.locationData.label.length > 15 && "text-xl"}
          ${info.locationData.label.length > 20 && "text-md"}
          
          text-3xl font-bold text-[#003339]`}
        >
          {info.locationData.label}
        </h1>
        <p
          className={`${
            info.locationData.country.length > 10 ? "text-sm" : "text-xl"
          } mt-1`}
        >
          {info.locationData.country}
        </p>
        <p className="text-sm text-gray-600">{getCurrentDate()}</p>
        <p className=" mt-2">{info.weatherData.temperature} °C</p>
        <p className="flex gap-2 items-center">
          {info.weatherData.description}{" "}
          <span>
            <WeatherIcon
              className=" w-5 bg-blue-gray-900 rounded"
              icon={info.weatherData.icon}
            />
          </span>
        </p>
      </div>
      <div className="w-[140px] h-[120px] relative">
        {!photoIsLoading ? (
          <>
            <img
              src={info.photoURL}
              className="rounded-2xl object-cover border w-full h-full"
              alt=""
            />
            <span className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-0.5 rounded-lg text-sm">
              Live
            </span>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};
