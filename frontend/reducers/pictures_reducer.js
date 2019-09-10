
import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PICTURE } from '../actions/pictures_actions'

const picturesReducer = (state={},action) =>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SINGLE_PICTURE:
            return action.picture
        default:
            return state 
    }
}
export default picturesReducer