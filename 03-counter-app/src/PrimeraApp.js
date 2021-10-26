/*
¡Ten en cuenta que nuestro código original ya no necesita importar React para usar JSX! 
(Pero aún necesitaríamos importar React para poder usar Hooks u otras exportaciones que
proporciona React).
*/
//import React, { Fragment } from 'react'; (Se importo para el Fragment)
import PropTypes from 'prop-types';
//FC
const PrimeraApp = ({saludo, parrafo}) => {

    return (
        // se puede utilizar <div></div> pero queda flotante
        // se puede utilizar <Fragment></Fragment> pero funciona con menos codigo:
        <> 
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{parrafo}</p>
        </>
        // EL <pre></pre> se usa para mostar un objeto
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    parrafo: "ahi les voy"
}

export default PrimeraApp;