let expect = require('chai').expect;
let sharedObject = require('../05. Shared Object.html');

describe("Shared Object Functionality", function () {

    it('has all properties', function () {
        expect(sharedObject.hasOwnProperty('name')).to.equal(true);
        expect(typeof sharedObject.name).to.equal(null);

        expect(sharedObject.hasOwnProperty('income')).to.equal(true);
        expect(typeof sharedObject.income).to.equal(null);

        expect(sharedObject.hasOwnProperty('changeName')).to.equal(true);
        expect(typeof sharedObject.changeName).to.equal('function');

        expect(sharedObject.hasOwnProperty('changeIncome')).to.equal(true);
        expect(typeof sharedObject.changeIncome).to.equal('function');

        expect(sharedObject.hasOwnProperty('updateName')).to.equal(true);
        expect(typeof sharedObject.updateName).to.equal('function');

        expect(sharedObject.hasOwnProperty('updateIncome')).to.equal(true);
        expect(typeof sharedObject.updateIncome).to.equal('function');
    });
    
    it("works correctly changeName with empty input", function () {
        sharedObject.changeName('');
        expect(sharedObject.name).to.equal(null);
    });

    it("works correctly changeName", function () {
        ($('#name').val('pesho'));
        sharedObject.changeName();
        expect(sharedObject.name).to.equal('pesho');
    });
    
    it("works correctly with changeIncome", function () {
        sharedObject.changeIncome(-5);
        expect(sharedObject.income).to.equal(null);
        sharedObject.changeIncome('');
        expect(sharedObject.income).to.equal(null);
        sharedObject.changeIncome(2.5);
        expect(sharedObject.income).to.equal(null);
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.equal(null);
        sharedObject.changeIncome();
        expect(sharedObject.income).to.equal(null);
    });

    it("works correctly with changeIncome", function () {
        ($('#income').val(5));
        sharedObject.changeIncome();
        expect(sharedObject.income).to.equal(5);
    });

    it("works correctly with updateName", function () {
        sharedObject.updateName();
        expect(sharedObject.name).to.equal(null);
        sharedObject.updateName('');
        expect(sharedObject.name).to.equal(null);
    });

    it("works correctly with updateName", function () {
        $('#name').val('gosho');
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('gosho');
    });

    it("works correctly with updateIncome", function () {
        sharedObject.updateIncome(-5);
        expect(sharedObject.income).to.equal(null);
        sharedObject.updateIncome('');
        expect(sharedObject.income).to.equal(null);
        sharedObject.updateIncome(2.5);
        expect(sharedObject.income).to.equal(null);
        sharedObject.updateIncome(0);
        expect(sharedObject.income).to.equal(null);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(null);
    });

    it("works correctly with updateIncome", function () {
        ($('#income').val(15));
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(15);
    })

})