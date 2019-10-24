'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/comparador', {
          template: '<phone-comparador></phone-comparador>'
        }).
        when('/nuevo', {
          templateUrl: "form.html"
        }).
        when('/carrito', {
          templateUrl: 'cart.html'
        }).
        when('/404', {
          templateUrl: 'error.html'
        }).
        otherwise('/phones');
    }
  ]);
