(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        //Redirection to home if no other URL matches
        $urlRouterProvider.otherwise('/');

        $stateProvider 

        .state('home', {
            url:'/',
            templateUrl: 'js/templates/home.html'
        })

        .state('categories', {
            url:'/categories',
            templateUrl: 'js/templates/categoriestemplate.html'
        })

        .state('categories.items', {
            url: '/items',
            templateUrl: '.js/templates/itemstemplate.html',
        });
    }

}) ();
