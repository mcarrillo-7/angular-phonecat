'use strict'
angular.
  module('phoneCart').
  component('phoneCart', {
    templateUrl: 'phone-cart/phone-cart.template.html',
    controller: [ 'Phone', 'servicioCarrito',
      function PhoneCartController( Phone, servicioCarrito) {
        console.trace('PhoneCartController');
        var self = this;
        self.phones = servicioCarrito.getCompras();
        
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
