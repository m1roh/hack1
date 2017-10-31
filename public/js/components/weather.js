'use strict';

angular.module('app')

  .component('weather', {

    templateUrl: 'js/components/weather.html',

    controller: function (WeatherService, $scope, $log) {
      //let city = this.city;
      /**
       * Component controller init
       */
      let body = angular.element(document.querySelector('body'));
      $scope.city = this.city;
      this.$onInit = () => {
        $log.info('Weather component initialized');
        $log.info('Webcam component initialized');
        /* WeatherService.getWebcam().then((webcams) => {
          this.webcams = webcams;
          console.log(this.webcams);
        }).catch((error) => {
          this.error = error;
        }); */

        // get the messages list
        /* WeatherService.getWeather(city).then((weather) => {
          // save the messages list into the controller
          this.weather = weather;
        }).catch((error) => {
          this.error = error;
        }); */
      };

      this.getMeteo = (city) => {
        // save the messages list into the controller
        WeatherService.getWeather(city).then((weather) => {
          let weatherImg;
          let weatherLogo;
          let classes = `'sunnybg', 'nuagesol', 'nuage', 'rain', 'orageeclaire', 'neige', 'fog', 'nigth', 'nigthcloud', 'nightrain', 'nightstorm', 'nightsnow', 'nightfog'`;
          
          body.removeClass(classes);

          switch (weather.weather[0].icon) {

            case '01d':
              this.weatherImg = 'imgs/soleil.gif';
              this.weatherLogo = 'imgs/soleil.png';
              body.removeClass('fog', 'rain', 'snow', 'nuagesol', 'nuage');
              body.addClass('sunnybg');
              break;
            case '02d':
              this.weatherImg = 'imgs/nuage_soleil.gif';
              this.weatherLogo = 'imgs/nuage_soleil.png';
              body.removeClass('fog');
              body.addClass('nuagesol');
              break;
            case '03d':
            case '04d':
              this.weatherImg = 'imgs/nuages.gif';
              this.weatherLogo = 'imgs/nuages.png';
              body.removeClass(!'nuage');
              body.addClass('nuage');
              break;
            case '09d':
            case '10d':
              this.weatherImg = 'imgs/pluie.gif';
              this.weatherLogo = 'imgs/pluie.png';
              body.removeClass(!'rain');
              body.addClass('rain');
              break;
            case '11d':
              this.weatherImg = 'imgs/orage.gif';
              this.weatherLogo = 'imgs/orage.png';
              body.removeClass(!'orageeclaire');
              body.addClass('orageeclaire');
              break;
            case '13d':
              this.weatherImg = 'imgs/neige.gif';
              this.weatherLogo = 'imgs/neige.png';
              body.removeClass(!'neige');
              body.addClass('neige');
              break;
            case '50d':
              this.weatherImg = 'imgs/brume.gif';
              this.weatherLogo = 'imgs/brume.png';
              body.removeClass(!'fog');
              body.addClass('fog');
              break;
            case '01n':
              this.weatherImg = 'imgs/lune.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.removeClass();
              body.addClass('night');
              break;
            case '02n':
            case '03n':
            case '04n':
              this.weatherImg = 'imgs/lune_nuages.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.removeClass();
              body.addClass('nigthcloud');
              break;
            case '09n':
            case '10n':
              this.weatherImg = 'imgs/lune_pluie.gif'
              this.weatherLogo = 'imgs/nuit.png';
              body.removeClass();
              body.addClass('nightrain');
              break;
            case '11n':
              this.weatherImg = 'imgs/lune_orage.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.removeClass();
              body.addClass('nightstorm');
              break;
            case '13n':
              this.weatherImg = 'imgs/lune_neige.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.removeClass();
              body.addClass('nightsnow');
              break;
            case '50n':
              this.weatherImg = 'imgs/lune_brume.gif';
              this.weatherLogo = 'imgs/nuit.gif';
              body.removeClass();
              body.addClass('nightfog');
              break;
            default:
              this.weatherImg = 'imgs/logo.png';
              this.weatherLogo = 'imgs/logo.png';
              body.removeClass();
              break;
          }

          /* this.weatherImg = weatherImg;
          this.weatherLogo = weatherLogo; */
          this.weather = weather;
        }).then(() => {
          WeatherService.getWebcam(this.weather.coord.lat, this.weather.coord.lon)
            .then((webcams) => {
              this.webcams = webcams;
              console.log(this.webcams);
            })
        }).catch((error) => {
          this.error = error;
        });
      };
      this.$onChanges = function (changes) {
        if(this.webcams !=0){
          console.log(changes);
        }
      };
    }
  });