import { WeatherIcon } from "@/components/WeatherIcon";
import { ForecastData } from "@/types/weatherApiType";
import { getWeeklyForecast } from "@/utils/getWeeklyForecast";

export const WeatherForecast: React.FC<{
  forecaseData: ForecastData;
}> = ({ forecaseData }) => {
  const data = getWeeklyForecast(forecaseData);
  return (
    <div>
      <h2 className="text-[#003339] font-serif font-semibold px-4">
        Weather Forecast
      </h2>
      <div className=" flex rounded-3xl flex-wrap md:flex-nowrap justify-between gap-2 p-4 max-w-96 max-h-96 overflow-x-auto">
        {data.map((item) => {
          return (
            <div
              key={item?.day}
              className=" text-white min-w-[100px] bg-[#003339] rounded flex flex-col justify-center items-center gap-1 p-2 px-4"
            >
              <p className="text-xs">{item?.day}</p>
              <div className="p-1">
                <WeatherIcon icon={item?.icon} className="w-6 h-6" />
              </div>

              <p className="text-xs">{item?.description}</p>
              <p className="text-xs">{item?.minTemp} °C</p>
              <p className="text-xs">{item?.maxTemp} °C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
