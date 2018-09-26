let expect = require('chai').expect;
let createList = require('../02. Add, Swap, Shift Left, Right in List');

describe("Create List Has The Needed Functionality", function () {

    let myList;

    beforeEach(function () {
        myList = createList();
    });

    it("should have all properties", function () {
        expect(myList.hasOwnProperty('add')).to.equal(true);
        //expect(typeof myList.add).to.equal('function');

        expect(myList.hasOwnProperty('shiftLeft')).to.equal(true);
       // expect(typeof myList.shiftLeft).to.equal('function');

        expect(myList.hasOwnProperty('shiftRight')).to.equal(true);
      //  expect(typeof myList.shiftRight).to.equal('function');

        expect(myList.hasOwnProperty('swap')).to.equal(true);
       // expect(typeof myList.swap).to.equal('function');

        expect(myList.hasOwnProperty('toString')).to.equal(true);
       // expect(typeof myList.toString).to.equal('function');
    });

    it('should be empty on init', () => {
        expect(myList.toString()).to.equal('');
    });

    describe("Add Functionality", function () {
        it("adds correctly multiple values", function () {
            myList.add(1);
            myList.add('pesho');
            myList.add([1,'pesho']);
            myList.add(true);
            myList.add({baba:'gosho'});
            expect(myList.toString()).to.equal('1, pesho, 1,pesho, true, [object Object]')
        });

        it("adds correctly one number", function () {
            myList.add(1);
            expect(myList.toString()).to.equal('1')
        });

        it("adds correctly one string", function () {
            myList.add('baba');
            expect(myList.toString()).to.equal('baba')
        });

    });

   describe("shiftLeft Functionality", function () {
       it("shiftsLeft correctly", function () {
           myList.add(1);
           myList.add('two');
           myList.add(3);
           myList.shiftLeft();
           expect(myList.toString()).to.equal('two, 3, 1')

       });

       it("shiftsLeft correctly with one item", function () {
           myList.add(1);
           myList.shiftLeft();
           expect(myList.toString()).to.equal('1')
       });

       it("shiftsLeft correctly with no items", function () {
           myList.shiftLeft();
           expect(myList.toString()).to.equal('')
       });

       it("shifts left and right correctly", function () {
           myList.add(50);
           myList.add('pesho');
           myList.add('gosho');
           myList.add(true);
           myList.shiftRight();
           expect(myList.toString()).to.equal('true, 50, pesho, gosho');
           myList.shiftRight();
           expect(myList.toString()).to.equal('gosho, true, 50, pesho');
           myList.shiftLeft();
           expect(myList.toString()).to.equal('true, 50, pesho, gosho');
       });

       it("shiftsLeft correctly with multiple shifts", function () {
           myList.add(1);
           myList.add('two');
           myList.add(3);
           myList.shiftLeft();
           expect(myList.toString()).to.equal('two, 3, 1');
           myList.add('pesho');
           myList.add('baba');
           myList.add(7);
           expect(myList.toString()).to.equal('3, 1, pesho, baba, 7, two')

       });
   });



describe("shiftRight Functionality", function () {
    it("shiftsRight correctly", function () {
        myList.add('two');
        myList.add(3);
        myList.add(1);
        myList.add('four');
        myList.shiftRight();
        expect(myList.toString()).to.equal('four, two, 3, 1')
    });

    it("shiftsRight correctly with one item", function () {
        myList.add(1);
        myList.shiftRight();
        expect(myList.toString()).to.equal('1')
    });

    it("shiftsRight correctly with no items", function () {
        myList.shiftRight();
        expect(myList.toString()).to.equal('')
    });

});

describe("Swaps Functionality", function () {
    it("swaps correctly with equal indexes", function () {
        myList.add(1);
        myList.add(2);
        expect(myList.swap(1, 1)).to.equal(false);
        expect(myList.toString()).to.equal('1, 2');
    });

    it("swaps correctly with invalid indexes", function () {
        myList.add(1);
        myList.add(2);
        expect(myList.swap(1, 5)).to.equal(false);
        expect(myList.toString()).to.equal('1, 2');
        expect(myList.swap(-1, 0)).to.equal(false);
        expect(myList.toString()).to.equal('1, 2');
        expect(myList.swap(2, 3)).to.equal(false);
        expect(myList.toString()).to.equal('1, 2');
        expect(myList.swap(1, 0)).to.equal(false);
    });

    it('swaps', function () {
        myList.add('one');
        myList.add('two');
        myList.add('three');
        expect(myList.swap(2,0)).to.equal(true);
    });

    it("swaps correctly with invalid indexes", function () {
        myList.add(1);
        myList.add(2);
        expect(myList.swap(['pesho'], 5)).to.equal(false);
        expect(myList.toString()).to.equal('1, 2');
    });

    it("swaps correctly with invalid indexes", function () {
        myList.add(1);
        myList.add(2);
        expect(myList.swap(3, ['penka'])).to.equal(false);
        expect(myList.toString()).to.equal('1, 2');
    });

    it("swaps", function () {
        myList.add(1);
        myList.add(2);
        expect(myList.swap(1.5, 2)).to.equal(false);
        expect(myList.swap(1, 2.35)).to.equal(false);
        expect(myList.swap(1.2, 2.3)).to.equal(false);
    });

    it("swaps correctly with invalid indexes", function () {
        myList.add(1);
        myList.add('pesho');
        expect(myList.swap()).to.equal(false);
        expect(myList.swap('pesho', 1)).to.equal(false);
        expect(myList.swap(NaN, NaN)).to.equal(false);
        expect(myList.swap(1, NaN)).to.equal(false);
    });

    it("swaps correctly with valid indexes", function () {
        myList.add(1);
        myList.add(2);
        myList.add(5);
        expect(myList.swap(0, 2)).to.equal(true);
        expect(myList.toString()).to.equal('5, 2, 1');
    });

    it("swaps correctly with multiple valid indexes", function () {
        myList.add(1);
        myList.add(2);
        myList.add(5);
        expect(myList.swap(1, 2)).to.equal(true);
        expect(myList.toString()).to.equal('1, 5, 2');
        expect(myList.swap(0, 2)).to.equal(true);
        expect(myList.toString()).to.equal('2, 5, 1');
    });

});

describe("toString Functionality", function () {
    it("stringifies correctly with no values", function () {
        expect(myList.toString()).to.equal('');
    });

    it("stringifies correctly", function () {
        myList.add(2);
        myList.add('gosho');
        myList.add(47);
        expect(myList.toString()).to.equal('2, gosho, 47')
    });

    it("stringifies correctly with one value", function () {
        myList.add('i am miserable');
        expect(myList.toString()).to.equal('i am miserable');
    });
})


});