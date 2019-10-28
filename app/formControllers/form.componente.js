'use strict'
angular.
  module('phoneFormComponente').
  component('phoneFormComponente', {
    templateUrl: 'formControllers/form-componente.template.html',
    controller: ['$routeParams', 'Phone', '$location',
      function PhoneFormController($routeParams, Phone, $location) {
        var self = this;
        self.phone = {};
        self.form = {};
        console.trace('PhoneNuevoController');

        let id = $routeParams.phoneId;
        if ( id  ) {   //buscar telefono por id

          Phone.getById(id).then(
            (res)=>{
              console.debug('telefono encontrado');
              self.form = res.data;
            },
            ()=>{
              console.warn('telefono NO encontrado');
            }
          );

        }
        
        self.create = function(){
          console.debug('submitar form');
          Phone.create(self.form).then(
            (res)=>{
              console.debug('telefono creado');
            },
            (res)=>{
              console.debug('telefono no creado');
            }
          );
        }
        

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
