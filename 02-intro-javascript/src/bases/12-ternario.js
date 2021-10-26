const activo = true;

const mensaje = (activo) ? 'habilitado' : 'Deshabilitado';

const mensaje2 = (!activo) ? 'habilitado' : 'Deshabilitado';

const mensaje3 = activo && 'habilitado';

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);