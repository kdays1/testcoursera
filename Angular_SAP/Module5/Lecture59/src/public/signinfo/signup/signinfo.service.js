(function () {
    "use strict";
    
    angular.module('public')
    .service('SignInfoService', SignInfoService);
    
    
    SignInfoService.$inject = ['$http', 'ThePath','cat'];
    function SignInfoService($http, ThePath) {
      var service = this;
    
      service.signUpMenu = function (cat) {
        return $http.get(ThePath + '/menu_items.json').then(function (response) {
          var selected = response.data['menu_items']['short_name'=cat];
          console.log(response.data['menu_items'])
          console.log(selected);
          return selected;
        });
      };    
    }
})();