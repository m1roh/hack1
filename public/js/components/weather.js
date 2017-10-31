'use strict';

angular.module('app')

  .component('weather', {

    templateUrl: 'js/components/weather.html',

    controller: function (WeatherService, $log) {
      //let city = this.city;
      /**
       * Component controller init
       */
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

          switch (weather.weather[0].icon) {
            case '01d':
              this.weatherImg = 'imgs/soleil.gif';
              this.weatherLogo = 'imgs/soleil.png';
/*               body.style.background = '#EECB6A'; */
              break;
            case '02d':
              this.weatherImg = 'imgs/nuage_soleil.gi';
              this.weatherLogo = 'imgs/nuage_soleil.png';
              /* body.style.background = '#CDAF79'; */
              break;
            case '03d':
            case '04d':
              this.weatherImg = 'imgs/nuages.gif';
               this.weatherLogo ='imgs/nuages.png';
          /*     body.style.background = '#809EAC'; */
              break;
            case '09d':
            case '10d':
              this.weatherImg = 'imgs/pluie.gif';
             this.weatherLogo = 'imgs/pluie.png';
             /*  body.style.background = '#536978'; */
              break;
            case '11d':
              this.weatherImg = 'imgs/orage.gif';
            this.weatherLogo = 'imgs/orage.png';
             /*  body.style.background = '#5E7C7B'; */
              break;
            case '13d':
              this.weatherImg = 'imgs/neige.gif';
              this.weatherLogo = 'imgs/neige.png';
              /* body.style.background = '#B1C0C8'; */
              break;
            case '50d':
              this.weatherImg = 'imgs/brume.gif';
              this.weatherLogo = 'imgs/brume.png';
              /* body.style.background = '#DDD8D0'; */
              break;
            case '01n':
              this.weatherImg = 'imgs/lune.gif';
              this.weatherLogo = 'imgs/nuit.png';
              // body.style.background = '#003465';
              break;
            case '02n':
            case '03n':
              this.weatherImg = 'imgs/lune_nuages.gif';
              this.weatherLogo = 'imgs/nuit.png';
              /* body.style.background = '#202D4B'; */
              break;
            case '09n':
            case '10n':
              this.weatherImg = 'imgs/lune_pluie.gif'
              this.weatherLogo = 'imgs/nuit.png';
             /*  body.style.background = '#0A3541'; */
              break;
            case '11n':
              this.weatherImg = 'imgs/lune_orage.gif';
              this.weatherLogo = 'imgs/nuit.png';
              /* body.style.background = '#2C2E07'; */
              break;
            case '13n':
              this.weatherImg = 'imgs/lune_neige.gif';
              this.weatherLogo = 'imgs/nuit.png';
              /* body.style.background = '#4D4D4F'; */
              break;
            case '50n':
              this.weatherImg = 'imgs/lune_brume.gif';
              this.weatherLogo = 'imgs/nuit.gif';
              /* body.style.background = '#434139'; */
              break;
            default:
              this.weatherImg = 'imgs/logo_meteo.png';
              this.weatherLogo = 'imgs/neutre.png';
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

    }
  });