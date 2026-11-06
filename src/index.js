
import { parseArgs } from "node:util";
import { getCoordinates, getWeather } from "./weather.js";

async function main() {
  try {
    const { positionals } = parseArgs({
      allowPositionals: true
    });

    const city = positionals.join(" ");

    if (!city) {
      console.log("Usage: npm start -- <city>");
      process.exitCode = 1;
      return;
    }

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
    if (error.name === "TimeoutError") {
      console.error("Error: The request took too long. Please try again.");
    } else if (error instanceof TypeError) {
      console.error("Error: Unable to connect to the internet. Please check your connection and try again.");
    } else {
      console.error(`Error: ${error.message}`);
    }

    process.exitCode = 1;
  }
}

main();