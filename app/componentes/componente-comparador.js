angular.
  module('componenteComparador').
  component('componenteComparador', {
    templateUrl: '../phone-comparador/phone-comparador.template.html',
    bindings:{
      phone1:'='
    },
    controller: [
      function PhoneComparadorController() {        

        console.trace('PhoneComparadorController');

       let p1 = this.phone1



      }
    ]
  });