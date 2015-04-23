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
        sc.items = [
            {
                name: 'Bloody Mary',
                ingredients: [
                    {
                        name: 'Vodka',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'Bloody Mary Mix',
                        quantity: 4,
                        unit: 'oz'
                    },
                    {
                        name: 'Celery Stalk',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            },
            {
                name: 'Martini',
                ingredients: [
                    {
                        name: 'Gin',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'Dry Vermouth',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'Olive',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            },
            {
                name: 'Margarita',
                ingredients: [
                    {
                        name: 'Tequila',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'Orange Juice',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'Agave Nectar',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'Lime',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            },
            {
                name: 'Screwdriver',
                ingredients: [
                    {
                        name: 'Vodka',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'Orange Juice',
                        quantity: 4,
                        unit: 'oz'
                    }
                ],
                count: 0
            },
            {
                name: 'Manhattan',
                ingredients: [
                    {
                        name: 'Whiskey',
                        quantity: 2,
                        unit: 'oz'
                    },
                    {
                        name: 'Sweet Vermouth',
                        quantity: 1,
                        unit: 'oz'
                    },
                    {
                        name: 'Cherry',
                        quantity: 1,
                        unit: ''
                    }
                ],
                count: 0
            }
        ];
    }
})();