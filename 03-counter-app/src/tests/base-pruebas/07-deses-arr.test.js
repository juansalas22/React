import { retornaArreglo } from "../../base-pruebas/base-pruebas/07-deses-arr";

describe('Pruebas en desestructuracion 07-deses-arr.js', () => {
    
    test('Debe de retornar un string y un numero', () => {
        
        const [letras, numeros] = retornaArreglo();//['ABC', 123]

        //expect(arr).toEqual(['ABC', 123]);
        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');

        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');
    })
    
})
