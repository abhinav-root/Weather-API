const { default: axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const getWeather = async (req, res) => {
  const { cities } = req.body;
  if (!cities || !Array.isArray(cities) || cities.length == 0) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const weather = await getWeatherOfCities(cities);
  return res.json({ weather });
};

const getWeatherOfCities = async (cities) => {
  const result = [];
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  try {
    for (let city of cities) {
      city = city.toLowerCase();
      console.log({ city });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const temperatureInCelsius = response.data.main.temp + "C";
      result.push({ [city]: temperatureInCelsius });
    }
  } catch (err) {
    console.log(err);
  }
  return result;
};

module.exports = { getWeather };
