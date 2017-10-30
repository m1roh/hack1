angular.module('app')

  .component('webcams', {

    templateUrl: 'js/components/webcamComponent.html',

    controller: function (WebcamsService, $log) {
      this.$onInit = () => {
        $log.info('Webcam component initialized');
        WebcamsService.getWebcam().then((webcams) => {
          this.webcam = webcams[0].id;
          console.log(this.webcam);
        }).catch((error) => {
          this.error = error;
        });
      };
      
    }


  });