import merge from 'lodash/merge';
import {UI_MODAL_TURN_ON,UI_MODAL_TURN_OFF} from '../actions/ui_actions'

const uiReducer = (state = {}, action) => {
    Object.freeze(state)
  switch(action.type) {
    case UI_MODAL_TURN_ON:
      return merge({}, state, { component: action.component, modalOpacity:action.opacity });

    case UI_MODAL_TURN_OFF:
      return {}
    default:
      return state;
  }

}
export default uiReducer;