angular.module('app')

  .component('webcams', {

    templateUrl: 'js/components/webcamComponent.html',

    controller: function (WebcamsService, $log, $sce) {
      this.$onInit = ($scope, $sce) => {
        $log.info('Webcam component initialized');
        this.getIframeSrc = function(src) {
          return 'https://api.lookr.com/embed/player/' +src +'/day?autoresize=1&amp;referrer=http%3A%2F%2Flocalhost%3A3000%2F';
        };
        WebcamsService.getWebcam().then((webcams) => {
          this.webcam = webcams;
          
          console.log(this.webcam);
        }).catch((error) => {
          this.error = error;
        });
      };
      
    }


  });