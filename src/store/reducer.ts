import { combineReducers } from 'redux';
import authStore from './slice/authDataSlice';
import mainStore from './slice/mainDataSlice';
import cartStore from './slice/cartDataSlice';
const rootReducer = combineReducers({
    authReducer : authStore.reducer,
    mainReducer : mainStore.reducer,
    cartReducer : cartStore.reducer

});

export default rootReducer;