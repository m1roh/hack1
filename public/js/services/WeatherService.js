'use strict';

angular.module('app')

  .service('WeatherService', function ($http, $q) {
    //  let town = this.city;
    let key = '82eec39816078d51bc7412103fbd8a91';

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=`;
    let CAM_API_URL = 'https://webcamstravel.p.mashape.com/webcams/list/nearby='
    let options = '?lang=en&show=webcams%3Aimage%2Clocation%2Curl';

    this.getWeather = (city) => {
      var defer = $q.defer();
      $http.get(API_URL + `${city}&units=metric&lang=fr&appid=${key}`).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    };

    this.getWebcam = (lat, long) => {
      var defer = $q.defer();
      console.log(`${CAM_API_URL}${lat},${long},1${options}`);
      $http.get(`${CAM_API_URL}${lat},${long},1${options}`, {
        headers: {'X-Mashape-Key': 'e2RQ2OkMmOmshDfJ0Cg5HME59VHfp1hYFwSjsnwjtXgHEDqWkl'}
      }).then((response) => {
        defer.resolve(response.data.result.webcams);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    };

  });