import merge from 'lodash/merge';
import { 
    RECEIVE_ALL_BUSINESSES ,
    RECEIVE_SINGLE_BUSINESS,
    REMOVE_A_BUSINESS,
    RECEIVE_PICTURE
} from '../../actions/business_actions'

const businessesReducer = (state={},action) =>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_BUSINESSES:
            //console.log('wer recieve new businesses???')
            return action.businesses 

        case RECEIVE_SINGLE_BUSINESS:
            return merge({}, state, { [action.business.id]: action.business });

        case REMOVE_A_BUSINESS:
            let newState = Object.assign({},state)
            delete newState[action.business.id]
            return newState 
        case RECEIVE_PICTURE:
            //debugger
            //return merge({}, state, { [action.business.id]: action.business }); 
            // WHAT is state??? is it the entire state? or is the buisiness peice???
            //if its the busienss peiece i just need to key into the buisness id
            //then push the new action info
            return {}
        default:
            return state 
    }
}
export default businessesReducer