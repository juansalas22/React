import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostar <CounterApp /> correctamente ', () => {
        
        const value = 100;
        const wrapper = shallow( <CounterApp value = {value}/>);

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de mostrar el numero enviado por props ', () => {
        
        const wrapper = shallow(
            <CounterApp
            value={100}
             />
        );
    
        const ValorC = wrapper.find('h2').text().trim();
        
        expect(ValorC).toBe('100');
    })
    
    test('Debe de incrementar con el boton de +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const ValorC = wrapper.find('h2').text().trim();
        
        expect(ValorC).toBe('1');
    })

    test('Debe de restas con el boton de -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const ValorC = wrapper.find('h2').text().trim();
        console.log(ValorC)
        expect(ValorC).toBe('-1');
    })

    test('Debe de colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow(
            <CounterApp
            value={105}
             />
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const ValorC = wrapper.find('h2').text().trim();
        console.log(ValorC)

        expect(ValorC).toBe('105');

    })
    
        
    
})
