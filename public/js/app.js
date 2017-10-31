'use strict';

const app = angular.module('app', []);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.lookr.com/embed/player/**'
  ]);
});