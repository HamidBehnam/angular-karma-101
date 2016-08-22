/**
 * Created by hamidbehnam on 8/22/16.
 */

(function () {
    'use strict';

    angular.module("ank.services")
        .factory("textStar", textStar);

    function textStar() {
        return {
            addThreeStar: addThreeStar
        };

        function addThreeStar(input) {
            return input.toString().concat("***");
        }
    }
})();
