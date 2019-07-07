import {BUSINESS_ERROR} from '../../actions/business_actions'
const businessFormErrors = (state=[],action)=>{
    Object.freeze(state)
    switch(action.type){
        case BUSINESS_ERROR:
            return action.errors
        default:
            return state
    }
}

export default businessFormErrors