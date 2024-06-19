// Ejercicios de condicionales
/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento. 

    1. Descuento 20%
    2. Descuento 50%
    3. Descuento 70%
*/

const precioBruto = parseFloat(prompt('Ingrese el valor base del producto'));

const descuento = prompt('Defina el descuento que quiere aplicar: \n 1 -> Descuento 20% \n 2 -> Descuento 50% \n 3 -> Descuento 75%');

let descuentoOp = 0;
let precioNeto = 0;

switch (descuento) {
    case '1': descuentoOp = 20;
    break;
    case '2': descuentoOp = 50;
    break;
    case '3': descuentoOp = 75;
    break;
    default: alert('Selección de descuento no valida')
    break;
}

precioNeto = precioBruto - ((precioBruto*descuentoOp)/100);

alert('El oprecio final despues del descuento es: ' + precioNeto);