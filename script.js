
let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    console.log("Bienvenido al sitio numero 1 en ventas de bebidas");
} else if (edad <=0) {
    alert('La edad ingresada no es valida');
} else {
    alert('Te recordamos que tenemos codigos y no vendemos alcohol a menores de 18 años');
}



let opcionBebida = Number(prompt("Seleccione una opcion ingresando el numero pertinente: 1) Gin 2) Fernet 3)Cerveza 4) Salir "));


    switch (opcionBebida) {
        case 1:
            alert('Elegiste la opcion Gin');
            break;
        case 2:
            alert('Elegiste la opcion Fernet');
            break;
        case 3:
            alert('Elegiste la opcion Cerveza');
            break;
        case 4:
            console.log('Elegiste la opcion salir');
            break;
        default:
            alert('Opcion no valida')
            break;
}
    
function saludar(nombre) {
    console.log("hola " + nombre);
}

saludar("hela");