import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

const Home = () => {
    const dispatch = useDispatch();
    let {value: counter} = useSelector((state) => state.counter);
    function incrementCount () {
        dispatch(increment());
    }
    function decrementCount() {
        dispatch(decrement());
    }
    return (
        <>
            <div>Counter : {counter}</div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </>
    )
}

export default Home