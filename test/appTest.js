const  assert = require('chai').assert;

const app = require("../app");

// Results (GLOBAL variáveis)
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

// Agrupando por testes
describe('App', function () {
    describe('sayHello()', function () {
        it('sayHello should return hello ', function () {
            // let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello')
        });

        it('sayHello should return type string', function () {
            //  let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    })

    describe('addNumbers()', function () {
        it('addNumbers should be above 5', function () {
            // let result = app.addNumbers(5,5); // passar (1,1)
            assert.isAbove(addNumbersResult, 5)
        });

        it('addNumbers should return type number', function () {
            // let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    })

})

/*
// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function () {
    it('sayHello should return hello ', function () {
       // let result = app.sayHello();
        assert.equal(sayHelloResult, 'hello')
    });

    it('sayHello should return type string', function () {
      //  let result = app.sayHello();
        assert.typeOf(sayHelloResult, 'string');
    });

    it('addNumbers should be above 5', function () {
       // let result = app.addNumbers(5,5); // passar (1,1)
        assert.isAbove(addNumbersResult, 5)
    });

    it('addNumbers should return type number', function () {
       // let result = app.addNumbers(5,5);
        assert.typeOf(addNumbersResult, 'number');
    });
})
*/
/*
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function () {
    it('sayHello should return hello ', function () {
        let result = sayHello();
        assert.equal(result, 'hello')
    });

    it('sayHello should return type string', function () {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should be above 5', function () {
        let result = addNumbers(5,5); // passar (1,1)
        assert.isAbove(result, 5)
    });

    it('addNumbers should return type number', function () {
        let result = addNumbers(5,5);
        assert.typeOf(result, 'number');
    });
})
*/

/*
const app = require("../app");
//
describe('App', function () {
    it(' app should return hello ', function () {
        assert.equal(app(), 'hello')
    });
})

*/