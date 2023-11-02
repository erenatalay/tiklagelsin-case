import { combineReducers } from 'redux';
import authStore from './slice/authDataSlice';
const rootReducer = combineReducers({
    authReducer : authStore.reducer
});

export default rootReducer;