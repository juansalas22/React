import { getHeroeByIdAsync } from "../../base-pruebas/base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    // Para tareas asicronas es muy importante usar el parametro: done.
    test('getHeroeByIdAsync Debe retornar un heroe async', (done) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });

    });

    test('Debe obtener un error si el heroe por id no existe', (done) => {
        
        const id = 10;

        getHeroeByIdAsync(id)
            .catch( error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })

    });
    
})
