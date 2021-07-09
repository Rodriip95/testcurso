const chai = require("chai")
const expect = chai.expect

const {
  Sumar,
  Restar,
  esMayor,
  Potencia,
  esHashtag,
  esPar,
  Resultado,
  mismaCantidadCaracteres,
  mismaLetraInicial,
  cantidadDeA,
  cantidadDeVocales,
  estaAprobado,
  Concatenar,
  palabraEspecial,
  cantidadDeParesHasta
} = require("../index")

describe('Test de funciones: ', function() {
    describe('Check function Sumar', function(){
      it('TestCase Suma basica: ', function() {
         result = Sumar(2,5)
          expect(result).to.equal(7);
      })
      
      it('Suma -2 + -2: ', function() {
        result = Sumar(-2,-2)
         expect(result).to.equal(-4);
      })

      it('Suma 3 + 8: ', function() {
        result = Sumar(3,8)
         expect(result).to.equal(11);
      }) 
    })

    describe('Check function Restar', function(){
      it('TestCase Resta basica: ', function() {
         result = Restar(5,2)
          expect(result).to.equal(3);
      })
      
      it('Resta -2 -(-2): ', function() {
        result = Restar(-2,-2)
         expect(result).to.equal(0);
      })

      it('Resta 3 - 8: ', function() {
        result = Restar(3,8)
         expect(result).to.equal(-5);
      })
    })

    describe('Check function esMayor', function(){
      it('TestCase esMayor: ', function() {
         result = esMaypor(18)
          expect(result).to.equal(true);
      })
      
      it('esMayor(25): ', function() {
        result = esMayor(25)
         expect(result).to.equal(true);
      })

      it('esMayor(10): ', function() {
        result = esMayor(10)
         expect(result).to.equal(false);
      })
    })

    describe('Check function esHashtag', function(){
      it('TestCase esHashtag: ', function() {
         result = esHashtag("#JavaScript")
          expect(result).to.equal(true);
      })
      
      it('esHashtag("JavaScript"): ', function() {
        result = esHashtag("JavaScript")
         expect(result).to.equal(false);
      })

      it('esHashtag(#): ', function() {
        result = esHash("#")
         expect(result).to.equal(true);
      })
    })

    describe('Check function esPar', function(){
      it('TestCase esPar: ', function() {
         result = esPar(2)
          expect(result).to.equal(true);
      })
      
      it('esPar("3"): ', function() {
        result = esPar(3)
         expect(result).to.equal(false);
      })

      it('esPar("4"): ', function() {
        result = esPar(4)
         expect(result).to.equal(true);
      })
    })

    describe('Check function mismaLetraInicial', function(){
      it('TestCase mismaLetraInicial: ', function() {
         result = mismaLetraInicial("hola","helado")
          expect(result).to.equal(true);
      })
      
      it('mismaLetraInicial("atras","hatras"): ', function() {
        result = mismaLetraInicial("atras","hatras")
         expect(result).to.equal(false);
      })

      it('mismaLetraInicial("",""): ', function() {
        result = mismaLetraInicial("","")
         expect(result).to.equal(true);
      })
    })

    describe('Check function cantidadDeA', function(){
      it('TestCase cantidadDeA: ', function() {
         result = cantidadDeA("abracadabra")
          expect(result).to.equal(5);
      })
      
      it('cantidadDeA("hello"): ', function() {
        result = cantidadDeA("hello")
         expect(result).to.equal(0);
      })

      it('cantidadDeA(""): ', function() {
        result = cantidadDeA("")
         expect(result).to.equal(0);
      })
    })

    describe('Check function potencia', function(){
      it('TestCase potencia: ', function() {
         result = Potencia(2,3)
          expect(result).to.equal(8);
      })
      
      it('Potencia(2,3): ', function() {
        result = Potencia(0,3)
         expect(result).to.equal(0);
      })

      it('Potencia(100,0): ', function() {
        result = Potencia(100,0)
         expect(result).to.equal(1);
      })
    })

    describe('Check function cantidadDeVocales', function(){
      it('TestCase cantidadDeVocales: ', function() {
         result = cantidadDeVocales("aeiou")
          expect(result).to.equal(5);
      })
      
      it('cantidadDeVocales("maxiconsumo"): ', function() {
        result = cantidadDeVocales("maxiconsumo")
         expect(result).to.equal(5);
      })

      it('cantidadDeVocales("HTML"): ', function() {
        result = cantidadDeVocales("HTML")
         expect(result).to.equal(0);
      })
    })

    describe('Check function mismaCantidadCaracteres', function(){
      it('TestCase mismaCantidadCaracteres: ', function() {
         result = mismaCantidadCaracteres("aeiou","aeiou")
          expect(result).to.equal(true);
      })
      
      it('mismaCantidadCaracteres("","aeiou"): ', function() {
        result = mismaCantidadCaracteres("","aeiou")
         expect(result).to.equal(false);
      })

      it('mismaCantidadCaracteres("basquetbal","atletismos"): ', function() {
        result = mismaCantidadCaracteres("basquetbal","atletismos")
         expect(result).to.equal(true);
      })
    })

    describe('Check function estaAprobado', function(){
      it('TestCase estaAprobado: ', function() {
         result = estaAprobado(8,9,8)
          expect(result).to.equal(true);
      })
      
      it('estaAprobado(5,4,6): ', function() {
        result = estaAprobado(5,4,6)
         expect(result).to.equal(false);
      })

      it('estaAprobado(7,6,0): ', function() {
        result = estaAprobado(7,6,0)
         expect(result).to.equal(false);
      })
    })

    describe('Check function Resultado', function(){
      it('TestCase Resultado: ', function() {
         result = Resultado(8,9,8)
          expect(result).to.equal("Aprobado");
      })
      
      it('Resultado(5,4,6): ', function() {
        result = Resultado(5,4,6)
         expect(result).to.equal("Regular");
      })

      it('Resultado(1,2,3): ', function() {
        result = Resultado(1,2,3)
         expect(result).to.equal("Desaprobado");
      })
    })

    describe('Check function palabraEspecial', function(){
      it('TestCase palabraEspecial: ', function() {
         result = palabraEspecial("hola")
          expect(result).to.equal("*hola*");
      })
      
      it('palabraEspecial("JS"): ', function() {
        result = palabraEspecial("JS")
         expect(result).to.equal("*JS*");
      })

      it('palabraEspecial("*hola*"): ', function() {
        result = palabraEspecial("")
         expect(result).to.equal("*hola*");
      })
    })

    describe('Check function Concatenar', function(){
      it('TestCase Concatenar: ', function() {
         result = Concatenar("Rodrigo", "Penela")
          expect(result).to.equal("Penela, Rodrigo");
      })
      
      it('Concatenar("Juan", "Perez"): ', function() {
        result = Concatenar("Juan", "Perez")
         expect(result).to.equal("Perez, Juan");
      })

      it('Concatenar("Esteban", "Quito"): ', function() {
        result = Concatenar("Esteban", "Quito")
         expect(result).to.equal("Quito, Esteban");
      })
    })

    describe('Check function cantidadParesHasta', function(){
      it('TestCase cantidadParesHasta: ', function() {
         result = cantidadParesHasta(10)
          expect(result).to.equal(5);
      })
      
      it('cantidadParesHasta(20): ', function() {
        result = Concatenar(20)
         expect(result).to.equal(10);
      })

      it('cantidadParesHasta(1): ', function() {
        result = cantidadParesHasta(1)
         expect(result).to.equal(0);
      })
    })
  })



