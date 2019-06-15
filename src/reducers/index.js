import {combineReducers} from 'redux';
import product from './product';
import cart from './cart';
import message from './message';
const appReducers = combineReducers({
    product,
    cart,
    message
});
export default appReducers;