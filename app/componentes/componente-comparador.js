angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', '$scope',
      function PhoneComparadorController(Phone, $scope) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

       

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
        // selecionar


        $scope.$on("eventoCompra", function(event, data){

            alert('eventoCompra en padre ' + data.telefono.id);

        });

      }
    ]
  });