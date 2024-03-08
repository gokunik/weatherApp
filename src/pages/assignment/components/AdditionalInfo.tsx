import { WeatherData } from "@/types/weatherApiType";

export const AdditionalData: React.FC<{ data: WeatherData }> = ({ data }) => {
  const windSpeed = data.wind.speed; // Precipitation in the last hour (if available)
  const feelLike = data.main.feels_like; // Temperature in Kelvin
  const humidity = data.main.humidity;
  return (
    <div className="w-full h-full p-3">
      <h2 className="text-[#003339] font-serif font-semibold">
        Additional Information
      </h2>
      <div className="w-full h-full text-black flex justify-between items-center gap-1 p-1 px-4">
        <div className="flex flex-col gap-2 justify-center ">
          <p className="text-xs text-[#96969A]">Feels Like</p>
          <p className="text-xs">{feelLike} °C</p>
        </div>
        <div className="flex flex-col gap-2 justify-center ">
          <p className="text-xs text-[#96969A]">Humidity</p>
          <p className="text-xs">{humidity} %</p>
        </div>
        <div className="flex flex-col gap-2 justify-center ">
          <p className="text-xs font-serif text-[#96969A]">Wind Speed</p>
          <p className="text-xs">{windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
};
