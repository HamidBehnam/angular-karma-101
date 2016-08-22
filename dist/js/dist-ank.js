/**
 * Created by hamidbehnam on 8/20/16.
 */

angular.module("ank.controllers", []);

/**
 *
 * Created by hamidbehnam on 8/20/16.
 */

angular.module("ank", ["ank.controllers", "ank.services"]);

/**
 * Created by hamidbehnam on 8/21/16.
 */

angular.module("ank.services", []);

/**
 * Created by hamidbehnam on 8/20/16.
 */

(function () {
    'use strict';

    angular.module("ank.controllers")
        .controller("MainController", ["$scope", "textExtender", MainController]);

    function MainController($scope, textExtender) {
        var vm = this;
        vm.testField = "this is the testField for the MainController!";
        vm.doSomething = doSomething;
        vm.testSomething = testSomething;
        vm.calculateLength = calculateLength;

        vm.testSomething();

        function doSomething () {
            return "this is the doSomething method!";
        }

        function testSomething () {
            return "this is the testSomething method!";
        }

        function calculateLength (input) {
            return textExtender.addFirstName(input).length;
        }
    }
})();
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
