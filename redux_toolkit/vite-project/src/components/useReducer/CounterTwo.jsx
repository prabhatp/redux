import React, {useReducer} from 'react';

const initialState = {
    counter : 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': {
            return  {counter: state.counter + action.value}
        }
        case 'decrement': {
            return  {counter: state.counter - action.value}
        }
        case 'reset': {
            return  initialState
        }
        default: 
            return  state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <div>Count - {count.counter}</div>
            <button onClick={() => dispatch({'type': 'increment', 'value': 5})}>Increment</button>
            <button onClick={() => dispatch({'type': 'decrement', 'value': 2})}>Decrement</button>
            <button onClick={() => dispatch({'type': 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo;