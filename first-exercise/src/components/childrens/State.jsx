import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StateComponent = (state) => {
    const [connected, setConnected] = useState(state);
    return (
        <div>
            <h4> {connected === false ? 'Contacto no disponible' : 'Contacto En linea'}</h4>
            <button onClick={() => setConnected(!connected)}> { connected === false ? 'Conectado' : 'Desconectado' } </button>
        </div>
    );
}

StateComponent.propTypes = {
    state: PropTypes.bool,
}

export default StateComponent;