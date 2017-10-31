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
          let classes = `'sunnybg', 'nuagesol', 'nuage', 'rain', 'orageeclaire', 'neige', 'fog', 'night', 'nightcloud', 'nightrain', 'nightstorm', 'nightsnow', 'nightfog'`;
          
          body.removeClass(classes);

          switch (weather.weather[0].icon) {

            case '01d':
              this.weatherImg = 'imgs/soleil.gif';
              this.weatherLogo = 'imgs/soleil.png';
              body.addClass('sunnybg');
              break;
            case '02d':
              this.weatherImg = 'imgs/nuage_soleil.gif';
              this.weatherLogo = 'imgs/nuage_soleil.png';
              body.addClass('nuagesol');
              this.citation= 'N\'oublie pas que chaque nuage, si noir soit-il, a toujours une face ensoleillée, tournée vers le ciel.'
              break;
            case '03d':
            case '04d':
              this.weatherImg = 'imgs/nuages.gif';
              this.weatherLogo = 'imgs/nuages.png';
              body.addClass('nuage');
              break;
            case '09d':
            case '10d':
              this.weatherImg = 'imgs/pluie.gif';
              this.weatherLogo = 'imgs/pluie.png';
              body.addClass('rain');
              this.citation = 'Quand la poule s\'épouille, la pluie est bientôt arrivée.'
              break;
            case '11d':
              this.weatherImg = 'imgs/orage.gif';
              this.weatherLogo = 'imgs/orage.png';
              body.addClass('orageeclaire');
              this.citation = 'C\'est pendant l\'orage qu\'on connaît le pilote.'
              break;
            case '13d':
              this.weatherImg = 'imgs/neige.gif';
              this.weatherLogo = 'imgs/neige.png';
              body.addClass('neige');
              this.citation = 'La neige est à sa hauteur.'
              break;
            case '50d':
              this.weatherImg = 'imgs/brume.gif';
              this.weatherLogo = 'imgs/brume.png';
              body.addClass('fog');
              this.citation = 'Brouillard d\'automne, beau temps nous donne.'
              break;
            case '01n':
              this.weatherImg = 'imgs/lune.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.addClass('night');
              this.citation ='Où va la nuit, le rêve y va.'
              break;
            case '02n':
            case '03n':
            case '04n':
              this.weatherImg = 'imgs/lune_nuages.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.addClass('nightcloud');
              this.citation ='Je veux m\'arracher à cet endroit, à cette réalité, m\'élever haut dans le ciel, comme un nuage et flotter à la dérive en me fondant dans cette nuit d\'été humide jusqu\'à me dissoudre quelque part, loin, par-delà les montagnes.'
              break;
            case '09n':
            case '10n':
              this.weatherImg = 'imgs/lune_pluie.gif'
              this.weatherLogo = 'imgs/nuit.png';
              body.addClass('nightrain');
              this.citation = 'Je suis menacé (que ne disent-ils pas ? ) d\'un rose vif, d\'une pluie continuelle ou d\'un faux pas sur mes bonds. Ils regardent mes yeux comme des vers luisants s\'il fait nuit ou bien ils font quelques pas en moi du côté de l\'ombre.'
              break;
            case '11n':
              this.weatherImg = 'imgs/lune_orage.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.addClass('nightstorm');
              this.citation = 'Il faut bien accepter ce qui nous transfigure. Tout orage a son temps toute haine s\'éteint.Le ciel toujours redevient pur. Toute nuit fait place au matin.'
              break;
            case '13n':
              this.weatherImg = 'imgs/lune_neige.gif';
              this.weatherLogo = 'imgs/nuit.png';
              body.addClass('nightsnow');
              this.citation ='De leur oeil inquiet ils regardent la neige,Attendant jusqu’au jour la nuit qui ne vient pas.'
              break;
            case '50n':
              this.weatherImg = 'imgs/lune_brume.gif';
              this.weatherLogo = 'imgs/nuit.gif';
              this.citation='Cité-dortoir, cité poubelle, Nuit et brouillard, lumières artificielles, Dans nos intérieurs d\'infinie solitude, On rêve d\'ailleurs sous d\'autres latitudes.'
              body.addClass('nightfog');
              break;
            default:
              this.weatherImg = 'imgs/logo.png';
              this.weatherLogo = 'imgs/logo.png';
              
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