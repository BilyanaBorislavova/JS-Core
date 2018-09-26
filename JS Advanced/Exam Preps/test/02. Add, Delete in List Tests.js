let expect = require('chai').expect;
let list = require('../02. Add, Delete in List');

describe("Add Delete in List", function () {

    it('adds', function () {
       list.add(1);
       list.add('pesho');
       list.add('baba');
       expect(list.toString()).to.equal("1, pesho, baba");
    });

    it("deletes -> undefined", function () {
        expect(list.delete(3)).to.equal(undefined);
        expect(list.delete(-3)).to.equal(undefined);
        expect(list.delete(1.5)).to.equal(undefined);
        expect(list.delete(-2.5)).to.equal(undefined);
        expect(list.delete('i will die alone')).to.equal(undefined);
        expect(list.delete([1])).to.equal(undefined);
    });

    it("deletes", function () {
        expect(list.delete(1)).to.equal('pesho');
        expect(list.toString()).to.equal("1, baba");
        list.add(1.5);
        list.add({});
        expect(list.toString()).to.equal("1, baba, 1.5, [object Object]");
        expect(list.delete(0)).to.equal(1);
        expect(list.toString()).to.equal("baba, 1.5, [object Object]");
        list.add(true);
        list.add(false);
        expect(list.toString()).to.equal("baba, 1.5, [object Object], true, false");
        expect(list.delete(4)).to.equal(false);
        expect(list.delete(0)).to.equal("baba");
        expect(list.toString()).to.equal("1.5, [object Object], true");
        expect(list.delete(2)).to.equal(true);
        list.delete(0);
        list.delete(0);
        expect(list.delete(0)).to.equal(undefined);
    })
});