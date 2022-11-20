import React, { useState } from 'react';
import { getRandomJokey } from './services/AxiosService';

export const App = () => {
    const [jokes, setJokes] = useState(null);
    const [positiveCount, setPositiveCount] = useState(0);
    const [negativeCount, setNegativeCount] = useState(0);

    const obtainRandomJokes = () => {
        getRandomJokey()
            .then((response) => {
                if(response.status === 200) setJokes(response.data)
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
    // Contador
    const onCount = (setCounter, counter) => {
        setCounter(counter + 1);
        obtainRandomJokes();
    };

    return (
        <div>
            <h1>Axios Jokes Example</h1>
            { jokes != null ? 
            (
                <div>
                    <h4>Pay attention, I'm going to tell you jokes</h4>
                    <p>Joke: {jokes.value}</p>
                    <div>
                        <span>Joke counter, how many are good and how many are bad</span>
                        <div>
                            <button onClick={() => onCount(setPositiveCount, positiveCount)}>have liked +{positiveCount}</button>
                            <button onClick={() => onCount(setNegativeCount, negativeCount)}>you have been upset -{negativeCount}</button>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div>
                    <p>Generate new Jokes</p>
                    <button onClick={obtainRandomJokes}>Add jokes!!</button>
                </div>
            )
            }
            
        </div>
    );
}