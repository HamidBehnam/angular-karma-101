/**
 * Created by hamidbehnam on 8/20/16.
 */

angular.module("ank.controllers", []);

/**
 *
 * Created by hamidbehnam on 8/20/16.
 */

angular.module("ank", ["ank.controllers"]);

/**
 * Created by hamidbehnam on 8/20/16.
 */

(function () {
    angular.module("ank.controllers")
        .controller("MainController", ["$scope", MainController]);

    function MainController($scope) {
        var vm = this;
        vm.testField = "this is the testField for the MainController! sdfsdf";
    }
})();