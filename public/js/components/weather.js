'use strict';

angular.module('app')

  .component('weather', {

    templateUrl: 'js/components/weather.html',

    controller: function (WeatherService, $scope, $log) {
      //let city = this.city;
      /**
       * Component controller init
       */
      
      $scope.city = this.city;
      this.$onInit = () => {
        this.body = angular.element(document.querySelector('body'));
        $log.info('Weather component initialized');
        $log.info('Webcam component initialized');
      };
      
      this.getMeteo = (city) => {
        // save the messages list into the controller
        WeatherService.getWeather(city).then((weather) => {
          let weatherImg;
          let weatherLogo;
          this.classes = ['sunnybg', 'nuagesol', 'nuage', 'rain', 'orageeclaire', 'neige', 'fog', 'nigth', 'nigthcloud', 'nightrain', 'nightstorm', 'nightsnow', 'nightfog'];
          this.body.removeClass(this.classes.join(' '));
          // body.removeClass(classes);

          switch (weather.weather[0].icon) {
            
            case '01d':
              this.weatherImg = 'imgs/soleil.gif';
              this.weatherLogo = 'imgs/soleil.png';
              this.body.removeClass('sunnybg');
              this.body.addClass('sunnybg');
              this.citation = 'L\'ardeur du soleil fait mieux apprécier le plaisir d\'être à l\'ombre.'
              break;
            case '02d':
              this.weatherImg = 'imgs/nuage_soleil.gif';
              this.weatherLogo = 'imgs/nuage_soleil.png';
              this.body.addClass('nuagesol');
              this.citation= 'N\'oublie pas que chaque nuage, si noir soit-il, a toujours une face ensoleillée, tournée vers le ciel.'
              break;
            case '03d':
            case '04d':
              this.weatherImg = 'imgs/nuages.gif';
               this.weatherLogo ='imgs/nuages.png';
               this.body.addClass('nuage');
               this.citation = 'On peut avoir la tête bien sur les épaules tout en restant dans les nuages.'
              break;
            case '09d':
            case '10d':
              this.weatherImg = 'imgs/pluie.gif';
              this.weatherLogo = 'imgs/pluie.png';
              this.body.addClass('rain');
              this.citation = 'Quand la poule s\'épouille, la pluie est bientôt arrivée.'
              break;
            case '11d':
              this.weatherImg = 'imgs/orage.gif';
              this.weatherLogo = 'imgs/orage.png';
              this.body.addClass('orageeclaire');
              this.citation = 'C\'est pendant l\'orage qu\'on connaît le pilote.'
              break;
            case '13d':
              this.weatherImg = 'imgs/neige.gif';
              this.weatherLogo = 'imgs/neige.png';
              this.body.addClass('neige');
              this.citation = 'La neige est à sa hauteur.'
              break;
            case '50d':
              this.weatherImg = 'imgs/brume.gif';
              this.weatherLogo = 'imgs/brume.png';
              this.body.addClass('fog');
              this.citation = 'Brouillard d\'automne, beau temps nous donne.'
              break;
            case '01n':
              this.weatherImg = 'imgs/lune.gif';
              this.weatherLogo = 'imgs/nuit.png';
              this.body.addClass('night');
              this.citation ='Où va la nuit, le rêve y va.'
              break;
            case '02n':
            case '03n':
            case '04n':
              this.weatherImg = 'imgs/lune_nuages.gif';
              this.weatherLogo = 'imgs/nuit.png';
              this.body.addClass('nightcloud');
              this.citation ='Je veux m\'arracher à cet endroit, à cette réalité, m\'élever haut dans le ciel, comme un nuage et flotter à la dérive en me fondant dans cette nuit d\'été humide jusqu\'à me dissoudre quelque part, loin, par-delà les montagnes.'
              break;
            case '09n':
            case '10n':
              this.weatherImg = 'imgs/lune_pluie.gif'
              this.weatherLogo = 'imgs/nuit.png';
              this.body.addClass('nightrain');
              this.citation = 'Je suis menacé (que ne disent-ils pas ? ) d\'un rose vif, d\'une pluie continuelle ou d\'un faux pas sur mes bonds. Ils regardent mes yeux comme des vers luisants s\'il fait nuit ou bien ils font quelques pas en moi du côté de l\'ombre.'
              break;
            case '11n':
              this.weatherImg = 'imgs/lune_orage.gif';
              this.weatherLogo = 'imgs/nuit.png';
              this.body.addClass('nightstorm');
              this.citation = 'Il faut bien accepter ce qui nous transfigure. Tout orage a son temps toute haine s\'éteint.Le ciel toujours redevient pur. Toute nuit fait place au matin.'
              break;
            case '13n':
              this.weatherImg = 'imgs/lune_neige.gif';
              this.weatherLogo = 'imgs/nuit.png';
              this.body.addClass('nightsnow');
              this.citation ='De leur oeil inquiet ils regardent la neige,Attendant jusqu’au jour la nuit qui ne vient pas.'
              break;
            case '50n':
              this.weatherImg = 'imgs/lune_brume.gif';
              this.weatherLogo = 'imgs/nuit.gif';
              this.citation='Cité-dortoir, cité poubelle, Nuit et brouillard, lumières artificielles, Dans nos intérieurs d\'infinie solitude, On rêve d\'ailleurs sous d\'autres latitudes.'
              this.body.addClass('nightfog');
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