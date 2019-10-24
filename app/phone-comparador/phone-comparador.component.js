'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    bindings:{
      mostrar : '=',
      comparar : '='
    },
    controller: ['Phone', '$scope',
      function PhoneComparadorController(Phone,  $scope) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
        
          if(self.phone1.length<1){
            self.phone1 = phone;
          }else{
            self.phone2 = self.phone1;
            self.phone1 = phone;
          }
        }


        $scope.$on("eventoCompra", function(event, data){

          alert('eventoCompra en padre ' + data.telefono.id);

      });



      }
    ]
  });
  angular.
  module('phoneComparador').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador/phone-comparador-detalle.template.html',
    bindings:{
      mostrar : '=',
      comparar : '='
    },
    controller: ['$scope',
      function PhoneComparadorDetalleController($scope) {        

        console.trace('PhoneComparadorDetalleController');
        var self = this;

        self.comprar = function(){
          console.trace('click boton compra %o', self.mostrar  );
          //compraMovil.setProducto(self.mostrar);
          $scope.$emit("eventoCompra", { telefono: self.mostrar });

        }

        /*
        this.$onChanges = function (changes) {
          console.debug('cambia valor %o', changes);
          self.p1 = changes.phone1.currentValue;
        };
        */



      }
    ]
  });