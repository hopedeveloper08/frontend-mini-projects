async function getGeoData(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city
  )}&count=5&language=fa&format=json`

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json()
    return result.results[0]

  } catch (error) {
    console.error(error.message);
  }
}

async function getWeatherData(city) {
  const location = await getGeoData(city)
  const name = `${location.country}، ${location.name}`;
  const latitude = location.latitude;
  const longitude = location.longitude;

  try {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,cloud_cover&timezone=Asia%2FTehran`
    );

    const weather = await weatherResponse.json();

    return { temp: weather.current.temperature_2m, cityName: name, rain: weather.current.rain, cloudCover: weather.current.cloud_cover }

  } catch (error) {
    console.error(error.message);
  }
}

export default getWeatherData
