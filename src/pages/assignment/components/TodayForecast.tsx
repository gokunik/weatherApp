import { WeatherIcon } from "@/components/WeatherIcon";
import { ForecastItem } from "@/types/weatherApiType";

export const ForecastSection: React.FC<{ forecaseData: ForecastItem[] }> = ({
  forecaseData,
}) => {
  const filteredData = forecaseData.filter(
    (item) => new Date(item.dt_txt).getDate() === new Date().getDate()
  );

  const data = filteredData.map((item) => {
    return {
      time: item.dt_txt.split(" ")[1].substring(0, 5),
      icon: item.weather[0].icon,
      temperature: item.main.temp,
    };
  });

  return (
    <div className="bg-[#003339] flex justify-center rounded-3xl p-4 max-h-24">
      {data.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          No forecaste data available
        </div>
      ) : (
        <div className="flex">
          {data.map((item) => {
            return (
              <div
                key={item?.time}
                className=" text-white flex flex-col justify-center items-center gap-1 p-1 px-4"
              >
                <p className="text-xs">{item?.time}</p>
                <div className="p-1">
                  <WeatherIcon icon={item?.icon} className="w-6 h-6" />
                </div>

                <p className="text-xs">{item?.temperature}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
