import merge from 'lodash/merge';
import { 
    RECEIVE_ALL_BUSINESSES ,
    RECEIVE_SINGLE_BUSINESS,
    REMOVE_A_BUSINESS,
} from '../../actions/business_actions'

const businessesReducer = (state={},action) =>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses 

        case RECEIVE_SINGLE_BUSINESS:
            return merge({}, state, { [action.business.id]: action.business });

        case REMOVE_A_BUSINESS:
            let newState = Object.assign({},state)
            delete newState[action.business.id]
            return newState 

        default:
            return state 
    }
}
export default businessesReducer