import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import fetchWeatherData from "./api";

import Search from "./Components/Search";
import Header from "./Components/Header";
import WeatherIcon from "./Components/WeatherIcon";
import CloudCover from "./Components/CloudCover";
import Rain from "./Components/Rain";
import Footer from "./Components/Footer";
import Temperature from "./Components/Temperature";

function Weather() {
  const [title, setTitle] = useState("اپلیکیشن آب و هوا");
  const [temperature, setTemperature] = useState(0);
  const [rain, setRain] = useState(0);
  const [cloudCover, setCloudCover] = useState(0);
  const [weatherStatus, setWeatherStatus] = useState("");
  const [city, setCity] = useState("");

  async function getWeather() {
    const { temp, rain, cloudCover, cityName } = await fetchWeatherData(city);

    setTitle(cityName);
    setTemperature(temp);
    setRain(rain);
    setCloudCover(cloudCover);

    if (rain > 0) {
      setWeatherStatus("بارانی");
    } else if (cloudCover >= 70) {
      setWeatherStatus("ابری");
    } else if (cloudCover >= 30) {
      setWeatherStatus("نیمه‌ابری");
    } else {
      setWeatherStatus("صاف");
    }
  }

  return (
    <main
      className="min-h-screen bg-[url(/images/weather/bg.jpg)] bg-cover bg-center flex items-center justify-center relative px-4 py-8"
      dir="rtl"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Weather Card */}
      <div
        className="
      relative w-full max-w-md
      rounded-3xl
      border border-white/20
      bg-white/10
      backdrop-blur-xl
      shadow-2xl shadow-black/20
      p-6 md:p-8
      text-white
    "
      >
        <Search onSearch={getWeather} city={city} onCityChange={setCity} />
        <Header title={title} />
        <WeatherIcon weatherStatus={weatherStatus} />
        <Temperature temperature={temperature} weatherStatus={weatherStatus} />
        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <CloudCover cloudCover={cloudCover} />
          <Rain rain={rain} />
        </div>
        <Footer />
      </div>
      <Toaster />
    </main>
  );
}

export default Weather;
