// A react hook to get user location using the browser api
// returns status (success or error) and location (latitude and longitude)

import { useEffect, useState } from "react";

export const useGetUserLocation = () => {
  const [location, setLocation] = useState<{
    lat: number;
    lon: number;
  }>();
  const [status, setStatus] = useState<"success" | "error">();

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("success");
          const { latitude, longitude } = position.coords;

          setLocation({
            lat: latitude,
            lon: longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
          setStatus("error");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setStatus("error");
    }
  };

  useEffect(() => {
    getUserLocation();
  });

  return { location, status, getUserLocation };
};
