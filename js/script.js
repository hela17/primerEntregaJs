
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



// OBJETOS

const ginBosque500cc = {
    marca: "Bosque",
    stock: 500,
    precio: 2500
}

const ginBulldog700ml = {
    marca: "Bulldog",
    stock: 700,
    precio: 6500
}
// console.log(ginBulldog700ml);

// FUNCION CONSTRUCTOR

// function Producto(marca, graduacion, estilo, volumen, precio)


//******* METODOS ********** */
class Producto {
    constructor(id, nombre, stock, precio) {

        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;

        // this.descontar = function() { this.stock = this.stock - 1 };
    }
}

// ginBosque500cc.descontar();
// console.log(Producto.stock);

const producto1 = new Producto(1, "Bosque", 50, 2500);
const producto2 = new Producto(2, "Bulldog", 100, 6300);
const producto3 = new Producto(3, "Fernet Branca", 25, 2000);
const producto4 = new Producto(4, "Aperol", 75, 2500);
    
const productos = [producto1, producto2, producto3, producto4];

// console.log(productos);
    
productos.forEach((productos) => {
    console.log(productos.stock);
});

const preciosActualizados = productos.map((producto) => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.1
    }
});
console.log(productos); console.log(preciosActualizados);