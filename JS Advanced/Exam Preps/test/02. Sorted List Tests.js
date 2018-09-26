let expect = require('chai').expect;
let sorted = require('../02. Sorted List');

describe("Sorted List", function () {

    let sortedList;

    beforeEach(function () {
        sortedList = new SortedList();
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(sortedList).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(sortedList).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
        expect(Object.getPrototypeOf(sortedList).hasOwnProperty('get')).to.equal(true, "Missing get function");
        expect(Object.getPrototypeOf(sortedList).hasOwnProperty('vrfyRange')).to.equal(true, "Missing vrfyRange function");
        expect(Object.getPrototypeOf(sortedList).hasOwnProperty('sort')).to.equal(true, "Missing sort function");
        expect(Object.getPrototypeOf(sortedList).hasOwnProperty('size')).to.equal(true, "Missing toString function");
    });

    it('must initialize data to an empty array', function () {
        expect(sortedList.list instanceof Array).to.equal(true, 'Data must be of type array');
        expect(sortedList.list.size).to.equal(0, 'Data array must be initialized empty');
    });

    it('should add correctly', function () {
        sortedList.add(123);
        expect(sortedList.get(0)).to.equal(123);
        expect(sortedList.size).to.equal(1);
    });

   //remove invalid
    it('should throw error with invalid index', function () {
        expect(sortedList.remove(-1)).to.throw(Error)
    });
    it('should throw error with invalid index', function () {
        expect(sortedList.remove(0)).to.throw(Error)
    });

    it('should throw error with invalid index', function () {
        sortedList.add(1);
        sortedList.add(2);
        expect(sortedList.remove(2)).to.throw(Error)
    });

    it('should throw error with invalid index', function () {
        sortedList.add(1);
        sortedList.add(2);
        expect(sortedList.remove(2.5)).to.throw(Error)
    });

    //remove valid
    it('should remove', function () {
        sortedList.add(12);
        sortedList.add(56);
        sortedList.remove(1);
        expect(sortedList.size).to.equal(1);
        expect(sortedList.get(0)).to.equal(12);
    });

    //get invalid
    it('should throw error with invalid index', function () {
        sortedList.add(12);
        sortedList.add(56);
        expect(sortedList.get(-1)).to.throw(Error)
    });
    it('should throw error with invalid index', function () {
        sortedList.add();
        expect(sortedList.get(0)).to.throw(Error)
    });

    it('should throw error with invalid index', function () {
        sortedList.add(1);
        sortedList.add(2);
        expect(sortedList.get(2)).to.throw(Error)
        expect(sortedList.get(1.5)).to.throw(Error)
        expect(sortedList.get('pesho')).to.throw(Error)
    });

    //get valid
    it('should get', function () {
        sortedList.add(56);
        sortedList.add(1);
        expect(sortedList.get(1)).to.equal(56);
    });

    it('should get', function () {
        sortedList.add(1);
        sortedList.add(56);
        sortedList.add(4);
        expect(sortedList.size).to.equal(3);
        expect(sortedList.get(0)).to.equal(1);
        expect(sortedList.get(1)).to.equal(4);
        expect(sortedList.get(2)).to.equal(56);
        //-4 1 56
    });

    it('should have functionaloity', function () {
        sortedList.add(50);
        sortedList.add(25);
        sortedList.add(25);
        sortedList.add(13);
        sortedList.add(0);
        //13, 25, 50
        expect(sortedList.size).to.equal(5);
        sortedList.remove(3);
        expect(sortedList.get(3)).to.equal(50);
        sortedList.remove(1);
        expect(sortedList.get(0)).to.equal(13);
        expect(sortedList.size).to.equal(3);
        expect(sortedList.remove(-5)).to.throw(Error);
        expect(sortedList.size).to.equal(3);
        sortedList.add(47);
        expect(sortedList.size).to.equal(4);
    })


})