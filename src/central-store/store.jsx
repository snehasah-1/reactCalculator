import {createStore,combineReducers} from 'redux';
import {calculateReducer} from '../reducer/calculatorReducer';

const rootStore = combineReducers({
    calculateReducer,
});

const store = createStore(rootStore);
export default store;