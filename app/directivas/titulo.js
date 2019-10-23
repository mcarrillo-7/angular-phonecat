angular.module('phonecatApp').directive("acTitulo",[function() {
   
  var directiveDefinitionObject ={
    restrict:"E",
    replace : true,
    template:"<h1>{{texto}}</h1>",
    scope:{
      texto:"@"
    },
    link:function(scope, iElement, iAttrs, controller, transcludeFn) {
        var htmlColor;
         
        switch (iAttrs.color) {
            case "rojo":
                htmlColor="#FF0000";
                break;
            case "verde":
                htmlColor="#00FF00";
                break;
            case "azul":
                htmlColor="#0000FF";
                break;
            default:
                htmlColor="#000000";
                break;
        }
       
        iElement.css("color",htmlColor);
       
    }
     
  }
   
  return directiveDefinitionObject;
}]);