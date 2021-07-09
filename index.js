function Sumar (a, b){
    //Devuelve la suma entre a y b
    return null
}

function Restar (a, b){
    //Devuelve la resta entre a y b
    return null
}

function esMayor (a){
    //Devuelve True si la persona es mayor de edad y false en caso contrario.
    return null
}

function esHashtag (palabra){
    //Devuelve True si el primer caracter es un # y false en caso contrario.
    return null
}

function esPar(a){
    //Retorna True si el numero es par y false en caso contrario. Un numero es par si al dividirlo por 2 da resto 0. (Nota usar el % que devuelve el resto de una division si es 0 es par, sino es impar).
    return null
}

function mismaLetraInicial (palabra1, palabra2){
    //Devuelve True si ambas palabras tienen la misma letra inicial,false en caso contrario.(Nota: usar la funcion .charAt() de strings).
    return null
}

function cantidadDeA(palabra){
    //Retorna la cantidad de letras a que contiene la palabra. Si no contiene a, devuelve 0.
    return null
}

function Potencia (a, b){
    //Devuelve como resultado la potencia de a elevado por b. Si b es 0 retornar 1. y si a es 0 retornar 0.
    return null
}

function cantidadDeVocales(palabra){
    //Retorna la cantidad de vocales que contiene la palabra. Si no contiene vocal, devuelve 0.
    return null
}

function mismaCantidadCaracteres (palabra1, palabra2){
    //Devuelve True si la palabra 2 contiene la misma cantidad de caracteres que la palabra 1,false en caso contrario.(Nota: usar la funcion .lenght de strings).
    return null
}

function estaAprobado(nota1,nota2,nota3){
    //Retorna True si el promedio entre las 3 notas es mayor o igual a 7, sino retorna false.
    return null
}

function Resultado(nota1,nota2,nota3){
    //Retorna "Aprobado" si el promedio entre las 3 notas es mayor o igual a 7, "Regular" si es mayor o igual a 4 y menor que 7 y "Desaprobado" si es menor que 4.
    return null
}

function palabraEspecial(palabra){
    //Debe retornar la palabra con un * adelante y otro atra, ejemplo: *Hola*.Si tiene un asterisco tanto adelante y/o atras, no agregarlo.
    return null
}

function Concatenar(nombre,apellido){
    //Debe devolver "Apellido, Nombre", ej: "Perez, Juan".
    return null

}

function cantidadDeParesHasta(numero){
    //Debe retornar la cantidad de pares desde el 0 hasta el numero inclusive pasado por parametro, ej: cantidadDeParesHasta(10) retorna 5.
    //Consejo, se puede utilizar la funcion esPar.
    return null
}



module.exports = {
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
    
  }


