import { createStore, combineReducers } from 'edux';
import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    orders: orderReducer,
});

const store = createStore(rootReducer);

export default store;