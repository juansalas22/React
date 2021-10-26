import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';



describe('Pruebas en <PrimeraApp />', () => {
    
 //    test('Debe de mostrar el mensaje "Hola, soy Goku', () => {
 //        const saludo = 'Hola, soy Goku';
 //        const {getByText} = render(<PrimeraApp saludo={saludo} />);
 //        expect(getByText(saludo)).toBeInTheDocument();
 //    })

    test('Debe mostar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'ahi les voy';
        const wrapper = shallow(
             <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
              />
        );
        
        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subTitulo);

    })
    
    

})
