/**
 * Created by hamidbehnam on 8/20/16.
 */

describe("MainController", function () {
    var $controller;
    var $scope;
    var mainController;
    var textExtender = {
        addFirstName: function (input) {
            return input.concat(" * ", "qwerf");
        }
    };

    beforeEach(function () {
        module("ank");

        inject(function ($injector) {
            $controller = $injector.get("$controller");
            $scope = $injector.get("$rootScope").$new();
        });

        mainController = $controller("MainController", {
            $scope: $scope,
            textExtender: textExtender
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

        it("should be called", function () {
        });
    });
});
