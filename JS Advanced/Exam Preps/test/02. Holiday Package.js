let expect =  require('chai').expect;
let holiday = require('../02');

describe('Holiday Package', function () {
    let myList;

    beforeEach(function () {
        myList = new HolidayPackage('Varna', 'Summer');
    });

    it('has all properties', function () {
        expect(myList.hasOwnProperty('vacationers')).to.equal(true, "Missing data property");
        expect(myList.hasOwnProperty('destination')).to.equal(true, "Missing data property");
        expect(myList.hasOwnProperty('season')).to.equal(true, "Missing data property");
        expect(myList.insuranceIncluded).to.equal(false);
    });

    it('no vacationers', function () {
        expect(myList.showVacationers().to.equal('No vacationers are added yet'));
    });

    it('no vacationers', function () {
        expect(() => myList.insuranceIncluded = 'true').to.throw;
    });

    it('add vacationers err', function () {
        expect(() => myList.addVacationer('Pesho').to.throw());
    });

    it('add vacationers err', function () {
        expect(() => myList.addVacationer(123).to.throw());
    });

    it('add vacationers err', function () {
        expect(() => myList.addVacationer(' ').to.throw());
    });

   it('add vacationer', function () {
       myList.addVacationer('Baba Yaga');
       expect(myList.showVacationers('Vacationers:\nBaba Yaga'));
   });

   it('add vacationers', function () {
       myList.addVacationer('Ruru Riri');
       myList.addVacationer('Lala Lala');
       myList.addVacationer('Turu Ruru');
       expect(myList.showVacationers('Vacationers:\nRuru Riri\nLala Lala\nTuru Ruru'));
   });

    it('generate holiday package err', function () {
        expect(() => myList.generateHolidayPackage().to.throw());
    });

    it('generates holiday package', function () {
        myList.addVacationer('Pesho Goshov');
        myList.addVacationer('Lala Lolo');
        myList.addVacationer('Lala Lolo');
        expect(myList.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Varna\nVacationers:\nPesho Goshov\nLala Lolo\nPrice: 1000')
    });

    it('generates holiday package', function () {
        myList.addVacationer('Pesho Goshov');
        myList.addVacationer('Lala Lolo');
        myList.insuranceIncluded = true;
        expect(myList.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Varna\nVacationers:\nPesho Goshov\nLala Lolo\nPrice: 1100')
    });

    it('throws an error', function () {
        expect(() => myList.insuranceIncluded = 'pesho').to.throw();
        expect(() => myList.insuranceIncluded = 123).to.throw();
    });

});