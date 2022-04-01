(function () {
    "use strict";
    
    angular.module('public')
    .service('SignInfoService', SignInfoService);
    
    
    SignInfoService.$inject = ['$http', 'ThePath','cat'];
    function SignInfoService($http, ThePath) {
      var service = this;
    
      service.signUpMenu = function (cat) {
        return $http.get(ThePath + '/menu_items.json').then(function (response) {
          var selected = response.data['menu_items']
          console.log(response.data['menu_items'])
          console.log(selected);
          for(i=0;i<selected.lenth();i++){
            if (selected.short_name==cat){
              var x=i;
            }
          }
          if(x){
            selection = selected[i];
          }else{
            selection = null;
          }
          return selection;
        });
      };    
    }
})();