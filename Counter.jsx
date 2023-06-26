import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/CounterSlice';

 
const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    console.log(count)
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems:'center', gap:30}}>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};



export default Counter
