const WeatherController = require('../controllers/weather');

module.exports = (router) => {

  let controller = new WeatherController();

  router.get('/', (req, res) => controller.getWeather(req, res));
};