const nombre = 'juan';
const apellido = 'salas';

// const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(params) {
    return `Hola ${nombre}`;
}

console.log(`Este es un texto ${getSaludo(nombre)}`);