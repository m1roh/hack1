const WebcamsController = require('../controllers/weather');

module.exports = (router) => {

  let controller = new WebcamsController();

  router.get('/', (req, res) => controller.getCity(req, res));
};