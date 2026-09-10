import { useState } from 'react'

import getWeatherData from './api'
function Weather() {
  const [title, setTitle] = useState("اپلیکیشن آب و هوا")
  const [temperatuer, setTemperatuer] = useState(0)
  const [rain, setRain] = useState(0)
  const [cloudCover, setCloudCover] = useState(0)
  const [weatherStatus, setWeatherStatus] = useState("")
  const [city, setCity] = useState("")

  async function getWeather() {
    try {
      const { temp, rain, cloudCover, cityName } = await getWeatherData(city)

      setTitle(cityName)
      setTemperatuer(temp)
      setRain(rain)
      setCloudCover(cloudCover)

      if (rain > 0) {
        setWeatherStatus("بارانی")
      } else if (cloudCover >= 70) {
        setWeatherStatus("ابری")
      } else if (cloudCover >= 30) {
        setWeatherStatus("نیمه‌ابری")
      } else {
        setWeatherStatus("صاف")
      }

    } catch {
      alert(`اطلاعات دمای شهر ${city} یافت نشد!`)
    }
  }

  return (
    <main
      className="min-h-screen bg-[url(images/weather/bg.jpg)] bg-cover bg-center flex items-center justify-center relative px-4 py-8"
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

        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            getWeather()
          }}
          className="flex gap-2 mb-8"
        >
          <input
            type="text"
            className="
          flex-1
          h-12
          rounded-xl
          border border-white/20
          bg-white/20
          px-4
          text-sm
          text-white
          placeholder:text-white/70
          outline-none
          focus:border-white/50
          focus:bg-white/25
          transition
        "
            placeholder="نام شهر را جستجو کنید..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            type="submit"
            className="
          h-12
          px-5
          rounded-xl
          bg-zinc-900/80
          hover:bg-zinc-900
          active:scale-95
          transition
          cursor-pointer
          font-medium
        "
          >
            جستجو
          </button>
        </form>

        {/* Header */}
        <div className="text-center">

          <p className="text-sm text-white/60 mb-2">
            وضعیت فعلی هوا
          </p>

          <h1 className="text-3xl md:text-4xl font-bold">
            {title}
          </h1>

        </div>

        {/* Weather Icon */}
        <div className="flex justify-center my-6">
          <div
            className="
          w-28 h-28
          rounded-full
          bg-white/10
          border border-white/10
          flex items-center justify-center
          text-7xl
          shadow-inner
        "
          >
            {weatherStatus === "بارانی"
              ? "🌧️"
              : weatherStatus === "ابری"
                ? "☁️"
                : weatherStatus === "نیمه‌ابری"
                  ? "🌤️"
                  : "☀️"}
          </div>
        </div>

        {/* Temperature */}
        <div className="text-center">

          <div className="flex items-start justify-center">
            <span className="text-7xl md:text-8xl font-bold tracking-tight">
              {temperatuer}
            </span>

            <span className="text-2xl mt-3 mr-2">
              °C
            </span>
          </div>

          <p className="mt-3 text-xl font-medium text-white/90">
            {weatherStatus}
          </p>

        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-3 mt-8">

          {/* Cloud Cover */}
          <div
            className="
          rounded-2xl
          bg-white/10
          border border-white/10
          p-4
          text-center
        "
          >
            <div className="text-2xl mb-2">
              ☁️
            </div>

            <p className="text-2xl font-bold">
              {cloudCover}%
            </p>

            <p className="text-sm text-white/60 mt-1">
              پوشش ابر
            </p>
          </div>

          {/* Rain */}
          <div
            className="
          rounded-2xl
          bg-white/10
          border border-white/10
          p-4
          text-center
        "
          >
            <div className="text-2xl mb-2">
              🌧️
            </div>

            <p className="text-2xl font-bold">
              {rain} mm
            </p>

            <p className="text-sm text-white/60 mt-1">
              میزان بارش
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            اطلاعات آب‌وهوا از Open-Meteo
          </p>
        </div>

      </div>
    </main>
  )
}

export default Weather