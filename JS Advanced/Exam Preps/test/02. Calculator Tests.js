let expect =  require('chai').expect;
let sumator = require('../02. Calculator');

describe('Sumator', function () {
    let myList;

    beforeEach(function () {
        myList = new Calculator();
    });

    it('has all properties', function () {
        expect(myList.hasOwnProperty('expenses')).to.equal(true, "Missing data property");
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(myList).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(myList).hasOwnProperty('divideNums')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(myList).hasOwnProperty('orderBy')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(myList).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
        expect(Object.getPrototypeOf(myList).hasOwnProperty('expenses')).to.equal(true, "Missing toString function");
    });

    it('must initialize data to an empty array', function () {
        expect(myList.expenses instanceof Array).to.equal(true, 'Data must be of type array');
        expect(myList.expenses.length).to.equal(0, 'Data array ust be initialized empty');
    });

    it('can add a number', function () {
        myList.add(4);
        expect(myList.expenses.length).to.equal(1, "Element wasn't added");
    });

    it('can add several items of different types', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add([1, 2, 3]);
        expect(myList.toString()).to.equal(4, "Element wasn't added");
        expect(myList.orderBy()).to.equal('4 -> pesho -> 1,2,3');
        expect(myList.divideNums()).to.equal(4)
    });

    it('returns error when empty', function () {
        let calc = new Calculator();
        let error = () => calc.divideNums();
        expect(error).to.throw();
    });
    it('returns error when empty', function () {
        let calc = new Calculator();
        myList.add(undefined);
        let error = () => calc.divideNums();
        expect(error).to.throw();
    });

    it('correctly divides numbers', function () {
        let calc = new Calculator();
        myList.add(0);
        myList.add(5);
        myList.add(6);
        expect(myList.divideNums()).to.equal("Cannot divide by zero")
    });

    it('correctly filters non-numbers when summing', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add([1, 2, 3]);
        expect(myList.divideNums()).to.equal(4, "Didn't filter sum");
    });

    it('orders', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add(4);
        expect(myList.orderBy()).to.equal('4, 4, pesho')
    });

    it('toString returns (empty) when empty', function () {
        expect(myList.toString()).to.equal('empty array')
    });

    it('toString returns correct elements', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add('gosho');
        expect(myList.toString()).to.equal('4 -> pesho -> gosho');
    });

    it('...', function () {
        myList.add(2);
        myList.add('baba');
        myList.add(4);
        myList.add([1,2,3]);
        expect(myList.divideNums()).to.equal(0.5);
    });


    it('...', function () {
        myList.add(2);
        myList.add(3);
        myList.add(4);
        myList.add('pesho');
        myList.add('5');
        myList.add({});
        expect(myList.orderBy()).to.equal('2, 3, 4, 5, [object Object], pesho');
        expect(myList.orderBy()).to.equal('2 -> 3 -> 4 -> pesho -> 5 -> [object Object]');
    });

    it('...', function () {
        myList.add(2);
        expect(myList.divideNums()).to.equal(2);
    });

    it('...', function () {
        myList.add(2);
        myList.add('baba');
        myList.add(4);
        myList.add([1,2,3]);
        myList.add(new Date(2018,16,15));
        myList.add('');
        myList.add([]);
        myList.add({a: 'nana', b:400});
        myList.add([[1,2], [3,'pesho']]);
        expect(myList.divideNums()).to.equal(0.5);
    });

    it('...', function () {
        myList.add(2);
        myList.add('baba');
        myList.add(4);
        myList.add([1,2,3]);
        myList.add(new Date(2018,16,15));
        myList.add('');
        myList.add([]);
        myList.add({a: 'nana', b:400});
        myList.add([[1,2], [3,'pesho']]);
        expect(myList.divideNums()).to.equal(0.5);
    });

    it('...', function () {
        myList.add('pesho');
        myList.add('goshi');
        myList.add(undefined);
        myList.add(25);
        myList.add(16,8)
        myList.add(0)
        expect(myList.divideNums()).to.equal("Cannot divide by zero")
    })
});