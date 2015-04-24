/**
 * Created by Sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp').controller('summaryCtrl', [ '$routeParams', SummaryController]);

    function SummaryController($routeParams) {
        var sc = this;
        sc.orders = JSON.parse(Object.keys($routeParams)[0]);
        sc.totalCount = (function(){
            var counter=0;
            for(var i=0; i<sc.orders.length; i++) counter += sc.orders[i].count;
            return counter;
        })();
    }
})();