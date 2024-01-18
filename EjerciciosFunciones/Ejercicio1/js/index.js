// 1.- Hacer un programa JavaScript que contenga una función DibujaCuadrado que reciba dos parámetros: un carácter (que puede ser cualquiera) y un número. La función debe mostrar por pantalla un cuadrado dibujado con el carácter recibido (tantas filas y columnas como indique el número). Desde el body pedir por pantalla el carácter y el número; y llamar a la función pasándole estos datos. 

function dibujaCuadrado(char, num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            document.write(char);
        }
        document.write("<br>")
    }
}