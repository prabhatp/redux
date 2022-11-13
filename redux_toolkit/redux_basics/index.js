// Create Actions
const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Testing the buy cake"
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Testing the buy cake"
    }
}

// Create initial State
// const initialState = {
//     noOfCakes: 10,
//     noOfIcecream: 20,
// }

const initialCakeState = {
    noOfCakes: 10,
}
const initialIceCreamState = {
    noOfIcecream : 20,
}

// Create reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: 
//             return {
//                 ...state,
//                 noOfCakes: state.noOfCakes - 1
//             }
//         case BUY_ICECREAM: {
//             return {
//                 ...state,
//                 noOfIcecream: state.noOfIcecream - 1
//             }
//         }
//         default: 
//             return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            }
        } 
        default: return state;  
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: {
            return {
                ...state,
                noOfIcecream: state.noOfIcecream - 1
            }
        }
        default: return state;  
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log('initial state value: ', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated store value: ', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();