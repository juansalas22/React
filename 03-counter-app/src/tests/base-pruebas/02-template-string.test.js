import  '@testing-library/jest-dom'

import { getSaludo } from "../../base-pruebas/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar "Hola Juan!"', () => {
        
        const nombre = 'Juan';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    })
    // getSaludo debe de retornar Hola Carlos! si no hay argumento en nombre
    test('getSaludo debe de retornar "Hola Carlos!"', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola ' + 'Carlos' + '!');
    })
})


