
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const dataDirectory = path.join(os.homedir(), ".aerova");

async function ensureDataDirectory() {
  await mkdir(dataDirectory, { recursive: true });
}

async function loadData(fileName, defaultValue) {
  await ensureDataDirectory();

  const filePath = path.join(dataDirectory, fileName);

  try {
    const content = await readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      return defaultValue;
    }

    throw error;
  }
}

async function saveData(fileName, data) {
  await ensureDataDirectory();

  const filePath = path.join(dataDirectory, fileName);

  await writeFile(
    filePath,
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}

export async function addToHistory(entry) {
  const history = await loadData("history.json", []);

  history.push({
    ...entry,
    searchedAt: new Date().toISOString()
  });

  await saveData("history.json", history);
}

export async function getHistory() {
  return await loadData("history.json", []);
}

export async function addFavorite(city) {
  const favorites = await loadData("favorites.json", []);

  const alreadyExists = favorites.some(
    favorite => favorite.toLowerCase() === city.toLowerCase()
  );

  if (!alreadyExists) {
    favorites.push(city);
    await saveData("favorites.json", favorites);
  }

  return favorites;
}

export async function getFavorites() {
  return await loadData("favorites.json", []);
}

export async function getSettings() {
  return await loadData("settings.json", {});
}

export async function saveSettings(settings) {
  await saveData("settings.json", settings);
}
