'use strict'
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', '$location',
      function PhoneDetailController($routeParams, Phone, $location) {
        var self = this;
        let endpoint = "http://localhost:3000/phones/";
        
        Phone.getById = function( id ){
          let url = endpoint + id;
          console.trace('GET ' + url);
          return $http.get(url);
        }, function(){
          console.warn('No encontrado movil ' + $routeParams.phoneId );
          $location.url('/404');
        };

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
