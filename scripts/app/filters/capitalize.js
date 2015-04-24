/**
 * Created by Sanket on 4/22/15.
 */
(function(){
    angular.module('barStockApp').filter('capitalize', CapitalizeFilter);

    function CapitalizeFilter() {
        return function(input, scope) {
            if (input!=null)
                input = input.toLowerCase();
            return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
    }

})();