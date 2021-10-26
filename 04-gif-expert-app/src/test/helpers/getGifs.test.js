import { getGifs } from "../../helpers/getGifs"
import React from 'react';


describe('Pruebas con getGifs Fecth', () => {
    
    test('Debe de traer 5 elementos', async() => {
        
        const gifs = await getGifs('Pokemon');

        expect(gifs.length).toBe(5);

    })
    
    test('Debe de traer 5 elementos', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })

})
