'use strict';


angular.module('app')

  .service('WebcamsService', function ($http, $q) {

    const API_URL = ('https://webcamstravel.p.mashape.com/webcams/list/country=FR?lang=en&show=webcams%3Aimage%2Clocation%2Curl')
    /**
     * Get all webcams from the server
     */
    this.getWebcam = () => {
      var defer = $q.defer();
      $http.get(API_URL, {
        headers: {'X-Mashape-Key': 'e2RQ2OkMmOmshDfJ0Cg5HME59VHfp1hYFwSjsnwjtXgHEDqWkl'}
      }).then((response) => {
        defer.resolve(response.data.result.webcams);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    };
  });