/**
 * Created by hamidbehnam on 8/20/16.
 */
/**
 * Controllers
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular.module("ank.controllers")
        .controller("MainController", ["$scope", "textExtender", "textStar", "textSearch", MainController]);

    /**
     * @namespace MainController
     * @memberOf Controllers
     * @desc MainController is the first controller which will be loaded when the page is loaded.
     * @param {service} $scope $scope service
     * @param {service} textExtender textExtender service
     * @param {service} textStar textStar service
     * @param {service} textSearch textSearch service
     * @constructor
     */
    function MainController($scope, textExtender, textStar, textSearch) {
        var vm = this;
        vm.testField = "this is the testField for the MainController!";
        vm.doSomething = doSomething;
        vm.testSomething = testSomething;
        vm.calculateLength = calculateLength;
        vm.calculateWithStar = calculateWithStar;
        vm.analyzeSearchResult = analyzeSearchResult;

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

        function calculateWithStar (input) {
            return textStar.addThreeStar(input).length;
        }

        function analyzeSearchResult (term, subject) {
            switch (textSearch.doBasicSearch(term, subject)) {
                case -1:
                    return "Error";
                default:
                    return "Success";
            }
        }
    }
})();