import { shallow } from 'enzyme';
import React from 'react';
import { GitExpertApp } from '../GitExpertApp';


describe('Pruebas en <GifExpertApp />', () => {
    
    test('Debe mostar <GitExpertApp /> correctamente ', () => {

        const wrapper = shallow(<GitExpertApp />);
        expect(wrapper).toMatchSnapshot();

    })
    
})
