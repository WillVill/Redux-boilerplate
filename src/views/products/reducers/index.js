import {combineReducers} from 'redux';
import UserReducer from './users';
import ActiveUserReducer from './activeUser';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers
