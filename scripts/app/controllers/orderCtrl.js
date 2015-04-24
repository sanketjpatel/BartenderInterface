/**
 * Created by Sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp').controller('orderCtrl', ['$location', OrderController]);

    function OrderController($location) {
        var oc = this;
        oc.stockIngredients = [
            {
                name: 'vodka',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'gin',
                quantity: 1.5,
                unit: 'l'
            },
            {
                name: 'tequila',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'whiskey',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'sweet vermouth',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'dry vermouth',
                quantity: 750,
                unit: 'ml'
            },
            {
                name: 'bloody mary mix',
                quantity: 2,
                unit: 'l'
            },
            {
                name: 'agave nectar',
                quantity: 24,
                unit: 'oz'
            },
            {
                name: 'orange juice',
                quantity: 48,
                unit: 'oz'
            },
            {
                name: 'limes',
                quantity: 36,
                unit: ''
            },
            {
                name: 'cherries',
                quantity: 9,
                unit: ''
            },
            {
                name: 'celery stalks',
                quantity: 16,
                unit: ''
            },
            {
                name: 'olives',
                quantity: 24,
                unit: ''
            }
        ];
        oc.items = [
            {
                name: 'bloody mary',
                ingredients: [
                    {
                        name: 'vodka',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'bloody mary mix',
                        quantity: 4,
                        unit: 'oz'
                    },
                    {
                        name: 'celery stalk',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            },
            {
                name: 'martini',
                ingredients: [
                    {
                        name: 'gin',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'dry vermouth',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'olive',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            },
            {
                name: 'margarita',
                ingredients: [
                    {
                        name: 'tequila',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'orange juice',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'agave nectar',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'lime',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            },
            {
                name: 'screwdriver',
                ingredients: [
                    {
                        name: 'vodka',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'orange juice',
                        quantity: 4,
                        unit: 'oz'
                    }
                ],
                count: 0
            },
            {
                name: 'manhattan',
                ingredients: [
                    {
                        name: 'whiskey',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'sweet vermouth',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'cherry',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            }
        ];
        oc.increment = function($index){
            oc.items[$index].count += 1;
        };
        oc.decrement = function($index){
            if (oc.items[$index].count > 0) oc.items[$index].count -= 1;
        };
        oc.goToSummary = function(){
            var items = [];
            for(var i=0; i<oc.items.length; i++) {
                items.push({name: oc.items[i].name, count: oc.items[i].count});
            }
            items = JSON.stringify(items);
            $location.path('/summary').search(items);
        };
    }
})();