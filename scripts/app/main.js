/**
 * Created by Sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp', ['ngRoute']).config(['$routeProvider', moduleConfig]);
    function moduleConfig($routeProvider){
        $routeProvider
            .when('/stock', {
                templateUrl: 'templates/barstock.html',
                controller: 'stockItemCtrl',
                controllerAs: 'sc'
            })
            .when('/orders', {
                templateUrl: 'templates/orders.html',
                controller: 'OrderCtrl',
                controllerAs: 'oc'
            })
            .otherwise({
                redirectTo: '/stock'
            });
    }
})();



