'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneComparadorController( Phone) {
        console.trace();
        var self = this;
        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 ={};
        self.orderProp = 
      }
    ]
  });