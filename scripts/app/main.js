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
                resolve: {
                    finalOrder: completeOrder
                },
                controller: 'summaryCtrl',
                controllerAs: 'sc'

            })
            .otherwise({
                redirectTo: '/order'
            });

        // Not sure if we really need to use resolve here, because we aren't making any AJAX calls.
        // Fill with appropriate function definition if needed.
        function completeOrder(){
            return {};
        }
    }
})();



