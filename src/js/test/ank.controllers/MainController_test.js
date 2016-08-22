/**
 * Created by hamidbehnam on 8/20/16.
 */

describe("MainController", function () {
    var $controller;
    var $scope;
    var mainController;
    var textExtender;
    var textStar;

    //hijacking (mocking) service: textExtender, in this way we need to pass the service along with $scope to the controller constructor:         mainController = $controller("MainController", {    $scope: $scope,        textExtender: textExtender});
    textExtender = {
        addFirstName: function (input) {
            return input.concat(" * ", "qwerf");
        }
    };

    beforeEach(function () {
        module("ank");

        //hijacking (mocking) service: textSearch, in this way you don't need to pass the service to controller constructor or inject it to the test spec, except if you wanna spy on it.
        module(function ($provide) {
            $provide.factory("textSearch", textSearch);

            function textSearch () {
                return {
                    doBasicSearch: doBasicSearch
                };

                function doBasicSearch (word, term) {
                    return word.toString().indexOf(term);
                }
            }
        });

        inject(function ($injector) {
            $controller = $injector.get("$controller");
            $scope = $injector.get("$rootScope").$new();
            textStar = $injector.get("textStar");
        });

        mainController = $controller("MainController", {
            $scope: $scope,
            textExtender: textExtender
        });

        //hijacking (mocking) service: textStar, in this way we need to inject the service to the test spec before being able to spy on it: textStar = $injector.get("textStar");
        spyOn(textStar, "addThreeStar").and.callFake(function (input) {
            return input.toString().concat("AAA");
        });
        spyOn(textExtender, "addFirstName").and.callThrough();
        textExtender.addFirstName("llll");
        expect(textExtender.addFirstName).toHaveBeenCalled();
    });

    it ("should return correct value for testField property", function () {
        expect(mainController.testField).toBe('this is the testField for the MainController!');
    });

    it("should return correct output for doSomething method", function () {
        expect(mainController.doSomething()).toBe("this is the doSomething method!");
    });

    it("should receive correct value from service", function () {
        expect(textExtender.addFirstName("hamid")).toBe("hamid * qwerf");
    });

    it("should call testSomething method", function () {
        spyOn(mainController, "testSomething").and.callFake(function () {
            return "this is a 'fake' implementation for testSomething method";
        });
        mainController.testSomething();
        expect(mainController.testSomething).toHaveBeenCalled();
        expect(mainController.testSomething()).toBe("this is a 'fake' implementation for testSomething method");
    });

    describe("calculateLength", function () {
        it("should return correct value for a string with one letter", function () {
            expect(mainController.calculateLength('a')).toBe(9);
        });

        it("should return correct value for a string with 10 letters", function () {
            expect(mainController.calculateLength('abcdef ghi')).toBe(18);
        });
    });

    describe("calculateWithStar", function () {
        it("should return correct length after adding star", function () {
            expect(mainController.calculateWithStar("hamid")).toBe(8);
        });
    });

    describe("analyzeSearchResult", function () {
        it("should return 'Success'", function () {
            expect(mainController.analyzeSearchResult("hamid", "mi")).toBe("Success");
        });
        it("should return 'Error'", function () {
            expect(mainController.analyzeSearchResult("hamid", "imi")).toBe("Error");
        });
    });
});
