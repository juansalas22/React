describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los string', () => {
        //1. inicializacion
    const mensaje = 'Hola';

        //2. estimulo
        const mensaje2 = 'Hola';

        //3. Observar el comportamiento

        expect(mensaje).toBe(mensaje2); // ===
    })  
});



