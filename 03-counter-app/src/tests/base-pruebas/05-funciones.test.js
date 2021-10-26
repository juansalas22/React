import { getUser }  from "../../base-pruebas/base-pruebas/05-funciones"
import  { getUsuarioActivo } from "../../base-pruebas/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
    
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    //getUsuarioActivo debe de restornar un objeto
    
    test('getUsuarioActivo debe de restornar un objeto', () => {
        
        const nombre = 'Juan';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
        
    })
})
