const redux = require('redux');
const createStore = redux.createStore;

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Actions
function increment() {
    return {
        type: INCREMENT
    }
}

function decrement() {
    return {
        type: DECREMENT
    }
}

function reset() {
    return {
        type: RESET
    }
}

const initialState = {
    counter : 0,
}

const reducer = ( state = initialState, action ) => {
    console.log('state', state)
    switch(action.type) {
        case INCREMENT : return { counter: state.counter + 1 }
        case DECREMENT : return { counter: state.counter - 1 }
        case RESET : return state;
        default: return state;
    }
}

const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe( () => console.log('updated state', store.getState()))

function incrementCounter() {
    store.dispatch(increment());
}
function decrementCounter() {
    store.dispatch(decrement());
}

function resetCounter() {
    store.dispatch(reset());
}

unsubscribe();
