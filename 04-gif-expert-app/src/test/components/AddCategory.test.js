import React from 'react'

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en el componente <AddCategory />', () => {
    
    const setcategories = jest.fn();
    let wrapper = shallow(<AddCategory setcategories={setcategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategories={setcategories}/>);
    })
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hello';

        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

    })
    
    test('No debe de postear la informacion con submit ', () => {
        
        wrapper.find('form').simulate('onSubmit', {preventDefault(){}});

        expect(setcategories).not.toHaveBeenCalled();

    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {
        const value = 'Hola Juan';

        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setcategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
        
    })
    


})
