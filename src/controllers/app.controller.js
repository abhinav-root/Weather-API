const { getWeather } = require("../services/app.service");

const router = require("express").Router();

router.post("/getWeather", getWeather);

module.exports = router;
