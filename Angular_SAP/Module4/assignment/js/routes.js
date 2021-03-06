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
            templateUrl: 'js/templates/categoriestemplate.html',
            controller: 'CategoriesController as ctrl',
            resolve: {
                categ: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCatergories();
                }]
            }
        })

        .state('categories.items', {
            url: '/items/{itemId}',
            templateUrl: 'js/templates/itemstemplate.html',
            controller:"ItemsController as ctrl",
            resolve: {
                catsn: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams){
                    return MenuDataService.getAllCatergories()
                    .then(function (categ) {
                        return MenuDataService.getItemsForCategory(categ[$stateParams.itemId].short_name)
                    });
                }]
            }
        });
    }

}) ();
