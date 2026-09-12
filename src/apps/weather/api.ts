type WeatherData = {
  cityName: string;
  temp: number;
  rain: number;
  cloudCover: number;
};

async function fetchGeoData(city: string) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=5&language=fa&format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

async function fetchWeatherData(city: string): Promise<WeatherData> {
  const geoData = await fetchGeoData(city);

  const location = geoData.results?.[0];

  if (!location) {
    throw new Error(`City "${city}" not found`);
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,rain,cloud_cover&timezone=Asia%2FTehran`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  const data = await response.json();

  return {
    cityName: `${location.country}، ${location.name}`,
    temp: data.current.temperature_2m,
    rain: data.current.rain,
    cloudCover: data.current.cloud_cover,
  };
}

export default fetchWeatherData;
