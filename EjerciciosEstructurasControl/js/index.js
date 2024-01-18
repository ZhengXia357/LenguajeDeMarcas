// 0) Se ingresan por pantalla tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;

function ej0() {
    var nota1 = parseInt(prompt("Introduce la primera nota"));
    var nota2 = parseInt(prompt("Introduce la segunda nota"));
    var nota3 = parseInt(prompt("Introduce la tercera nota"));
    var media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        alert("Promocionado");
    }
}

// 1) Solicitar que se capture dos veces una clave. Mostrar un mensaje si son iguales (tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==).

function ej1() {
    var clave1 = prompt("Intruduzca la primera clave");
    var clave2 = prompt("Intruduzca la segunda clave");

    if (clave1 == clave2) {
        alert("Las claves son iguales")
    }
}

// 2) Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo mostrar su suma y diferencia, en caso contrario mostrar el producto y la división del primero respecto al segundo.

function ej2() {
    var num1 = parseInt(prompt("Introduce primer número"));
    var num2 = parseInt(prompt("Introduce segundo número"));

    if (num1 > num2) {
        alert("La suma de los dos números es: " + (num1 + num2) + "\nLa resta del primer número y el segundo número es: " + (num1 - num2))
    } else {
        alert("El producto de ambos números es: " + (num1 * num2) + "\nLa división del primer número entre el segundo es: " + (num1 / num2))
    }
}

// 3) Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 6 mostrar un mensaje ‘bien’, si está entre 4 y 6 'regular', sino 'mal'.

function ej3() {
    var nota1 = parseInt(prompt("Introduce la primera nota"));
    var nota2 = parseInt(prompt("Introduce la segunda nota"));
    var nota3 = parseInt(prompt("Introduce la tercera nota"));
    var media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6) {
        alert("Bien");
    } else if (media > 4) {
        alert("Regular");
    } else{
        alert("Mal");
    }
}

// 4) Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.

function ej4() {
    var num1 = parseInt(prompt("Introduce un número natural"));

    if (num1 < 0) {
        alert("El número introducido es negativo");
    } else if (num1 > 0) {
        alert("El número introducido es positivo");
    } else{
        alert("El número introducido es cero");
    }
}

// 5) Hacer un programa JavaScript que muestre los números pares del 2 al 100. (con document.write)

function ej5() {
    for (let i = 2; i <= 100; i += 2) {
        document.write(i + " ");
    }
}

// 6) Hacer un programa JavaScript que muestre la suma de los 100 primeros números naturales. (con alert())

function ej6() {
    var suma = 0;

    for (let i = 0; i <= 100; i++) {
        suma += i;
    }

    alert(suma);
}

// 7) Hacer un programa JavaScript que muestre los números impares menores de 100 y su suma total. (con document.write)

function ej7() {
    var suma = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 != 0) {
            document.write(i + " ");
            suma += i;
        }
    }
    document.write("<br>La suma de los primeros números impares menores de cien es: " + suma);
}

// 8) Hacer un programa JavaScript que muestre los números del 100 al 0, en orden descendente. (con document.write)

function ej8() {
    for (let i = 100; i >= 0; i--) {
        document.write(i + " ");
    }
}

// 9) Hacer un programa JavaScript que muestre la tabla de multiplicar de un número que se pide por pantalla. (con alert() y document.write)

function ej9() {
    var mensaje = "";
    var num = parseInt(prompt("Introduce un número"));

    document.write("<h1>Esta es la tabla de multiplicar del " + num + "</h1>");
    document.write("<table style = 'border = 1px black solid; border-collapse : collapse;'>");
    for (let i = 0; i <= 10; i++) {
        document.write("<tr><td style = 'border : 1px black solid; padding : 5px'>");
        document.write(num + " x " + i + " = " + (num * i) + "<br>");
        document.write("</td></tr>")
        mensaje += num + " x " + i + " = " + (num * i) + "\n";
    }

    alert(mensaje);

    document.write("</table>");
}