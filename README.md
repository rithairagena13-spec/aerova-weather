# 🌤️ AEROVA — Beyond the Forecast

**Weather intelligence from your terminal.**

AEROVA is a Node.js command-line weather application that retrieves real-time weather information for locations around the world. It uses the Open-Meteo API and provides a simple terminal experience.

## ✨ Features

- Search current weather by city or district.
- Display temperature, humidity, and wind speed.
- Save search history in JSON.
- Add and view favorite cities.
- Save and view user settings.
- Configure a default city using environment variables.
- Handle invalid input, network errors, and request timeouts.
- Run directly from the terminal using the `aerova` command.

## 🛠️ Technologies

- Node.js
- JavaScript (ES Modules)
- Native Fetch API
- Node.js core modules (`util`, `fs/promises`, `path`, `os`, and `process`)
- Open-Meteo Geocoding API
- Open-Meteo Forecast API
- JSON file storage

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/rithairagena13-spec/aerova-weather.git
```

### 2. Navigate into the project

```bash
cd aerova-weather
```

### 3. Install dependencies

```bash
npm install
```

### 4. Link the CLI locally

```bash
npm link
```

## 🚀 Usage

### Get weather information

```bash
aerova Kigali
```

You can also use:

```bash
npm start -- Kigali
```

### Use a default city

In PowerShell:

```powershell
$env:AEROVA_DEFAULT_CITY = "Huye"
```

Then run:

```bash
aerova
```

### Search history

```bash
aerova history
```

### Add a favorite city

```bash
aerova favorite Kigali
```

### View favorite cities

```bash
aerova favorites
```

### Save a setting

```bash
aerova set defaultCity Kigali
```

### View settings

```bash
aerova settings
```

## 💾 Data Storage

AEROVA stores user data in a `.aerova` directory inside the user's home directory.

The application automatically creates JSON files for:

- `history.json`
- `favorites.json`
- `settings.json`

## 🌍 Weather Data Sources

AEROVA uses the following Open-Meteo services:

- [Open-Meteo Geocoding API](https://geocoding-api.open-meteo.com/)
- [Open-Meteo Forecast API](https://open-meteo.com/)

## 👩‍💻 Author

**Ritha IRAGENA**

GitHub: [rithairagena13-spec](https://github.com/rithairagena13-spec)

## 📄 License

This project is licensed under the MIT License.

---

**AEROVA — Beyond the Forecast.**