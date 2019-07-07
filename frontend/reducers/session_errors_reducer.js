import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_SESSION,
  CLEAR_ERRORS
} from '../actions/session_actions';

//export const BUSINESS_ERROR = "BUSINESS_ERROR"

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_SESSION:
      return [];
    case CLEAR_ERRORS:
      const newAr =[]
      return newAr
    default:
      return state;
  }
};
