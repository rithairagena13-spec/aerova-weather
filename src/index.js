
import {addToHistory, getHistory, addFavorite, getFavorites, getSettings, saveSettings} from "./storage.js";
import { parseArgs } from "node:util";
import { getCoordinates, getWeather } from "./weather.js";

async function main() {
  try {
    const { positionals } = parseArgs({
      allowPositionals: true
    });

    const city = positionals.join(" ") || process.env.AEROVA_DEFAULT_CITY;
    if (positionals[0] === "settings") {
  const settings = await getSettings();
  console.log("\nAEROVA SETTINGS");
  if (Object.keys(settings).length === 0) {
    console.log("No settings configured yet.");
  } else {
    console.table(
      Object.entries(settings).map(([key, value]) => ({
        Setting: key,
        Value: value
      }))
    );
  }

  return;
}

if (positionals[0] === "set") {
  const settingName = positionals[1];
  const settingValue = positionals.slice(2).join(" ");

  if (!settingName || !settingValue) {
    console.log("Usage: npm start -- set <setting> <value>");
    process.exitCode = 1;
    return;
  }

  const settings = await getSettings();

  settings[settingName] = settingValue;

  await saveSettings(settings);

  console.log(`Setting "${settingName}" saved successfully!`);

  return;
}

    if (positionals[0] === "favorite") {
  const favoriteCity = positionals.slice(1).join(" ").trim();

  if (!favoriteCity) {
    console.log("Usage: npm start -- favorite <city>");
    process.exitCode = 1;
    return;
  }

  const favorites = await addFavorite(favoriteCity);

  console.log(`⭐ ${favoriteCity} saved to favorites!`);
  return;
}

if (positionals[0] === "favorites") {
  const favorites = await getFavorites();

  if (favorites.length === 0) {
    console.log("No favorite cities saved yet.");
  } else {
    console.log("\nAEROVA FAVORITE CITIES");
    console.table(favorites.map((city, index) => ({
      No: index + 1,
      City: city
    })));
  }

  return;
}
    if (positionals[0] === "history") {
  const history = await getHistory();

  if (history.length === 0) {
    console.log("No search history available.");
  } else {
    console.log("\nAEROVA SEARCH HISTORY");
    console.table(
      history.map((item, index) => ({
        No: index + 1,
        City: item.city,
        Country: item.country,
        Temperature: `${item.temperature}°C`,
        Date: new Date(item.searchedAt).toLocaleString()
      }))
    );
  }

  return;
}
    if (!city || !city.trim()) {
  console.error("Error: Please provide a city name.");
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
    await addToHistory({
  city: location.name,
  country: location.country,
  temperature: weather.current.temperature_2m
});

    console.log("\nAEROVA WEATHER REPORT");

console.table([
  { "Weather Detail": "City", Value: location.name },
  { "Weather Detail": "Country", Value: location.country },
  { "Weather Detail": "Temperature", Value: `${weather.current.temperature_2m}°C` },
  { "Weather Detail": "Humidity", Value: `${weather.current.relative_humidity_2m}%` },
  { "Weather Detail": "Wind Speed", Value: `${weather.current.wind_speed_10m} km/h` }
]);

console.log("Beyond the Forecast.");
    
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