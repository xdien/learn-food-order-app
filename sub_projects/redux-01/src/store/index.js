// const redux = require('redux');

// const counterReducer = (state,action) =>{
//     return {
//         counter: 0
//     }
// };

// const store = redux.createStore();

import { createStore} from 'redux';

const counterReducer = (state = {counter: 0}, action) =>{
    if(action.type === 'increment'){
        return {counter: state.counter+1};
    }
    if(action.type === 'deccrement'){
        return {counter: state.counter -1 };
    }
    return state;
};

const store = createStore(counterReducer);

export default store;