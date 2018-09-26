let expect =  require('chai').expect;
let sumator = require('../02. Sumator Class');

describe('Sumator', function () {

    let classSumator;

    beforeEach(function () {
        classSumator = new Sumator();
    });

    it("should have property data", function () {
        expect(classSumator.hasOwnProperty('data')).to.equal(true, "Missing data array property")
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(classSumator).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(classSumator).hasOwnProperty('sumNums')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(classSumator).hasOwnProperty('removeByFilter')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(classSumator).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

    it('must initialize data to an empty array', function () {
        expect(classSumator.data instanceof Array).to.equal(true, 'Data must be of type array');
        expect(classSumator.data.length).to.equal(0, 'Data array must be initialized empty');
    });

    it('sums correctly with wrong input', function () {
        classSumator.sumNums('pesho');
        expect(classSumator.toString()).to.equal('(empty)');
    });

    it('sums correctly with no input', function () {
        classSumator.sumNums();
        expect(classSumator.toString()).to.equal('(empty)');
    });

    it('sums correctly with numbers', function () {
        classSumator.sumNums(2);
        classSumator.sumNums('baba');
        classSumator.sumNums(4);
        classSumator.sumNums([1,2,3]);
        expect(classSumator).to.equal(6);
    });

    it('sums correctly with fractions', function () {
        classSumator.sumNums(2.2);
        classSumator.sumNums(3.3);
        classSumator.sumNums(4.4);
        classSumator.sumNums([])
        expect(classSumator).to.equal(9.9);
    });

    it('sums correctly with numbers', function () {
        classSumator.sumNums(2);
        classSumator.sumNums(3);
        classSumator.sumNums(4);
        classSumator.sumNums('pesho');
        classSumator.sumNums('5');
        classSumator.sumNums({});
        expect(classSumator).to.equal(9);
    });

    it('sums correctly with numbers', function () {
        classSumator.sumNums(2);
        expect(classSumator).to.equal(2);
    });

    it('sums correctly with numbers', function () {
        classSumator.sumNums(2);
        classSumator.sumNums(3.3);
        classSumator.sumNums('pesho');
        expect(classSumator).to.equal(5.3);
    });


    it('adds correctly', function () {
        classSumator.add(true);
        classSumator.add(2);
        classSumator.add('pesho');
        expect(classSumator.data.toString()).to.equal('true, 2, pesho')
    });
    it('adds correctly', function () {
        classSumator.add(null);
        expect(classSumator.data.toString()).to.equal('null')
    });

    it('adds correctly', function () {
        classSumator.add(1);
        classSumator.add([]);
        classSumator.add({a:'a'});
        classSumator.add(function () {
        });
        expect(classSumator.data.toString()).to.equal('1, [], [Object object], Function')
    });

    it('removes correctly', function () {
        classSumator.add(2);
        classSumator.add('pesho');
        classSumator.add('gosho');
        classSumator.removeByFilter(a => a % 2 === 0);
        expect(classSumator.toString()).to.equal('pesho, gosho')
    });

    it('removes correctly', function () {
        classSumator.add();
        expect(classSumator.toString()).to.equal('(empty)')
    });

    it('removes correctly', function () {
        classSumator.add(2);
        classSumator.add(3);
        classSumator.add(4);
        classSumator.add(5);
        classSumator.removeByFilter(a => a >= 4);
        expect(classSumator.toString()).to.equal('2, 3')
    });

    it('removes correctly', function () {
        classSumator.add(2);
        classSumator.add('a');
        classSumator.add('b');
        classSumator.add(5);
        classSumator.removeByFilter(a => typeof (a) === 'number');
        expect(classSumator.toString()).to.equal('a, b')
    });

    it('removes correctly', function () {
        classSumator.add(2);
        classSumator.add('pesho');
        classSumator.add('gosho');
        classSumator.removeByFilter(a => a !== 'pesho');
        expect(classSumator.toString()).to.equal('2, gosho')
    });

    it('stringifies correctly', function () {
        classSumator.add(2);
        classSumator.add('pesho');
        classSumator.add({a:'a'});
        classSumator.add(new Date(2016, 2, 3))
        expect(classSumator.toString()).to.equal('2, pesho, [Object object], Thu Mar 03 2016 00:00:00 GMT+0200 (FLE Standard Time)')
    });

    it('stringifies correctly', function () {
        expect(classSumator.toString()).to.equal('(empty)')
    });



})