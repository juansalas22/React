import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Prueba';

    test('Debe mostar <GifGrid /> correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe mostar <GifGrid /> correctamente', () => {

        const gifs = [{
            id:'ABX',
            url: 'Web',
            title: 'probando'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})
