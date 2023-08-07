import React, { useContext } from 'react';
import counterContext from './CounterContext';

function Counter() {
    const { counter, increment, decrement } = useContext(counterContext);
    return (
        <>

            <div className="container1">
                <div className="section-title">
                    <h1>Context Counter </h1>
                </div>
                <div className="count-wrapper">
                    <button onClick={increment}>+</button>
                    <span>{counter}</span>
                    <button onClick={decrement}>-</button>
                </div>
            </div>

        </>
    );
}

export default Counter;