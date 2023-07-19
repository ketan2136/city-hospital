import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const counterval = useSelector(state => state.counter);

    const increments = () => {
        dispatch(increment());
    }
    const decrements = () => {
        dispatch(decrement());
    }

    return (
        <div>
        
            
            <button onClick={() => increments()}>+</button>
            <span>{counterval.count}</span>
            <button onClick={() => decrements()}>-</button>

        </div>
    );
}

export default Counter;

