'use strict';

angular.module('app')

  .service('WeatherService', function ($http, $q) {
    // let town = this.city;
    let key = '82eec39816078d51bc7412103fbd8a91';

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=`

    this.getWeather = (city) => {
      var defer = $q.defer();
      $http.get(API_URL + `${city},FR&units=metric&lang=fr&appid=${key}`).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    };

  });