/**
 * Created by Sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp').controller('summaryCtrl', SummaryController);

    function SummaryController() {
        var sc = this;
        sc.orders = [
            {
                name: 'bloody mary',
                count: 0
            },
            {
                name: 'martini',
                count: 0
            },
            {
                name: 'margarita',
                count: 0
            },
            {
                name: 'screwdriver',
                count: 0
            },
            {
                name: 'manhattan',
                count: 0
            }
        ];      //TODO
        sc.totalCount = 0;      //TODO
    }
})();