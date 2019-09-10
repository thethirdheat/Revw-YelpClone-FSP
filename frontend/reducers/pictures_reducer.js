
import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PICTURE } from '../actions/pictures_actions'

import {UI_MODAL_TURN_OFF} from '../actions/ui_actions'
const picturesReducer = (state={},action) =>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SINGLE_PICTURE:
            return action.picture
        case UI_MODAL_TURN_OFF:
            return {}
        default:
            return state 
    }
}
export default picturesReducer