let expect = require('chai').expect;
let mathEnforcer = require('../04. Math Enforcer');

describe("Math Enforcer Functionality", function () {

    it('has all properties', function () {
        expect(mathEnforcer.hasOwnProperty('addFive')).to.equal(true);
        expect(typeof mathEnforcer.addFive).to.equal('function');

        expect(mathEnforcer.hasOwnProperty('subtractTen')).to.equal(true);
        expect(typeof mathEnforcer.subtractTen).to.equal('function');

        expect(mathEnforcer.hasOwnProperty('sum')).to.equal(true);
        expect(typeof mathEnforcer.sum).to.equal('function');
    });

   describe('addFive Functionality', function () {
       it("should return undefined with not a number parameter", function () {
           expect(mathEnforcer.addFive('pesho')).to.equal(undefined);
       });

       it("should add 5 to a number", function () {
          expect(mathEnforcer.addFive(5)).to.equal(10);
          expect(mathEnforcer.addFive(0)).to.equal(5);
          expect(mathEnforcer.addFive(2.55)).to.closeTo((2.55 + 5), 0.01);
           expect(mathEnforcer.addFive(-5)).to.equal(-5 + 5);
       })
   });

    describe('subtractTen Functionality', function () {
        it("should return undefined with not a number parameter", function () {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined);
        });

        it("should add 5 to a number", function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(5 - 10);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(2.55)).to.closeTo((2.55 - 10), 0.01);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-5 -10);
        })
    });

    describe('sum Functionality', function () {
        it("should return undefined with not a number parameter", function () {
            expect(mathEnforcer.sum('pesho', 'gosho')).to.equal(undefined);
            expect(mathEnforcer.sum(0, 'gosho')).to.equal(undefined);
            expect(mathEnforcer.sum('pesho', 1)).to.equal(undefined);
        });

        it("should add 5 to a number", function () {
            expect(mathEnforcer.sum(5, 5)).to.equal(5+5);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(2.55, 3.78)).to.closeTo((2.55 + 3.78), 0.01);
            expect(mathEnforcer.sum(-5, -6)).to.equal(-5 + -6);
        })
    })

})