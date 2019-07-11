
import {RECEIVE_REVIEW,
REMOVE_REVIEW ,
RECEIVE_REVIEW_ERROR } from '../../actions/review_actions'
import {RECEIVE_SINGLE_BUSINESS} from '../../actions/business_actions'


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
        case RECEIVE_SINGLE_BUSINESS:
            //console.log("this is in reveis reducer", action)



            return Object.assign({},state,action.business.reviews)||{}
        default:
            return state
    }
}
export default reviewsReducer