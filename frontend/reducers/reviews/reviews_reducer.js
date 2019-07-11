
import {RECEIVE_REVIEW,
REMOVE_REVIEW ,
RECEIVE_REVIEW_ERROR } from '../../actions/review_actions'

const reviewsReducer = ( state={}, action)=>{
    Object.freeze(state)
    const newState= Object.assign({},state)
    switch(action.type){
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW:
            delete newState[action.id] 
            return newState
        default:
            return state
    }
}
export default reviewsReducer