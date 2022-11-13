// Import the redux library and assign the createStore function in a variable.
const redux = require('redux');
const createStore = redux.createStore;

// Action Type.
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Actions
function buyCake() {
    return {
        type: BUY_CAKE,
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// Initial State.
const initialState = {
    num_of_cakes: 20,
    num_of_icecream: 30,
}

const reducer = ( state= initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return { 
            ...state,
            num_of_cakes: state.num_of_cakes - 1 
        }
        case BUY_ICECREAM: return {
            ...state, 
            num_of_icecream: state.num_of_icecream - 1
        }
        default: return state;
    }
}

const store = createStore(reducer);
console.log('Initial State', store.getState());

// const unsubscribe = store.subscribe( () => console.log('updated state', store.getState() ) );

// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());

// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());

// unsubscribe();