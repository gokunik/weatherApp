/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";

import { getGeoData, getPhotos, getWeatherData } from "./api";

export const useGetWeatherData = (coords: { lat: number; lon: number }) => {
  return useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeatherData(coords),
  });
};

export const useGetPhotos = (query: string) => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: () => getPhotos(query),
  });
};

export const useGetGeoData = (locationInput: string, enabled: boolean) => {
  return useQuery({
    queryKey: ["geo"],
    queryFn: () => getGeoData(locationInput),
    retry: 0,
    enabled,
  });
};
