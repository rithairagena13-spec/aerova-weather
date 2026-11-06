# 🌤️ AEROVA — Beyond the Forecast

**Weather intelligence from your terminal.**

AEROVA is a Node.js command-line weather application that retrieves weather information for cities around the world. It uses the Open-Meteo Geocoding API to locate cities and the Open-Meteo Forecast API to retrieve weather data.

Its purpose is to make weather information accessible directly from your terminal while demonstrating practical Node.js concepts, asynchronous programming, API integration, error handling, and JSON file storage.

---

## ✨ Features

- 🌍 Search weather information by city.
- 🌡️ Display temperature, humidity, and wind speed.
- 🔗 Make chained HTTP requests using native Node.js `fetch()`.
- 📍 Convert city names into geographical coordinates.
- ⭐ Save and view favorite cities.
- 📜 Store and display search history.
- ⚙️ Save and view application settings.
- 💾 Persist information using JSON files.
- 🌐 Configure a default city using environment variables.
- ⚠️ Handle invalid input, missing cities, network errors, and request timeouts.
- 💻 Run AEROVA directly from the terminal using its CLI command.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| JavaScript ES Modules | Application structure |
| Native Fetch API | HTTP requests |
| Open-Meteo Geocoding API | City search and coordinates |
| Open-Meteo Forecast API | Weather information |
| `node:util` | Command-line argument parsing |
| `node:fs/promises` | Reading and writing JSON files |
| `node:path` | File path management |
| `node:os` | Accessing the user's home directory |
| `process` | Environment variables and exit codes |

---

## 📦 Installation

### Prerequisites

- Node.js (version 20 or later recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rithairagena13-spec/aerova-weather.git
```

### 2. Navigate into the project

```bash
cd aerova-weather
```

### 3. Install the package

```bash
npm install
```

### 4. Link the CLI command

```bash
npm link
```

After linking, you can run AEROVA using the `aerova` command from your terminal.

---

## 🚀 Usage

### 1. Get weather information

Search for a city's weather:

```bash
aerova Kigali
```

You can also use:

```bash
npm start -- Kigali
```

AEROVA displays the city, country, temperature, humidity, and wind speed.

### 2. Search for another city

```bash
aerova London
```

### 3. Add a favorite city

```bash
aerova favorite Kigali
```

### 4. View favorite cities

```bash
aerova favorites
```

### 5. View search history

```bash
aerova history
```

### 6. Save an application setting

```bash
aerova set defaultCity Kigali
```

### 7. View application settings

```bash
aerova settings
```

---

## 🌐 Environment Variables

AEROVA supports environment variables for configuration.

Set a default city in PowerShell:

```powershell
$env:AEROVA_DEFAULT_CITY = "Kigali"
```

Now run:

```bash
aerova
```

AEROVA uses Kigali as the default city.

You can still provide another city to override the default:

```bash
aerova Huye
```

**Note:** The PowerShell environment variable applies to the current terminal session.

---

## 🔄 How AEROVA Works

AEROVA uses two connected API requests to retrieve weather information.

1. **Geocoding request:** The application sends the city name to the Open-Meteo Geocoding API.
2. **Coordinate retrieval:** The API returns the city's geographical coordinates (latitude and longitude).
3. **Forecast request:** AEROVA sends those coordinates to the Open-Meteo Forecast API.
4. **Weather response:** The forecast API returns current weather information.
5. **Terminal output:** AEROVA displays the retrieved information in a readable table and saves the search to history.

This process demonstrates asynchronous JavaScript and chained HTTP requests.

---

## ⚠️ Error Handling

AEROVA provides friendly error messages for common problems.

| Situation | Error handling |
|---|---|
| Missing city name | Requests the user to provide a city |
| City not found | Displays a city-not-found message |
| Internet connection failure | Displays a connection error |
| Request timeout | Displays a timeout message |
| Invalid command arguments | Displays usage instructions |

The application also uses `process.exitCode = 1` when an operation fails, allowing the terminal to recognize unsuccessful execution.

---

## 💾 Data Persistence

AEROVA stores application data in a hidden `.aerova` directory inside the user's home directory.

The application automatically creates the directory and JSON files when data is saved.

| File | Purpose |
|---|---|
| `history.json` | Stores previous weather searches |
| `favorites.json` | Stores favorite cities |
| `settings.json` | Stores application settings |

The application uses Node.js `fs/promises` to read and write JSON data.

---

## 🧩 Node.js Core Modules

The project demonstrates the use of the following Node.js core modules:

- **process:** Accesses environment variables and manages application exit codes.
- **util.parseArgs:** Reads and processes command-line arguments.
- **fs/promises:** Handles asynchronous file operations.
- **path:** Creates and manages file paths.
- **os:** Retrieves the user's home directory.

---

## 🎬 Project Walkthrough

Follow this walkthrough to explore AEROVA's main features.

**Step 1 — Install AEROVA**

```bash
npm install
npm link
```

**Step 2 — Search for weather**

```bash
aerova Kigali
```

**Step 3 — Save a favorite city**

```bash
aerova favorite Musanze
```

**Step 4 — Display favorite cities**

```bash
aerova favorites
```

**Step 5 — Display search history**

```bash
aerova history
```

**Step 6 — Configure a default city**

```bash
aerova set defaultCity Kigali
```

**Step 7 — View saved settings**

```bash
aerova settings
```

These steps demonstrate how to install, configure, and use the main features of AEROVA.

---

## 🌍 APIs Used

AEROVA uses the following free weather APIs from Open-Meteo:

- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- [Open-Meteo Forecast API](https://open-meteo.com/en/docs)

---

## 📁 Project Structure

```text
aerova-weather/
│
├── src/
│   ├── index.js
│   ├── weather.js
│   └── storage.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 👩‍💻 Author

**Ritha IRAGENA**

GitHub: [@rithairagena13-spec](https://github.com/rithairagena13-spec)

---

## 📄 License

This project is licensed under the MIT License.
