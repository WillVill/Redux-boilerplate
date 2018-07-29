import {combineReducers} from 'redux';
import Users from './views/products/reducers/users';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: Users
});

export default allReducers
