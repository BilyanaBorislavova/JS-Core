let expect = require('chai').expect;
let str = require('../02. String Builder');

describe("StringBuilder Functionality", function () {

    let stringBuilder;

    beforeEach(function () {
        stringBuilder = new StringBuilder();
    });
    it("should have property data", function () {
        expect(stringBuilder.hasOwnProperty('_stringArray')).to.equal(true, "Missing data array property")
    });
    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('append')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('prepend')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('insertAt')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('remove')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

    it('must initialize data to an empty array', function () {
        expect(stringBuilder._stringArray instanceof Array).to.equal(true, 'Data must be of type array');
        expect(stringBuilder._stringArray.length).to.equal(0, 'Data array must be initialized empty');
       // expect(stringBuilder._stringArray).not.to.equal(null);
       // expect(stringBuilder._stringArray).not.to.equal(undefined);
    });
    
    describe("append functionality", function () {
        it("should throw error if not a string", function () {
        expect(stringBuilder.append(123)).to.throw(TypeError);
        expect(stringBuilder.append(['pesho'])).to.throw(TypeError);
        expect(stringBuilder.append({baba:'gosho'})).to.throw(TypeError);
        expect(stringBuilder.append(12,3)).to.throw(TypeError);
        expect(stringBuilder.append(null)).to.throw(TypeError);
        expect(stringBuilder.append(undefined)).to.throw(TypeError);
        expect(stringBuilder.append([])).to.throw(TypeError);
        expect(stringBuilder.append({})).to.throw(TypeError);
        expect(stringBuilder.append(new Map())).to.throw(TypeError);
        expect(stringBuilder.append()).to.throw(TypeError);
        });

        it("should append with no input", function () {
            expect(stringBuilder.toString()).to.equal('');
        });
        
        it("should append string at the end of the str", function () {
            stringBuilder.append('pesho');
            expect(stringBuilder.toString()).to.equal('pesho');
        });

        it("should append string at the end of the str", function () {
            stringBuilder.append('pesho');
            stringBuilder.append('gosho');
            expect(stringBuilder.toString()).to.equal('peshogosho');
        });
    });

    describe("prepend functionality", function () {
        it("should throw error if not a string", function () {
            expect(stringBuilder.prepend(123)).to.throw(TypeError);
            expect(stringBuilder.prepend(['pesho'])).to.throw(TypeError);
            expect(stringBuilder.prepend({baba:'gosho'})).to.throw(TypeError);
            expect(stringBuilder.prepend(12,3)).to.throw(TypeError);
            expect(stringBuilder.prepend(null)).to.throw(TypeError);
            expect(stringBuilder.prepend(undefined)).to.throw(TypeError);
            expect(stringBuilder.prepend([])).to.throw(TypeError);
            expect(stringBuilder.prepend({})).to.throw(TypeError);
            expect(stringBuilder.prepend(new Map())).to.throw(TypeError);
            expect(stringBuilder.prepend()).to.throw(TypeError);
        });

        it("should prepend with no input", function () {
            expect(stringBuilder.toString()).to.equal('');
        });

        it("should prepend string at the start of the str", function () {
            stringBuilder.prepend('pesho');
            expect(stringBuilder.toString()).to.equal('pesho');
        });

        it("should prepend string at the start of the str", function () {
            stringBuilder.prepend('pesho');
            stringBuilder.prepend('gosho');
            expect(stringBuilder.toString()).to.equal('goshopesho');
        });
    });
    
    describe("insertAt functionality", function () {
        it("should throw error if not a string", function () {
            expect(stringBuilder.insertAt(123, 'pesho')).to.throw(TypeError);
            expect(stringBuilder.insertAt(['pesho'], 1)).to.throw(TypeError);
            expect(stringBuilder.insertAt({baba:'gosho'}, -1)).to.throw(TypeError);
            expect(stringBuilder.insertAt('lala', 5.8)).to.throw(TypeError);
            expect(stringBuilder.insertAt()).to.throw(TypeError);
        });

        it("should insertAt with no input", function () {
            stringBuilder.append('pesho');
            stringBuilder.insertAt('',1);
            expect(stringBuilder.toString()).to.equal('');
        });

        it("should prepend string at the start of the str", function () {
            stringBuilder.append('pesho');
            stringBuilder.insertAt('gosho',1);
            expect(stringBuilder.toString()).to.equal('pgoshoesho');
        });

        it("should prepend string at the start of the str", function () {
            stringBuilder.append('pesho');
            stringBuilder.prepend('gosho');
            stringBuilder.insertAt('baba', 0);
            expect(stringBuilder.toString()).to.equal('babagoshopesho');
        });

        it("should prepend string at the start of the str", function () {
            stringBuilder.append('pesho');
            stringBuilder.prepend('gosho');
            stringBuilder.insertAt('baba', stringBuilder.length - 1);
            expect(stringBuilder.toString()).to.equal('goshopeshobaba');
        });
    });

    describe("remove functionality", function () {
        it("should throw error if not a string", function () {
            expect(stringBuilder.remove(123, 'pesho')).to.throw(TypeError);
            expect(stringBuilder.remove(['pesho'], 1)).to.throw(TypeError);
            expect(stringBuilder.remove({baba:'gosho'}, -1)).to.throw(TypeError);
            expect(stringBuilder.remove(5, -1)).to.throw(TypeError);
            expect(stringBuilder.remove(-1, 5)).to.throw(TypeError);
            expect(stringBuilder.remove(12.3, 5.8)).to.throw(TypeError);
            expect(stringBuilder.remove()).to.throw(TypeError);
        });

        it("should remove nothing", function () {
            stringBuilder.append('mygrandmaisawesome');
            stringBuilder.remove(0, 0);
            expect(stringBuilder.toString()).to.equal('mygrandmaisawesome');
        });

        it("should remove nothing", function () {
            stringBuilder.remove(0, 0);
            expect(stringBuilder.toString()).to.equal('');
        });
        
        it("should remove with correct indexes", function () {
            stringBuilder.append('mygrandmaisawesome');
            stringBuilder.prepend('peshoiscool ');
            stringBuilder.remove(5, 3);
            expect(stringBuilder.toString()).to.equal('peshoool mygrandmaisawesome')
        })
    });

    describe("toString functionality", function () {
        it("should return", function () {
            stringBuilder.append('mygrandmaisawesome');
            stringBuilder.prepend('peshoiscool ');
            expect(stringBuilder.toString()).to.equal('peshoiscool mygrandmaisawesome');
        });

        it("should return an empty string with no value passed", function () {
            expect(stringBuilder.toString()).to.equal('');
        })
    });
    
    describe("mixed functionality", function () {
        it("should check functionalities", function () {
            stringBuilder.prepend('pesho');
            stringBuilder.append('gosho');
            stringBuilder.insertAt('baba',5);
            expect(stringBuilder.toString()).to.equal('peshobabagosho');
            stringBuilder.remove(5, 2);
            expect(stringBuilder.toString()).to.equal('peshobagosho');
        });

        it("...", function () {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop',5 );
            expect(stringBuilder.toString()).to.equal('User,woop hello, there');
            str.remove(6, 3);
            expect(stringBuilder.toString()).to.equal('User,w hello, there');
        })
    })

});