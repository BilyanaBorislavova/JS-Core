let expect = require('chai').expect;
let lookupChar = require('../03. Char Lookup');

describe("Lookup Char Functionality", function () {
    it("should return undefined of value different than string && index different than number", function () {
        expect(lookupChar(1, 'pesho')).to.equal(undefined);
        expect(lookupChar(50, 50)).to.equal(undefined);
        expect(lookupChar('baba', 'gosho')).to.equal(undefined);
        expect(lookupChar('baba', 1.5)).to.equal(undefined);
        expect(lookupChar({baba:'gosho'}, 5)).to.equal(undefined);
        expect(lookupChar(['pesho'], 2)).to.equal(undefined);
        expect(lookupChar('pesho', '2')).to.equal(undefined);
        expect(lookupChar(true, 2)).to.equal(undefined);
    });

    it("should return incorrect value", function () {
        expect(lookupChar('pesho', 12)).to.equal("Incorrect index");
        expect(lookupChar('pesho', 5)).to.equal("Incorrect index");
        expect(lookupChar('pesho', -1)).to.equal("Incorrect index");
        expect(lookupChar('pesho', 25)).to.equal("Incorrect index");
    });

    it("should return current index char", function () {
        expect(lookupChar('pesho',1)).to.equal('e');
        expect(lookupChar('gosho',4)).to.equal('o');
        expect(lookupChar('baba',0)).to.equal('b');
        expect(lookupChar('12345', 1)).to.equal('2')
    })
})