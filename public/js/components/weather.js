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
              weatherImg.setAttribute('src', 'imgs/soleil.gif');
              weatherLogo.setAttribute('src', 'imgs/soleil.png');
              body.style.background = '#EECB6A';
              break;
            case '02d':
              weatherImg.setAttribute('src', 'imgs/nuage_soleil.gif');
              weatherLogo.setAttribute('src', 'imgs/nuage_soleil.png');
              body.style.background = '#CDAF79';
              break;
            case '03d':
            case '04d':
              weatherImg.setAttribute('src', 'imgs/nuages.gif');
              weatherLogo.setAttribute('src', 'imgs/nuages.png');
              body.style.background = '#809EAC';
              break;
            case '09d':
            case '10d':
              weatherImg.setAttribute('src', 'imgs/pluie.gif');
              weatherLogo.setAttribute('src', 'imgs/pluie.png');
              body.style.background = '#536978';
              break;
            case '11d':
              weatherImg.setAttribute('src', 'imgs/orage.gif');
              weatherLogo.setAttribute('src', 'imgs/orage.png');
              body.style.background = '#5E7C7B';
              break;
            case '13d':
              weatherImg.setAttribute('src', 'imgs/neige.gif');
              weatherLogo.setAttribute('src', 'imgs/neige.png');
              body.style.background = '#B1C0C8';
              break;
            case '50d':
              weatherImg.setAttribute('src', 'imgs/brume.gif');
              weatherLogo.setAttribute('src', 'imgs/brume.png');
              body.style.background = '#DDD8D0';
              break;
            case '01n':
              this.weatherImg = 'imgs/lune.gif';
              this.weatherLogo = 'imgs/nuit.png';
              // body.style.background = '#003465';
              break;
            case '02n':
            case '03n':
              weatherImg.setAttribute('src', 'imgs/lune_nuages.gif');
              weatherLogo.setAttribute('src', 'imgs/nuit.png');
              body.style.background = '#202D4B';
              break;
            case '09n':
            case '10n':
              weatherImg.setAttribute('src', 'imgs/lune_pluie.gif');
              weatherLogo.setAttribute('src', 'imgs/nuit.png');
              body.style.background = '#0A3541';
              break;
            case '11n':
              weatherImg.setAttribute('src', 'imgs/lune_orage.gif');
              weatherLogo.setAttribute('src', 'imgs/nuit.png');
              body.style.background = '#2C2E07';
              break;
            case '13n':
              weatherImg.setAttribute('src', 'imgs/lune_neige.gif');
              weatherLogo.setAttribute('src', 'imgs/nuit.png');
              body.style.background = '#4D4D4F';
              break;
            case '50n':
              weatherImg.setAttribute('src', 'imgs/lune_brume.png');
              weatherLogo.setAttribute('src', 'imgs/nuit.gif');
              body.style.background = '#434139';
              break;
            default:
              weatherImg.setAttribute('src', 'imgs/logo_meteo.png');
              weatherLogo.setAttribute('src', 'imgs/neutre.png');
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