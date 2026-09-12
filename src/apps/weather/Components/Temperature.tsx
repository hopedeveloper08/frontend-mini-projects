type TemperatureProps = {
  temperature: number;
  weatherStatus: string;
};

function Temperature({ temperature, weatherStatus }: TemperatureProps) {
  return (
    <div className="text-center">
      <div className="flex items-start justify-center">
        <span className="text-7xl md:text-8xl font-bold tracking-tight">
          {temperature}
        </span>

        <span className="text-2xl mt-3 mr-2">°C</span>
      </div>

      <p className="mt-3 text-xl font-medium text-white/90">
        {weatherStatus}
      </p>
    </div>
  );
}

export default Temperature;
