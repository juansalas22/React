import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', () => {
        
        const {result} = renderHook( () => useFetchGifs('prueba'));

        const {data, loading} = result.current;
        console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
})
