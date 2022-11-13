import { BUY_CAKE } from "./cakeTypes.js";

const initialState = {
    num_of_cakes : 20
}
const cakeReducers = (state = initialState, action)  => {
    switch(action.type) {
        case BUY_CAKE : return {
            num_of_cakes: state.num_of_cakes - 1
        }
        default: return state;
    }
}
export default cakeReducers;