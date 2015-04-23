/**
 * Created by sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp', []);

//attach your controller on this module
    angular.module('barStockApp').controller('stockItemCtrl', StockItemController);

    function StockItemController() {
        var sc = this;
        sc.ingredients = [
            {
                name: 'Vodka',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'Gin',
                quantity: 1.5,
                unit: 'l'
            },
            {
                name: 'Tequila',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'Whiskey',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'Sweet Vermouth',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'Dry Vermouth',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'Bloody Mary Mix',
                quantity: 2,
                unit: 'l'
            },
            {
                name: 'Agave Nectar',
                quantity: 24,
                unit: 'oz'
            },
            {
                name: 'Orange Juice',
                quantity: 48,
                unit: 'oz'
            },
            {
                name: 'Limes',
                quantity: 36,
                unit: ''
            },
            {
                name: 'Cherries',
                quantity: 9,
                unit: ''
            },
            {
                name: 'Celery Stalks',
                quantity: 16,
                unit: ''
            },
            {
                name: 'Olives',
                quantity: 24,
                unit: ''
            }
        ];
    }
})();