/**
 * Created by hamidbehnam on 8/21/16.
 */

(function () {
    angular.module("ank.services")
        .factory("textExtender", textExtender);

    function textExtender() {
        return {
            addFirstName: addFirstName
        };

        // implementations
        function addFirstName(input) {
            return input.toString().concat(" * ", "hamid");
        }
    }
})();
