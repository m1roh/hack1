angular.module('app')

  .component('webcams', {

    templateUrl: 'js/components/webcamComponent.html',

    controller: function (WebcamsService, $log, $sce) {
<<<<<<< HEAD
      this.$onInit = ($scope, $sce) => {
=======
      this.$onInit = () => {
>>>>>>> d1307a2c1ccf1310049712c1ddd076a7ab8f1c94
        $log.info('Webcam component initialized');
        this.getIframeSrc = function(src) {
          return 'https://api.lookr.com/embed/player/' +src +'/day?autoresize=1&amp;referrer=http%3A%2F%2Flocalhost%3A3000%2F';
        };
        WebcamsService.getWebcam().then((webcams) => {
<<<<<<< HEAD
          this.webcam = webcams;
          
          console.log(this.webcam);
=======
          this.webcams = webcams;
          console.log(this.webcams);
>>>>>>> d1307a2c1ccf1310049712c1ddd076a7ab8f1c94
        }).catch((error) => {
          this.error = error;
        });
      };
      
    }


  });