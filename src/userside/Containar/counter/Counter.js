
//1import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slice/CounterSlice';

function Counter(props) {
    const dispatch = useDispatch()

    const couterData = useSelector(state=>state.counter)

    const handleInc = () => {
        dispatch(increment())
    }

    const handleDec = () => {
        dispatch(decrement())
    }

    return (
        <>
        <h1>hhh</h1>
       
        <div>
            <button onClick={() => handleInc()}>+</button>
            <span>{couterData.count}</span>
            <button onClick={() => handleDec()}>-</button>
        </div>
        </>
    );
}

export default Counter;

