const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45, 
//Se recomienda no usar caracteres especiales 
    direccion: {
        ciudad: 'Bogota',
        zip: 234567,
    }
};

//Se usa para visualizar mejor en una consola 
console.table(persona);

//Se creo un clon de persona
const persona2 = { ...persona };
persona2.nombre = 'Carlos';

console.log(persona);
console.log(persona2);