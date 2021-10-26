// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        direccion: {
            ciudad: 'Bogota',
            zip: 345678,
        }
        
    }

}

//Desestructuracion anidada de objetos: direccion:{ciudad, zip}

const {nombreClave, anios, direccion: {ciudad, zip}} = useContext( persona );

console.log(nombreClave, anios);
console.log(ciudad, zip);
