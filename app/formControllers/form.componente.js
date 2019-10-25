'use strict'
angular.
  module('phoneFormComponente').
  component('phoneFormComponente', {
    templateUrl: 'phone-form-crear/phone-form-crear.template.html',
    controller: ['$routeParams', 'Phone', '$location',
      function PhoneFormController($routeParams, Phone, $location) {
        var self = this;
        let endpoint = "http://localhost:3000/phones/";
        
        Phone.create = function(formData){
            let url = endpoint;
            return $http.post(url, formData);
        };

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
