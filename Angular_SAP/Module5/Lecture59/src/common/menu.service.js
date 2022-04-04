(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.usuario = {};
  service.err = {};
  service.ini = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.signUpMenu = function (cat) {
      return $http.get(ApiPath + '/menu_items/' + cat +'.json');
  };
  
  service.keepUser = function (usr,errors,initi) {
      service.usuario = angular.copy(usr);
      service.err = angular.copy(err);
      service.ini = angular.copy(initi);
  };

  service.showUser = function (){
      return service.usuario;
  };
  service.getStatus = function(){
    if(service.init || service.err){
      return true;
    } else {
      return false;
    }

  };
}
})();
