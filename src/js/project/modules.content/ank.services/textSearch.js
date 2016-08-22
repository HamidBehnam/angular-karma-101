/**
 * Created by hamidbehnam on 8/22/16.
 */

(function () {
    'use strict';

    angular.module("ank.services")
        .factory("textSearch", textSearch);

    function textSearch () {
        return {
            doBasicSearch: doBasicSearch
        };

        function doBasicSearch (term, subject) {
            return term.toString().indexOf(subject);
        }
    }
})();
