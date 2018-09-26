let expect = require('chai').expect;
let makeList = require('../02. Add Left, Right, Clear');

describe("Add Left, Right, Clear Functionality Test", function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it('has all properties', function () {
        expect(myList.hasOwnProperty('addLeft')).to.equal(true);
        expect(typeof myList.addLeft).to.equal('function');

        expect(myList.hasOwnProperty('addRight')).to.equal(true);
        expect(typeof myList.addRight).to.equal('function');

        expect(myList.hasOwnProperty('clear')).to.equal(true);
        expect(typeof myList.clear).to.equal('function');

        expect(myList.hasOwnProperty('toString')).to.equal(true);
        expect(typeof myList.toString).to.equal('function');
    });

    it('should be empty on init', () => {
        expect(myList.toString()).to.equal('');
    });

    it('should add element at the beginning addLeft', () => {
        myList.addLeft(5);
        myList.addLeft('pesho');
        myList.addLeft(false);
        expect(myList.toString()).to.equal('false, pesho, 5');
    });

    it('should add element at the end addLeft', () => {
        myList.addLeft(5.7);
        myList.addLeft('pesho');
        myList.addLeft(false);
        myList.addLeft(undefined);
        expect(myList.toString()).to.equal('5.7, pesho, false, undefined');
    });

    it('clear', function () {
        expect(myList.toString()).to.equal('');
    });

    it('toString', function () {
        myList.addLeft(5);
        myList.addRight('me');
        expect(myList.toString()).to.equal('5, me');
    })

    it('stringifies correctly', function () {
        expect(myList.toString()).to.equal('')
    });
})