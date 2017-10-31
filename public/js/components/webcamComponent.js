angular.module('app')

  .component('webcams', {

    templateUrl: 'js/components/webcamComponent.html',

    controller: function (WebcamsService, $log, $sce, $scope) {
      this.$onInit = ($scope, $sce) => {
        $log.info('Webcam component initialized');
       
        WebcamsService.getWebcam().then((webcams) => {
          this.webcam = webcams;
          
          console.log(this.webcam);
        }).catch((error) => {
          this.error = error;
        });
      };
      
    }


  });