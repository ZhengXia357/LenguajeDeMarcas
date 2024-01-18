// 4.- Hacer un programa JavaScript que contenga una función Dimemayor que reciba dos números diferentes y DEVUELVA el número mayor. Desde el body llamar a esa función dos veces, mostrando el resultado de la función. Una de las veces pide los números por pantalla. 

function dimeMayor(num1, num2) {
    if (num1 == num2) {
        alert("Los números son iguales");
    }else if (num1 > num2) {
        return ("Entre " + num1 + " y " + num2 + ", el número mayor es: " + num1);
    }else {
        return ("Entre " + num1 + " y " + num2 + ", el número mayor es: " + num2);
    }
}