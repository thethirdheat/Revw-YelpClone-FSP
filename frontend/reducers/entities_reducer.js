import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import businessesReducer from './business/businesses_reducer';
export default combineReducers({
    businesses: businessesReducer,
    user: usersReducer
})