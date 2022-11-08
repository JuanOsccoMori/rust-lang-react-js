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
            () => tick(), 1000
        );
        clearInterval(timerId)
    },[state])

    const tick = () => {
            setState((prevState) => {
                let age = prevState.age + 1;
                return {
                    ...prevState,
                    date: new Date(),
                    age
                }
            })
        }
    return (
        <div>
            <h5>Hora Actual: {state.date.toLocaleTimeString()}</h5>
            <p>Nombre : {state.name} </p>
            <p>apellidos : {state.last_name} </p>
            <p>edad: {state.age} </p>

            <button onClick={tick}>tick</button>
        </div>
    );
}

export default Clock;