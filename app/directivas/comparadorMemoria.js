angular.module('phonecatApp').directive("ipDiferencia",[function() {
   
    var directiveDefinitionObject ={
      restrict:"E",
      replace : true,
      template:"<h1>{{texto}}</h1>",
      scope:{
        v1:"@",
        v2:'@'
      },
      link:function(scope, iElement, iAttrs, controller, transcludeFn) {
          var resul;
           
          resul = v1-v2;
         
      }
       
    }
     
    return directiveDefinitionObject;
  }]);