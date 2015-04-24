/**
 * Created by Sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp', ['ngRoute']).config(['$routeProvider', moduleConfig]);
    function moduleConfig($routeProvider){
        $routeProvider
            .when('/order', {
                templateUrl: 'templates/order.html',
                controller: 'orderCtrl',
                controllerAs: 'oc'
            })
            .when('/summary', {
                templateUrl: 'templates/summary.html',
                controller: 'summaryCtrl',
                controllerAs: 'sc'
            })
            .otherwise({
                redirectTo: '/order'
            });
    }
})();



