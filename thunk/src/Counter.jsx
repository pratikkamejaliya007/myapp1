// Counter.jsx
import React from 'react';
import { increment, decrement } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1 className="counter-heading">Count: {count}</h1>
            <button className="counter-button" onClick={() => dispatch(increment())}>+</button>
            <button className="counter-button" onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default Counter;
