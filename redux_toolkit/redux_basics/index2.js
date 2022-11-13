const axios = require('axios');
const redux = require('redux');
const createStore = redux.createStore;

const applyMiddleWare = redux.applyMiddleware;
const thunkMiddleWare = require('redux-thunk').default;

const initialState = {
    loading: false,
    users: [],
    error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

function fetchUsersRequest() {
    return {
        type: FETCH_USERS_REQUEST
    }
}

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }

        case FETCH_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        }
        case FETCH_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.map(user => user.id);
            dispatch(fetchUsersSuccess(users))
        }).catch(err => {
            dispatch(fetchUsersError(err.message));
        });
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
console.log('initial state value: ', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated store value: ', store.getState()));
store.dispatch(fetchUsers());
