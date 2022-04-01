(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://banana-custard-97785.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
