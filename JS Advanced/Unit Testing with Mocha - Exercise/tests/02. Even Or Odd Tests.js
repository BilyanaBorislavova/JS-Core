let expect = require('chai').expect;
let isOddOrEven = require('../02. Even Or Odd');

describe("Even Or Odd", function () {
    it("should return undefined for value different than string", function () {
        expect(isOddOrEven(1)).to.equal(undefined);
        expect(isOddOrEven(['pesho'])).to.equal(undefined);
        expect(isOddOrEven({baba:'gosho'})).to.equal(undefined);
    });

    it("should return even for string.length % 2", function () {
        expect(isOddOrEven('peshoo')).to.equal('even');
    });

    it("should return odd for string.length % 2 !== 0", function () {
        expect(isOddOrEven('pesho')).to.equal('odd');
    });
})