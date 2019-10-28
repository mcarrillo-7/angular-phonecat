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
    controller: ['Phone', 'servicioCarrito', '$scope',
      function PhoneComparadorController(Phone, servicioCarrito, $scope) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.filtro = {
          "atributo": "ram",         
          "min": 0,
          "max": 32000
        }

        var hashPhones = new Map();
        
       
        
        
        self.phones= [];
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

        Phone.getAll().then( (res)=> self.phones = res.data  );

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }


        $scope.$on("eventoCompra", function(event, data){

          alert('eventoCompra en padre ' + data.telefono.id);
          let compra = {
            "id": data.telefono.id,
            "nombre": data.telefono.name,
            "imagen": data.telefono.imageUrl,
            "cantidad": 1
          };
          servicioCarrito.guardarCompra(compra);
           


      });



      }
    ]
  });

  angular.module('phoneComparador').filter('filtroTelefonos', function(){
    return function(items, filtroObject){
      console.log('filtroTelefonos filtro=%o', filtroObject);

      if ( items ){

        return items.filter((telefono)=> {
          if(telefono.storage){
                     let value = telefono.storage[filtroObject.atributo];
          //console.debug("telefono=%s value=%s min%s max=%s", telefono.id, value, min, max );
          return value >= filtroObject.min && value <= filtroObject.max ; 
          } else{
            return true;
          }

          
        });

      }  

      // return items;
    }
  });

  angular.
  module('phoneComparador').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador/phone-comparador-detalle.template.html',
    bindings:{
      mostrar : '=',
      comparar : '='
    },
    controller: ['Phone', '$scope',
      function PhoneComparadorDetalleController(Phone, $scope) {        

        console.trace('PhoneComparadorDetalleController');
        var self = this;
        
        self.phones = {};
        Phone.getAll().then( 
          function successCallback(response) {
            console.trace("Success");
            self.phones = response.data;
          },
          function errorCallback(response) {
            console.warn("Error");
          }
        );
        this.orderProp = 'age';

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