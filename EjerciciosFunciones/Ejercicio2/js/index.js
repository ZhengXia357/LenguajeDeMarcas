// 2.- Modifica el código anterior para realizar la función DibujaRectangulo que reciba tres parámetros: un carácter (que puede ser cualquiera) y dos números para indicar el nº de filas y el de columnas. 


function dibujaCuadrado(char, nAlto, nAncho) {
    for (let i = 0; i < nAlto; i++) {
        for (let j = 0; j < nAncho; j++) {
            document.write(char);
        }
        document.write("<br>")
    }
}