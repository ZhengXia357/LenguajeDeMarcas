// 6.- Modifica el programa del ejercicio 5 para que, además de recibir los dos parámetros anteriores, reciba uno más: un booleano (true/false) que indique la dirección en la que se imprimirá la pirámide. Por ejemplo: 

function piramide() { //No se introducen parámetros porque si hay que pedirlos por el programa se sobreescribirían de todas formas
    var char = prompt("Introduce el carácter para formar la pirámide");
    var num = parseInt(prompt("Introduce el tamaño de la base de la pirámide"));
    var dir = prompt("Introcuce true o false según la orientación que quieras para la pirámide\ntrue para que esté normal\nfalse para que esté invertido");

    if (dir == "true") {
        for (let i = num; i > 0; i--) {
            for (let j = 1; j < i; j++) {
                document.write(char);
            }
            document.write("<br>")
        }
    } else {
        for (let i = num; i > 0; i--) {
            for (let j = 0; j <= (num - i); j++) {
                document.write(char);
            }
            document.write("<br>")
        }
    }
}