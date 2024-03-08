/* eslint-disable @typescript-eslint/no-explicit-any */
import { ForecastData } from "@/types/weatherApiType";

export function getWeeklyForecast(forecastData: ForecastData) {
  const dailyInfo: {
    day: string;
    icon: string;
    description: string;
    minTemp: number;
    maxTemp: number;
  }[] = [];

  const groupedForecast: Record<string, any> = {};
  forecastData.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!groupedForecast[date]) {
      groupedForecast[date] = [];
    }
    groupedForecast[date].push(item);
  });

  Object.keys(groupedForecast).forEach((date) => {
    const forecastItems = groupedForecast[date];
    const dailyInfoItem: {
      day: string;
      icon: string;
      description: string;
      minTemp: number;
      maxTemp: number;
    } = {
      day: "",
      icon: "",
      description: "",
      minTemp: Number.MAX_SAFE_INTEGER,
      maxTemp: Number.MIN_SAFE_INTEGER,
    };

    // Determine day (today, tomorrow, etc.)
    const currentDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    if (currentDate.toDateString() === today.toDateString()) {
      dailyInfoItem.day = "today";
    } else if (currentDate.toDateString() === tomorrow.toDateString()) {
      dailyInfoItem.day = "tomorrow";
    } else {
      dailyInfoItem.day = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
      });
    }

    dailyInfoItem.icon = forecastItems[0].weather[0].icon;
    dailyInfoItem.description = forecastItems[0].weather[0].main;

    forecastItems.forEach(
      (item: { main: { temp_min: number; temp_max: number } }) => {
        dailyInfoItem.minTemp = Math.min(
          dailyInfoItem.minTemp,
          item.main.temp_min
        );
        dailyInfoItem.maxTemp = Math.max(
          dailyInfoItem.maxTemp,
          item.main.temp_max
        );
      }
    );

    dailyInfo.push(dailyInfoItem);
  });

  return dailyInfo;
}
