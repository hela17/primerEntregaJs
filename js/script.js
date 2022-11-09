
// let edad = prompt("Ingrese su edad");

// if (edad >= 18) {
//     console.log("Bienvenido al sitio numero 1 en ventas de bebidas");
// } else if (edad <=0) {
//     alert('La edad ingresada no es valida');
// } else {
//     alert('Te recordamos que tenemos codigos y no vendemos alcohol a menores de 18 años');
// }



// let opcionBebida = Number(prompt("Seleccione una opcion ingresando el numero pertinente: 1) Gin 2) Fernet 3)Cerveza 4) Salir "));


//     switch (opcionBebida) {
//         case 1:
//             alert('Elegiste la opcion Gin');
//             break;
//         case 2:
//             alert('Elegiste la opcion Fernet');
//             break;
//         case 3:
//             alert('Elegiste la opcion Cerveza');
//             break;
//         case 4:
//             console.log('Elegiste la opcion salir');
//             break;
//         default:
//             alert('Opcion no valida')
//             break;
// }
    
function saludar(nombre) {
    console.log("hola " + nombre);
}

saludar("hela");

function asignarOperacion(op) {
    if (op == "sumar") {
       return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
} 

let suma = asignarOperacion('sumar')
let resta = asignarOperacion('restar')

console.log(suma(4, 6));
console.log(resta(5, 3));


//

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
} 

const numeros = [1, 2, 3, 4];

porCadaUno(numeros, console.log)