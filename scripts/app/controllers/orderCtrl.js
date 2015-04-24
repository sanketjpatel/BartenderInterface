/**
 * Created by Sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp').controller('orderCtrl', OrderController);

    function OrderController() {
        var oc = this;
        oc.orders = [
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
        oc.totalCount = 0;      //TODO
    }
})();