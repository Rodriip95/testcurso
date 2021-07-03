const chai = require("chai")
const expect = chai.expect

const funciones_test = require("../index")

describe('Test de funciones: ', function() {
    describe('Check function Sumar', function(){
      it('TestCase Suma basica: ', function() {
         result = funciones_test.Sumar(2,5)
          expect(result).to.equal(7);
      })

      it('TestCase Resta basica: ', function() {
        result = funciones_test.Restar(12,5)
         expect(result).to.equal(7);
     })
    })
  })