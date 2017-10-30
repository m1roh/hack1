class WeatherController {
  
    getWeather(req, res) {
      models.message.create(req.body).then((message) => {
        res.json(message);
      }).catch((error) => {
        res.status(400).send(error.message);
      });
    }
  
  };
  
  module.exports = MessagesController;