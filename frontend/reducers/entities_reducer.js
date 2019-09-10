import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import businessesReducer from './business/businesses_reducer';
import reviewsReducer from '../reducers/reviews/reviews_reducer'
import picturesReducer from '../reducers/pictures_reducer'
export default combineReducers({
    businesses: businessesReducer,
    user: usersReducer,
    reviews: reviewsReducer,
    pictures: picturesReducer
})