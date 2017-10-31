angular.module('app')

  .component('webcams', {

    templateUrl: 'js/components/webcamComponent.html',

    controller: function (WebcamsService, $log, $sce) {
      this.$onInit = () => {
        $log.info('Webcam component initialized');
        WebcamsService.getWebcam().then((webcams) => {
          this.webcams = webcams;
          console.log(this.webcams);
        }).catch((error) => {
          this.error = error;
        });
      };
      
    }


  });