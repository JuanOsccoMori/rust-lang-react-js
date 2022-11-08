import React, { useState, useEffect } from 'react';

const Clock = () => {
    const personInitial = {
        date: new Date(),
        age: 0,
        name: 'Juan',
        last_name : 'Oscco Mori',
    }

    const [state, setState] = useState(personInitial);

    useEffect(() =>{
        const timerId = setInterval(
            () => tick(), 2000
        );
        return () => {
            clearInterval(timerId)
        };
    });

    const tick = () => {
        return setState({
            date: state.date,
            age: state.age + 1,
            name: state.name,
            last_name: state.last_name,
        });
    }
    return (
        <div>
            <h5>Hora Actual: {state.date.toLocaleTimeString()}</h5>
            <p>Nombre : {state.name} </p>
            <p>apellidos : {state.last_name} </p>
            <p>edad: {state.age} </p>
        </div>
    );
}

export default Clock;