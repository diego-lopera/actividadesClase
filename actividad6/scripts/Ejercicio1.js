console.log('HOLA');

// Ejercicios de condicionales

/*
1.) Verificación de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano.
*/

let edad = parseInt(prompt('Por favor ingrese su edad'));

// let ciudadania = prompt("Escriba si o no en caso de ser o no ciudadano Colombiano");
let esCiudadano = confirm('¿Eres ciudadano Colombiano?');

console.log(edad, esCiudadano);

if (edad >= 18 && esCiudadano == true) {
    alert("Puedes votar en las proximas elecciones :)");
} else {
    alert("No puedes votar en las proximas elecciones :(");
}