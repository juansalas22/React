const personajes = ['Goku', 'Vegueta', 'Trunks'];
//Las comas se usan para recorrer el arreglo
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const useState = (valor) => {
    return [valor, () => {console.log(`Hola Mundo`)}];
} 

const [nombre, setNombre] = useState('Picoro');
console.log(nombre);
setNombre();
