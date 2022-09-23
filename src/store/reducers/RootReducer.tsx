import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import loadingReducers from './LoadingReducers';

const reducers = combineReducers({
    ...loginReducers,
    ...loadingReducers,
});

const rootReducer = (state: any, action: any) => reducers(state, action);

export default rootReducer;