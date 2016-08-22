/**
 * Created by hamidbehnam on 8/21/16.
 */

describe("textExtender", function () {
    var textExtender;
    beforeEach(function () {
        module("ank");

        inject(function ($injector) {
            textExtender = $injector.get("textExtender");
        });
    });

    it("should add my name at the end of the string", function () {
        expect(textExtender.addFirstName("something")).toBe("something * hamid");
    });

    it("should add my name at the end of the number", function () {
        expect(textExtender.addFirstName(234)).toBe("234 * hamid");
    });
});
