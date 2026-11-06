import { getCoordinates, getWeather } from "./weather.js";

async function main() {
  try {
    const city = "Kigali";

    console.log(`Getting weather for ${city}...`);

    const location = await getCoordinates(city);

    const weather = await getWeather(
      location.latitude,
      location.longitude
    );

    console.log("\nAEROVA WEATHER REPORT");
    console.log(`City: ${location.name}`);
    console.log(`Country: ${location.country}`);
    console.log(`Temperature: ${weather.current.temperature_2m}°C`);
    console.log(`Humidity: ${weather.current.relative_humidity_2m}%`);
    console.log(`Wind Speed: ${weather.current.wind_speed_10m} km/h`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

main();