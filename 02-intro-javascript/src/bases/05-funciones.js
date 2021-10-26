// Funciones JS
//const saludar = function(nombre) {
//  return `Hola, ${nombre}`;
//}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
} 

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

// console.log(saludar('goku'));

console.log(saludar2('vegueta'));
console.log(saludar3('gohan'));
console.log(saludar4());

const getUser = () => ({
    nombre: 'juan',
    apellido: 'salas',
})

const user = getUser();
console.log(user);

//Tarea
const getUsuarioActivo = (nombre) => ({ // return de un objeto implicito
    uid: 'ABC567',
    userName: nombre,
})

const usuarioActivo = getUsuarioActivo('antonio');
console.log(usuarioActivo);