let expect = require('chai').expect;
let SubscriptionCard = require('../02. Subscription card');

describe("Subscription Card", function () {
    let subscription;

    beforeEach(function () {
        subscription = new SubscriptionCard();
    });

    it('has all properties', function () {
        expect(subscription.hasOwnProperty('_firstname')).to.equal(true, "Missing _stringArray property");
        expect(subscription.hasOwnProperty('_lastname')).to.equal(true, "Missing _stringArray property");
        expect(subscription.hasOwnProperty('_subscriptions ')).to.equal(true, "Missing _stringArray property");
        expect(subscription.hasOwnProperty('_SSN')).to.equal(true, "Missing _stringArray property");
        expect(subscription.hasOwnProperty('_blocked')).to.equal(true, "Missing _stringArray property")
    });

  // it('must initialize data to an empty array', function () {
  //     expect(subscription._subscriptions instanceof Array).to.equal(true, 'Data must be of type array');
  //     expect(subscription._subscriptions.length).to.equal(0, 'Data array must be initialized empty');
  //     expect(subscription._subscriptions).hasOwnProperty('line').to.equal(true);
  //     expect(subscription._subscriptions).hasOwnProperty('startDate').to.equal(true);
  //     expect(subscription._subscriptions).hasOwnProperty('endDate').to.equal(true);
  // });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('firstName')).to.equal(true, "Missing append function");
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('lastName')).to.equal(true, "Missing prepend function");
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('SSN')).to.equal(true, "Missing insertAt function");
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('isBlocked')).to.equal(true, "Missing remove function");
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('addSubscription')).to.equal(true, "Missing toString function");
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('isValid')).to.equal(true, "Missing toString function");
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('block')).to.equal(true, "Missing toString function");
        expect(Object.getPrototypeOf(subscription).hasOwnProperty('unblock')).to.equal(true, "Missing toString function");
    });

    it('must get first name', function () {
        subscription('Pesho', 'Goshov', 15);
        expect(subscription.firstName).to.equal('Pesho');
        expect(subscription.lastName).to.equal('Goshov');
        expect(subscription.SSN).to.equal(15)
    });


    it('addSubscription', function () {
        subscription.addSubscription('120', new Date('2018-05-25'), new Date('2018-05-21'));
    });

    it('addSubscription', function () {
        subscription.addSubscription('*', new Date('2018-05-25'), new Date('2018-05-21'));
    });

    it('isValid', function () {
        expect(subscription.isValid()).to.equal(false);
    });

    it('isValid', function () {
        expect(subscription.isValid('lala', new Date('2018-05-12')).to.equal(false));
    });

    it('block', function () {
        subscription.block();
        expect(subscription._blocked).to.equal(true);
    });

    it('unblock', function () {
        subscription.unblock();
        expect(subscription._blocked).to.equal(false);
    });


})