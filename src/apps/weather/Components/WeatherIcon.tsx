type WeatherIconProps = {
  weatherStatus: string;
};

function WeatherIcon({ weatherStatus }: WeatherIconProps) {
  return (
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
  );
}

export default WeatherIcon;
