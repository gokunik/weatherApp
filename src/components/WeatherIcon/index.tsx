import { useEffect, useState } from "react";

export const WeatherIcon: React.FC<{ icon: string; className?: string }> = ({
  icon,
  className,
}) => {
  const [image, setImage] = useState<string>("");
  useEffect(() => {
    const dynamicImport = async () => {
      const { default: data } = await import(`../../assets/icons/${icon}.png`);
      setImage(data);
    };

    dynamicImport();
  }, [icon]);
  return <img className={className} src={image} alt="Weather Icon" />;
};
