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
          template: '<phone-form-componente></phone-form-componente>'
        }).
        when('/editar/:phoneId', {
          template: '<phone-form-componente></phone-form-componente>'
        }).
        when('/carrito', {
          template: '<phone-cart></phone-cart>'
        }).
        when('/404', {
          templateUrl: 'error.html'
        }).
        otherwise('/phones');
    }
  ]);
