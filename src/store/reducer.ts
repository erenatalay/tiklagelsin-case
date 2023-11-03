import { combineReducers } from 'redux';
import authStore from './slice/authDataSlice';
import mainStore from './slice/mainDataSlice';
const rootReducer = combineReducers({
    authReducer : authStore.reducer,
    mainReducer : mainStore.reducer

});

export default rootReducer;